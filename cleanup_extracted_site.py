from pathlib import Path
import re


ROOT = Path("/Users/iannewman/Desktop/Project/Portfolio")
SOURCE_HTML = ROOT / "index.html"
OUTPUT_DIR = ROOT / "site"
CSS_DIR = OUTPUT_DIR / "assets" / "css"
JS_DIR = OUTPUT_DIR / "assets" / "js"
BACKUP_RAW = ROOT / "index.raw-extracted.html"


def is_hard_boundary(line: str) -> bool:
    s = line.strip()
    if not s:
        return True
    if re.match(r"^</?(html|head|body)>$", s, re.I):
        return True
    if re.match(r"^</(script|style)>$", s, re.I):
        return True
    if s in {"<script>", "<style>"}:
        return True
    return False


def should_join(current: str, next_line: str) -> bool:
    cur = current.strip()
    nxt = next_line.strip()
    if not cur or not nxt:
        return False
    if is_hard_boundary(cur) or is_hard_boundary(nxt):
        return False

    join = False

    if cur.endswith(("-", "/", ":", "=", ",", ".", "(", "[", "{", "\"", "'", "\\", "+", "?")):
        join = True
    if re.search(r"[A-Za-z0-9_]$", cur) and re.match(r"^[A-Za-z0-9_]", nxt):
        if len(cur) > 16 or len(nxt) > 16:
            join = True
    if cur.endswith(("https://", "http://", "www.")):
        join = True
    if re.search(r'(src|href|id|type|content|name)\s*=\s*["\'][^"\']*$', cur, re.I):
        join = True
    if cur.lstrip().startswith("<") and ">" not in cur and not nxt.startswith("<"):
        join = True
    if cur.endswith(",") and re.match(r'^["\']', nxt):
        join = True
    if cur.count('"') % 2 == 1 and re.match(r'^[",:\]\}]', nxt):
        join = True
    if cur.count("'") % 2 == 1 and re.match(r"^[',:\]\}]", nxt):
        join = True
    if re.search(r"[A-Za-z0-9_]$", cur) and re.match(r"^[\.,]", nxt):
        join = True

    if re.match(r"^\s*(//|/\*|\*|<!--|-->|<|}|\)|\])", nxt):
        return False
    if re.match(r"^\s*(var|let|const|function|if|for|while|return|class|try|catch)\b", nxt):
        return False
    return join


def unwrap_soft_lines(text: str) -> str:
    lines = text.splitlines()
    out = []
    i = 0
    while i < len(lines):
        cur = lines[i].rstrip("\n")
        while i + 1 < len(lines) and should_join(cur, lines[i + 1]):
            cur = cur + lines[i + 1].strip()
            i += 1
        out.append(cur)
        i += 1
    return "\n".join(out) + "\n"


def split_styles(html: str) -> str:
    CSS_DIR.mkdir(parents=True, exist_ok=True)
    style_re = re.compile(r"<style(?:\s[^>]*)?>([\s\S]*?)</style>", re.I)
    count = 0

    def replace_style(match: re.Match) -> str:
        nonlocal count
        count += 1
        css = (match.group(1) or "").strip() + "\n"
        (CSS_DIR / f"inline-{count}.css").write_text(css, encoding="utf-8")
        return f'<link rel="stylesheet" href="assets/css/inline-{count}.css">'

    return style_re.sub(replace_style, html)


def split_scripts(html: str) -> str:
    JS_DIR.mkdir(parents=True, exist_ok=True)
    script_re = re.compile(r"<script(?P<attrs>[^>]*)>(?P<body>[\s\S]*?)</script>", re.I)
    count = 0

    def replace_script(match: re.Match) -> str:
        nonlocal count
        attrs = match.group("attrs") or ""
        body = match.group("body") or ""
        if re.search(r"\ssrc\s*=\s*['\"]", attrs, re.I):
            return match.group(0)
        if re.search(r"type\s*=\s*['\"]application/json['\"]", attrs, re.I):
            return match.group(0)

        count += 1
        (JS_DIR / f"inline-{count}.js").write_text(body.strip() + "\n", encoding="utf-8")
        return f'<script src="assets/js/inline-{count}.js"></script>'

    return script_re.sub(replace_script, html)


def clear_previous_assets() -> None:
    if CSS_DIR.exists():
        for p in CSS_DIR.glob("inline-*.css"):
            p.unlink()
    if JS_DIR.exists():
        for p in JS_DIR.glob("inline-*.js"):
            p.unlink()


def main() -> None:
    raw = SOURCE_HTML.read_text(encoding="utf-8", errors="ignore")
    BACKUP_RAW.write_text(raw, encoding="utf-8")

    normalized = unwrap_soft_lines(raw)

    OUTPUT_DIR.mkdir(exist_ok=True)
    clear_previous_assets()

    normalized = split_styles(normalized)
    normalized = split_scripts(normalized)
    (OUTPUT_DIR / "index.html").write_text(normalized, encoding="utf-8")

    css_count = len(list(CSS_DIR.glob("inline-*.css")))
    js_count = len(list(JS_DIR.glob("inline-*.js")))
    print(f"Wrote {(OUTPUT_DIR / 'index.html')}")
    print(f"CSS files: {css_count}")
    print(f"JS files: {js_count}")


if __name__ == "__main__":
    main()
