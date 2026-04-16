from pathlib import Path
import re


ROOT = Path("/Users/iannewman/Desktop/Project/Portfolio")
SOURCE_DIR = ROOT / "site"
OUTPUT_DIR = ROOT / "site-maintainable"


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="ignore")


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def merge_css(html: str) -> str:
    css_tag_re = re.compile(r'<link\s+rel="stylesheet"\s+href="assets/css/inline-(\d+)\.css"\s*>', re.I)
    matches = list(css_tag_re.finditer(html))
    if not matches:
        return html

    seen = set()
    ordered_indices = []
    for m in matches:
        idx = m.group(1)
        if idx not in seen:
            seen.add(idx)
            ordered_indices.append(idx)

    css_blocks = []
    for idx in ordered_indices:
        css_path = SOURCE_DIR / "assets" / "css" / f"inline-{idx}.css"
        if css_path.exists():
            css_blocks.append(f"/* inline-{idx}.css */\n" + read(css_path).strip() + "\n")

    merged_css = "\n\n".join(css_blocks).strip() + "\n"
    write(OUTPUT_DIR / "assets" / "css" / "styles.bundle.css", merged_css)

    html_without_inline_css = css_tag_re.sub("", html)
    bundle_tag = '\n    <link rel="stylesheet" href="assets/css/styles.bundle.css">\n'
    if "</head>" in html_without_inline_css:
        return html_without_inline_css.replace("</head>", bundle_tag + "</head>", 1)
    return bundle_tag + html_without_inline_css


def merge_js_contiguous_runs(html: str) -> str:
    js_tag_re = re.compile(r'<script\s+src="assets/js/inline-(\d+)\.js"></script>', re.I)

    out = []
    pos = 0
    run_count = 0

    while True:
        m = js_tag_re.search(html, pos)
        if not m:
            out.append(html[pos:])
            break

        # Emit up to run start.
        run_start = m.start()
        out.append(html[pos:run_start])

        # Collect contiguous inline script tags with only whitespace/comments between.
        run_matches = [m]
        scan_pos = m.end()
        while True:
            gap_match = re.match(r'(\s|<!--[\s\S]*?-->)*', html[scan_pos:])
            gap_len = gap_match.end() if gap_match else 0
            next_pos = scan_pos + gap_len
            nm = js_tag_re.match(html[next_pos:])
            if not nm:
                break
            abs_m = re.compile(js_tag_re.pattern, re.I).match(html, next_pos)
            if not abs_m:
                break
            run_matches.append(abs_m)
            scan_pos = abs_m.end()

        run_count += 1
        bundle_name = f"scripts.bundle.{run_count}.js"
        js_blocks = []
        for rm in run_matches:
            idx = rm.group(1)
            js_path = SOURCE_DIR / "assets" / "js" / f"inline-{idx}.js"
            if js_path.exists():
                js_blocks.append(f"/* inline-{idx}.js */\n" + read(js_path).rstrip() + "\n")
        merged_js = "\n\n".join(js_blocks).strip() + "\n"
        write(OUTPUT_DIR / "assets" / "js" / bundle_name, merged_js)

        out.append(f'<script src="assets/js/{bundle_name}"></script>')
        pos = run_matches[-1].end()

    return "".join(out)


def copy_non_inline_assets() -> None:
    # Keep originals copied for traceability/debugging.
    src_css = SOURCE_DIR / "assets" / "css"
    src_js = SOURCE_DIR / "assets" / "js"
    dst_css = OUTPUT_DIR / "assets" / "css" / "inline-originals"
    dst_js = OUTPUT_DIR / "assets" / "js" / "inline-originals"
    dst_css.mkdir(parents=True, exist_ok=True)
    dst_js.mkdir(parents=True, exist_ok=True)

    for p in src_css.glob("inline-*.css"):
        write(dst_css / p.name, read(p))
    for p in src_js.glob("inline-*.js"):
        write(dst_js / p.name, read(p))


def main() -> None:
    source_index = SOURCE_DIR / "index.html"
    if not source_index.exists():
        raise FileNotFoundError(f"Missing source file: {source_index}")

    html = read(source_index)
    html = merge_css(html)
    html = merge_js_contiguous_runs(html)
    copy_non_inline_assets()

    write(OUTPUT_DIR / "index.html", html)
    print(f"Wrote {OUTPUT_DIR / 'index.html'}")

    css_bundle = OUTPUT_DIR / "assets" / "css" / "styles.bundle.css"
    js_bundles = sorted((OUTPUT_DIR / "assets" / "js").glob("scripts.bundle.*.js"))
    print(f"CSS bundle: {css_bundle.exists()}")
    print(f"JS bundles: {len(js_bundles)}")


if __name__ == "__main__":
    main()
