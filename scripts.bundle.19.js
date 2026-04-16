/* inline-40.js */
"use strict";
    (self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([["8426"], {7146(e, r, t) {t.r(r),t.d(r, {platformWorkerPromise: () => m
            });
            let s = window.viewerModel,a = s?.siteFeatures || [],o = s?.siteFeaturesConfigs?.platform,p = s?.siteAssets?.clientTopology,l = s?.site?.externalBaseUrl,i = window.usedPlatformApis,c = "undefined" != typeof Worker && a.includes("platform") && !!o,n = async () => {
                    let e;
                    if (!o?.clientWorkerUrl || !o?.appsScripts || !o?.bootstrapData)
                        return void console.warn("[create-worker] Platform config incomplete (missing clientWorkerUrl, appsScripts, or bootstrapData), skippingworker creation");
                    let r = "platform_create-worker started";
                    performance.mark(r);
                    let {clientWorkerUrl: t, appsScripts: s, bootstrapData: a, sdksStaticPaths: c} = o,{appsSpecData: n={}, appDefIdToIsMigratedToGetPlatformApi:m={}, forceEmptySdks: d} = a || {},f = new Worker(t.startsWith("http://localhost:") ||
t.startsWith("https://bo.wix.com/suricate/") || document.baseURI !== location.href ? (e = new Blob([`importScripts('${t}');`], {type: "application/javascript"
                        }), URL.createObjectURL(e)) : t.replace(p?.fileRepoUrl || "", `${l}/_partials`)),u = s?.urls || {},k = Object.keys(u).filter(e => !n[e]?.isModuleFederated).reduce((e,r) => (e[r] = u[r], e), {});
                    c && c.mainSdks && c.nonMainSdks && (Object.values(m).every(e => 
e) || d ? f.postMessage({type: "preloadNamespaces",namespaces: i
                    }) : f.postMessage({type: "preloadAllNamespaces",sdksStaticPaths: c
                    })),f.postMessage({type: "platformScriptsToPreload",appScriptsUrls: k
                    });
                    let w = "platform_create-worker ended";
                    return performance.mark(w), performance.measure("Create Platform Web Worker", r, w), f
                },m = c ? n() : Promise.resolve()
        }
    }, function(e) {e(e.s = 7146)
    }]);
    //# 
sourceMappingURL=createPlatformWorker.inline.5582455f.bundle.min.js.map


/* inline-41.js */
"use strict";
    (self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([["1625"], {97534() {
            var e;
            let n,a,t;
            e = window,n = new Set,a = [],t = e => {
                let a = [];
                n.forEach(n => {e.canHandleEvent(n) && a.push(n)
                }),a.forEach(a => {n.delete(a),e.handleEvent(a)
                })
            },e.addEventListener("message", e => {
                let d = {source: e.source,data: e.data,origin: e.origin
                    },s = a.find(e => e.canHandleEvent(d));
                s ? (t(s), s.handleEvent(d)) : n.add(d)
            }),e._addWindowMessageHandler = e => {a.push(e),t(e)
            }
        }
    }, function(e) {e(e.s = 97534)
    }]);
    //# 
sourceMappingURL=windowMessageRegister.inline.d8470fd7.bundle.min.js.map
