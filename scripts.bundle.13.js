/* inline-24.js */
window.fedops = JSON.parse(document.getElementById('wix-fedops').textContent)


/* inline-25.js */
(() => {"use strict";
        var e = {},r = {};
        function t(i) {
            var o = r[i];
            if (void 0 !== o)
                return o.exports;
            var n = r[i] = {exports: {}
            };
            return e[i](n, n.exports, t), n.exports
        }
        t.rv = () => "1.6.6",t.ruid = "bundler=rspack@1.6.6";
        let i = "unknown",o = e => {
                let r,t,o = (r = e.cache, t = e.varnish, `${r || i},${t || i}`);
                return {caching: o,isCached: o.includes("hit"),...e.microPop ? {microPop: e.microPop
                    } : {}
                }
            };
        function n() {
            return "undefined" != typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                let r = 16 * Math.random() | 0;
                return ("x" === e ? r : 3 & r | 8).toString(16)
            })
        }
        let a = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,s = /iPhone|iPad|iPod/i;
        !function() {
            var e;
            let r,{site: t, rollout: c, fleetConfig: d, requestUrl: p, isInSEO: l,shouldReportErrorOnlyInPanorama: u} = window.fedops.data,m = (e => {
                    let {userAgent: r} = e.navigator;
                    return /instagram.+google\/google/i.test(r) ? "" : /bot|google(?!play)|
phantom|crawl|spider|headless|slurp|facebookexternal|Lighthouse|PTST|^mozilla\/4\.0$|^\s*$/i.test(r) ? "ua" : ""
                })(window) || (() => {
                    try {
                        if (window.self === window.top)
                            return ""
                    } catch {}
                    return "iframe"
                })() || (() => {
                    if (!Function.prototype.bind)
                        return "bind";
                    let {document: e, navigator: r} = window;
                    if (!e || !r)
                        return "document";
                    let {webdriver: t, userAgent: i, plugins: o, languages: n} = r;
                    if (t)
                        return "webdriver";
                    if (!o || Array.isArray(o))
                        return "plugins";
                    if (Object.getOwnPropertyDescriptor(o, "0")?.writable)
                        return "plugins-extra";
                    if (!i)
                        return "userAgent";
                    if (i.indexOf("Snapchat") > 0 && e.hidden)
                        return "Snapchat";
                    if (!n || 0 === n.length || !Object.isFrozen(n))
                        return "languages";
                    try {throw Error()
                    } catch (e) {
                        if (e instanceof Error) {
                            let {stack: r} = e;
                            if (r && / (\(internal\/)|(\(?file:\/)/.test(r))
                                return "stack"
                        }
                    }
                    return ""
                })() || (l ? "seo" : ""),w = !!m,{isCached: h, caching: f, microPop: v} = ((e, r) => {
                    let t,n = (e => {
                            let r;
                            try {r = e()
                            } catch {r = []
                            }
                            let t = r.reduce((e, r) => (e[r.name] = r.description, e), {});
                            return {cache: t.cache,varnish: t.varnish,microPop: t.dc
                            }
                        })(r);
                    if (n.cache || n.varnish)
                        return o({cache: n.cache || i,varnish: n.varnish || i,microPop: n.microPop
                        });
                    let a = (t = e.match(/ssr-caching="?cache[,#]\s*desc=([\w-]+)(?:[,#]
\s*varnish=(\w+))?(?:[,#]\s*dc[,#]\s*desc=([\w-]+))?(?:"|;|$)/)) && t.length ? {cache: t[1],varnish: t[2] || i,microPop: t[3]
                    } : null;
                    return a ? o(a) : {caching: i,isCached: !1
                    }
                })(document.cookie, () => performance.getEntriesByType("navigation")
[0].serverTiming || []),g = {WixSite: 1,UGC: 2,Template: 3
                }[t.siteType] || 0,x = t.appNameForBiEvents,{isDACRollout: S, siteAssetsVersionsRollout: y} = c,I = +!!S,$ = +!!y,P = 0 === d.code || 1 === d.code ? d.code : null,b = 2 === d.code,_ = Date.now() - window.initialTimestamps.initialTimestamp,O = Math.round(performance.now() - (() => {
                    try {
                        let e = performance.getEntriesByType("navigation")[0];
                        if (e && e.responseStart > 0 && e.responseStart < 
performance.now())
                            return e.activationStart ?? 0
                    } catch {}
                    return 0
                })()),{visibilityState: T} = document,{fedops: R, addEventListener: k, thunderboltVersion: A} = window;
            R.apps = R.apps || {},R.apps[x] = {startLoadTime: O
            },R.sessionId = t.sessionId,R.vsi = n(),R.is_cached = h,R.phaseStarted = C(28),R.phaseEnded = C(22),performance.mark("[cache] " + f + (v ? " [" + v + "]" : "")),R.reportError = (e, r="load") => {
                let t = e?.reason || e?.message;
                t ? (u || M(26, `&errorInfo=${t}&errorType=${r}`), N({error: {name: r,message: t,stack: e?.stack
                    }
                })) : e.preventDefault()
            },k("error", R.reportError),k("unhandledrejection", R.reportError);
            let E = !1;
            function M(e, r="") {
                if (p.includes("suppressbi=true"))
                    return;
                var i = "//frog.wix.com/bolt-performance?src=72&evid=" + e + "&appName=" + x + "&is_rollout=" + P + "&is_company_network=" + b +"&is_sav_rollout=" + $ + "&is_dac_rollout=" + I + "&dc=" + t.dc + (v ?"&microPop=" + v : "") + "&is_cached=" + h + "&msid=" + t.metaSiteId +"&session_id=" + window.fedops.sessionId + "&ish=" + w + "&isb=" + w + (w ?"&isbr=" + m : "") + "&vsi=" + window.fedops.vsi + "&caching=" + f + (E ?",browser_cache" : "") + "&pv=" + T + "&pn=1&v=" + A + "&url=" +encodeURIComponent(p) + "&st=" + g + `&ts=${_}&tsn=${O}` + r;
                let o = !1;
                if (!/\(iP(hone|ad|od);/i.test(window?.navigator?.userAgent))
                    try {o = navigator.sendBeacon(i)
                    } catch {}
                o || (new Image().src = i)
            }
            function N({transaction: e, error: r}) {
                let i = [{fullArtifactId: "com.wixpress.html-client.wix-thunderbolt",componentId: `${"Studio" === window.fedops.data.site.editorName ?"wix-studio" : `thunderbolt${window.fedops.data.site.isResponsive ? "-responsive" : ""}`}`,platform: "viewer",msid: window.fedops.data.site.metaSiteId,sessionId: window.fedops.vsi,sessionTime: Date.now() - window.initialTimestamps.initialTimestamp,logLevel: r ? "ERROR" : "INFO",message: r?.message ?? (e?.name && `${e.name} START`),errorName: r?.name,errorStack: r?.stack,transactionName: e?.name,transactionAction: e && "START",isSsr: !1,dataCenter: t.dc,isCached: !!h,isRollout: !!P,isHeadless: !!w,isDacRollout: !!I,isSavRollout: !!$,isCompanyNetwork: !!b
                }];
                try {
                    let e = JSON.stringify({messages: i
                    });
                    return navigator.sendBeacon("https://panorama.wixapps.net/api/v1/bulklog", e)
                } catch (e) {console.error(e)
                }
            }
            function C(e) {
                return (r, t) => {
                    let i = Date.now() - _,o = `&name=${r}&duration=${i}`,n = t && t.paramsOverrides ?Object.keys(t.paramsOverrides).map(e => e + "=" +t.paramsOverrides[e]).join("&") : "";
                    M(e, n ? `${o}&${n}` : o)
                }
            }
            if (k("pageshow", ({persisted: e}) => {e && !E && (E = !0, R.is_cached = !0)
            }, !0), window.__browser_deprecation__)
                return;
            let D = document.referrer ? `&document_referrer=${document.referrer}` : "",W = window.sessionStorage.getItem("isMpa"),B = W ? `&isMpa=${W}` : "";
            W && window.sessionStorage.removeItem("isMpa");
            let U = window.sessionStorage.getItem("mpaSessionId");
            U || (U = n(), window.sessionStorage.setItem("mpaSessionId", U)),window.fedops.mpaSessionId = U;
            let j = function(e) {
                    let {userAgent: r, devicePixelRatio: t, innerWidth: i, outerWidth: o, visualViewportScale: n} = e;
                    return r && a.test(r) ? !!(r && s.test(r)) && (n || 1) > 1 : function(e, r, t) {
                        if (!e || !r || !t)
                            return 1;
                        let i = e && r && t ? Math.trunc(e * r) <= t ? 1 : 2 : 1;
                        return !i || e <= i ? 1 : Math.round(e / i * 100) / 100
                    }(t, i, o) > 1
                }({userAgent: navigator.userAgent,devicePixelRatio: window.devicePixelRatio || 1,innerWidth: window.innerWidth,outerWidth: window.outerWidth,visualViewportScale: window.visualViewport?.scale
                }),F = (e = window, r = e.visualViewport?.scale, {devicePixelRatio: e.devicePixelRatio || 1,innerWidth: e.innerWidth,outerWidth: e.outerWidth,...null != r ? {visualViewportScale: r
                    } : {}
                });
            M(21, `&platformOnSite=${window.fedops.data.platformOnSite}
&hasInitialZoom=${j}&infoInitialZoom=$
{encodeURIComponent(JSON.stringify(F))}&mpaSessionId=${U}${D}${B}`),N({transaction: {name: "PANORAMA_COMPONENT_LOAD"
                }
            })
        }()
    })();
    //# 
sourceMappingURL=sendFedopsLoadStarted.inline.1189ae2c.bundle.min.js.map


/* inline-26.js */
if (typeof Promise === 'undefined' ||
    typeof Set === 'undefined' ||
    typeof Object.assign === 'undefined' ||
    typeof Array.from === 'undefined' ||
    typeof Symbol === 'undefined'
    ) {
        // send bi in order to detect the browsers in which polyfills are not workingwindow.fedops.phaseStarted('missing_polyfills')
    }


/* inline-27.js */
(() => {"use strict";
        var e,r,o,a,t,c,n,i = {},d = {};
        function f(e) {
            var r = d[e];
            if (void 0 !== r)
                return r.exports;
            var o = d[e] = {id: e,loaded: !1,exports: {}
            };
            return i[e].call(o.exports, o, o.exports, f), o.loaded = !0, o.exports
        }
        if (f.m = i, f.n = e => {
            var r = e && e.__esModule ? () => e.default : () => e;
            return f.d(r, {a: r
            }), r
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => 
e.__proto__, f.t = function(o, a) {
            if (1 & a && (o = this(o)), 8 & a || "object" == typeof o && o && (4 & a && 
o.__esModule || 16 & a && "function" == typeof o.then))
                return o;
            var t = Object.create(null);
            f.r(t);
            var c = {};
            e = e || [null, r({}), r([]), r(r)];
            for (var n = 2 & a && o; ("object" == typeof n || "function" == typeof n) && !
~e.indexOf(n); n = r(n))
                Object.getOwnPropertyNames(n).forEach(e => {c[e] = () => o[e]
                });
            return c.default = () => o, f.d(t, c), t
        }, f.d = (e, r) => {
            for (var o in r)
                f.o(r, o) && !f.o(e, o) && Object.defineProperty(e, o, {enumerable: !0,get: r[o]
                })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce((r, o) => (f.f[o](e, r), r), [])), f.u = e => "6948" === e ? "thunderbolt-commons.1282f23b.bundle.min.js" :"3033" === e ? "fastdom.inline.58a6f94c.bundle.min.js" : "1619" === e ?"custom-element-utils.inline.dfd062cc.bundle.min.js" : "5205" === e ? "render-indicator.inline.74a8637b.bundle.min.js" : "7151" === e ? "version-indicator.inline.a3a08d5a.bundle.min.js" : "6008" === e ? "bi-common.inline.4cb8b6a1.bundle.min.js" : "" + (({1059: "santa-platform-utils",1090: "speculationRules",1116: "passwordProtectedPage",1122: "group_19",1278: "group_24",131: "siteThemeService",1353: "pageContextService",1374: "editorWixCodeSdk",1438: "sdkStateService",1522: "builderContextProviders",1533: "merge-mappers",1538: "businessLogger",1611: "group_44",1638: "quickActionBar",1732: "aboveTheFoldService",1788: "qaApi",1791: "businessLoggerService",180: "urlService",1802: "provideCssService",1818: "Repeater_FixedColumns",182: "consentPolicy",1869: "windowScroll",1932: "customCss",1951: "group_45",1969: "wixEcomFrontendWixCodeSdk",2017: "debug",2031: "platformInteractionsService",2089: "group_47",2144: "group_30",2220: "group_31",2221: "anchorsService",2226: "translationsService",2242: "builderModuleLoader",2303: "externalServices",2304: "TPAModal",2442: "group_37",2570: "thunderbolt-components-registry",2609: "imagePlaceholder",2616: "linkUtilsService",2624: "group_2",2689: "TPABaseComponent",2735: "TPAPreloaderOverlay",28: "thunderbolt-components-registry-builder",2859: "platformEnvironmentService",2867: "namedSignalsService",2880: "environmentService",294: "stores",2996: "seoService",3026: "lightboxService",3187: "businessManager",3221: "multilingual",3370: "domSelectors",3407: "clientSdk",3531: "panorama",3607: "UnauthorizedComponent",3654: "ssrCache",3714: "seo-api-converters",3801: "wixDomSanitizer",3872: "siteMembers",3884: "tpaModuleProvider",3894: "protectedPages",3979: "dynamicPages",399: "searchBox",3992: "componentsqaapi",3996: "environmentWixCodeSdk",4134: "group_4",4183: "svgLoader",419: "TPAPopup",4217: "group_21",4218: "group_0",4310: "becky-css",4331: "platform",4345: "dashboardWixCodeSdk",4354: "editorElementsDynamicTheme",4443: "pagesService",4499: "siteScrollBlockerService",4675: "stickyToComponent",4708: "reporter-api",477: "group_32",4819: "group_35",489: "platformNamedSignalsService",4990: "accessibility",5002: "group_28",5067: "accessibilityBrowserZoom",5154: "servicesManagerReact",5183: "renderIndicator",5187: "group_7",5213: "scrollToAnchor",5221: "containerSliderService",5238: "triggersAndReactions",5289: "SiteStyles",5296: "platformPubsub",5298: "assetsLoader",5363: "environment",5391: "widgetWixCodeSdk",5474: "platformPageContextService",5675: "group_41",569: "siteMembersService",572: "animationsWixCodeSdk",5745: "ByocStyles",5750: "platformSiteMembersService",5761: "group_10",5794: "seo-api",5837: "group_14",5863: "appMonitoring",5874: "navigation",5901: "group_5",5976: "AppPart",6095: "styleUtilsService",6103: "usedPlatformApis",6134: "routerService",6135: "customUrlMapper",6155: "imagePlaceholderService",6182: "motion",6218: "group_11",6258: "group_20",6285: "versionIndicator",6428: "ContentReflowBanner",6647: "mobileFullScreen",6715: "feedback",6749: "router",6753: "group_36",6839: "platformFedopsLoggerService",6891: "group_38",6979: "consentPolicyService",6992: "platformTranslationsService",700: "module-executor",7016: "externalComponent",7109: "group_43",7141: "group_50",7146: "serviceRegistrar",7200: "canvas",7233: "FontRulersContainer",7284: "widget",7356: "group_48",7360: "AppPart2",7482: "vsm-css",7502: "group_42",7538: "group_8",7554: "headAppenderService",7575: "renderer",7644: "group_6",7716: "group_40",7726: "TPAUnavailableMessageOverlay",7729: "tpa",7796: "Repeater_FluidColumns",7801: "testApi",7859: "siteMembersWixCodeSdk",7921: "interactions",7981: "domStore",8051: "animations",8207: "FontFaces",821: "group_25",8211: "cyclicTabbingService",8255: "platformRouterService",8277: "pageAnchors",8332: "platformSiteThemeService",8339: "platformLinkUtilsService",8428: "containerSlider",8547: "group_49",8559: "TPAWorker",8574: "builderComponent",858: "fedopsLoggerService",8656: "RemoteRefDeadComp",8662: "GhostComp",8678: "cyclicTabbing",87: "ooi",8729: "group_9",8742: "topologyService",8770: "platformStyleUtilsService",8919: "group_3",8932: "group_39",897: "group_29",8970: "contentReflow",898: "group_46",906: "onloadCompsBehaviors",9081: "group_18",9091: "platformTopologyService",9111: "BuilderComponentDeadComp",9182: "group_51",9270: "siteScrollBlocker",9316: "platformPagesService",9387: "group_27",9395: "popups",9421: "provideComponentService",9467: "platformSdkStateService",95: "componentsLoader",959: "group_23",9740: "wix-seo-SEO_DEFAULT",9764: "platformConsentPolicyService",9768: "group_22",9779: "tslib.inline",9845: "routerFetch",9863: "tpaWidgetNativeDeadComp",9980: "mpaNavigation"
        })[e] || e) + "." + ({1039: "ad0ce791",1055: "9485b888",1059: "430926d2",1090: "0f29966f",1116: "6472ea34",1122: "aaeef888",1278: "ae2b90b3",131: "e5a5bdad",1353: "a695f1f0",1374: "0fa38a9f",1393: "16fb4c19",1394: "0c7a5f9c",1438: "eb3b64af",1522: "0df498e8",1533: "ef905939",1538: "382014f6",1611: "d67649e9",1638: "35dbd2c2",1732: "53a6f4ff",1788: "4d43bb24",1791: "f4f3c2ee",180: "fac593a0",1802: "d7c0d6b7",1818: "c804e125",182: "c7f0149b",1869: "b6975c2a",1932: "2b80c49d",1951: "d028eeaa",1969: "fcc99915",1995: "2b804c3e",2017: "b19bf8dd",2031: "4d21915e",2089: "3f5c3883",2121: "d0644c33",2144: "2abbdf6f",2220: "0f878ed4",2221: "49c41eff",2226: "9a8c993d",2242: "7be7e42c",2260: "b8b7f99f",2303: "bf1ce5f4",2304: "07b94870",2339: "c5aa1dd3",2442: "ac57276d",2516: "ef83e24e",2570: "0eba23b8",2609: "a5c38083",2616: "a07731ea",2624: "ba49a84f",2689: "a461f98b",2735: "620dcc01",28: "52fc92b9",2859: "54606a31",2867: "b71e39a1",2870: "429becad",2880: "80be3549",294: "440a73ee",2996: "c8fffdba",3026: "cef2535b",3062: "b78f9359",3140: "ca28bd80",3187: "c15a9e5a",3219: "bde14979",3221: "656b9723",3334: "593cddc8",3370: "0df2cf2d",3407: "ecd4b6f9",3531: "1bdf1744",3600: "29aeab52",3607: "62e6acbf",3654: "a72bfdc3",3714: "3e6995c4",3801: "abfa9346",3853: "489b42ef",3872: "4f6f476c",3884: "564bfefd",3894: "d6c79df7",3979: "1b10d791",399: "01d83934",3992: "1aff0e6d",3996: "dbb376f6",4134: "825d1a51",4150: "d2fa0cad",4183: "173da93c",419: "faf675fc",4217: "4936ccf6",4218: "5120b1c2",4275: "05ca363b",4310: "2e94e0ec",4331: "23f6013c",4345: "a6214447",4354: "bf009bf7",4443: "9a3651d1",4499: "2e37ae88",4675: "d2a5835b",4708: "b7edb858",4711: "23a10462",4729: "1dedb855",477: "643a5cba",4819: "affac707",489: "e526d577",4946: "87adedc3",4990: "5a528201",5002: "98f4bda8",5067: "6895cb62",5116: "a4f55897",5124: "4b9f053e",5144: "2670dce1",5154: "37d2f77a",5183: "d02bfe77",5187: "c0d47db2",5213: "c63ab772",5221: "4923ed9f",5238: "23ab777e",5289: "d59f5b27",5296: "bde4edad",5298: "b9c977d0",5363: "a691c5ac",5391: "0ca4dab5",5474: "8e39cd65",5512: "e135fe4d",5675: "b4a59480",569: "6aa0522a",572: "726e9885",5745: "7d47f58f",5750: "9fa77b6d",5761: "14ee9a9b",5794: "651e6719",5837: "71cad7d9",5863: "d502493c",5872: "a7577c5b",5874: "857097f4",5901: "19f45dc1",5976: "6a428904",6009: "e473a503",603: "0eeaea83",6095: "c98e18d7",6103: "b09c4d5c",6134: "cd731c15",6135: "9a86364c",6155: "89106bcb",6182: "4dedec96",6218: "e2f9d796",6258: "1128a55d",628: "f6e197ba",6285: "09ddf764",6332: "c15d9cc4",6428: "b6c04000",6429: "ab15f46b",6636: "45310c7f",6647: "3c69b7f5",6690: "5654e183",6715: "e79689e8",6749: "07343d28",6753: "bc4eabb9",6839: "e0dabb65",6887: "64cadf7e",6891: "90c9557b",6931: "ffa8b770",6979: "7a18608d",6992: "29d73340",6998: "980ba037",700: "a1243c72",7016: "770371c8",7109: "c4232cd9",7127: "91757485",7141: "c5131fce",7146: "37ebfa27",7188: "e2ef7e77",7200: "e7f9f39c",7233: "6155f9ab",7284: "39255d20",7356: "88c4d753",7360: "e0ddba14",7482: "f5adbcff",7502: "825d0e24",7538: "8d04ec73",7554: "c89222d4",7575: "39ea181b",7587: "af05856f",759: "3c41d6ac",7644: "8fc8a69c",7716: "ceede3c9",7726: "ee36d3f9",7729: "c1bf838d",7796: "edc2952b",7801: "fa6c7c2a",7859: "c31eca95",7921: "1e9d3c28",7981: "a8aee005",8051: "49c55ede",814: "acfce97e",8207: "644da2dc",821: "5a80ef3a",8211: "499341bc",8255: "b63a9021",8277: "b16478c5",829: "9952ffcf",8332: "116a10ae",8339: "466008a8",8345: "e761da98",838: "3e3963ca",8428: "07901925",8547: "20cc0412",8559: "42c00d38",8572: "3820983b",8574: "7aa179d9",858: "e4020f1a",8656: "03c227d1",8662: "5b987681",8678: "7085d18c",8682: "d381c580",87: "5da71659",8708: "8faa9c6e",8729: "c8b7529f",8742: "7de326e2",8770: "b1412238",8868: "13f8dbb6",8919: "6183abba",8932: "08db7306",8968: "14c477f2",897: "b9e9ba25",8970: "e4dd8a93",898: "e0f0e22c",9051: "ece82af0",906: "7e1bb591",9071: "cb18b404",9081: "5a1cc376",9091: "791178e8",9111: "65d7bfe9",9182: "4d5d9c39",9270: "d38ddc5a",9316: "29483d7f",9387: "24507aab",9395: "4f64a536",9421: "7753722c",9467: "f0aea0dc",95: "07f88113",9578: "4d015869",959: "572bd6dc",9709: "a1e30118",9740: "37b5c7b3",9763: "cb780974",9764: "a838cb21",9768: "476583c6",9779: "ca2949bb",9845: "4fed4805",9863: "e9dcd877",9980: "2f1313a1"
        })[e] + ".chunk.min.js", f.miniCssF = e => "5205" === e ? "render-indicator.inline.7af012a4.min.css" : "7151" === e ? "version-indicator.inline.4e01a025.min.css" : "" + ({1818: "Repeater_FixedColumns",2304: "TPAModal",2689: "TPABaseComponent",2735: "TPAPreloaderOverlay",419: "TPAPopup",5187: "group_7",5976: "AppPart",6428: "ContentReflowBanner",7233: "FontRulersContainer",7360: "AppPart2",7726: "TPAUnavailableMessageOverlay",7796: "Repeater_FluidColumns",9863: "tpaWidgetNativeDeadComp"
        })[e] + "." + ({1818: "d6ea6918",2304: "f424469d",2689: "fc3eeaee",2735: "3479478e",419: "a095c4d4",5187: "882d8423",5976: "8f9b1745",6428: "d13d26fb",7233: "147dbd76",7360: "2a44b2a3",7726: "5f394027",7796: "c7fbc499",9863: "574e1682"
        })[e] + ".chunk.min.css", f.g = (() => {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        })(), f.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), o = {}, f.l = 
function(e, r, a, t) {
            if (o[e])
                return void o[e].push(r);
            if (void 0 !== a)
                for (var c, n, i = document.getElementsByTagName("script"), d = 0; d < 
i.length; d++) {
                    var s = i[d];
                    if (s.getAttribute("src") == e) {c = s;
                        break
                    }
                }
            c || (n = !0, (c = document.createElement("script")).timeout = 120, f.nc && 
c.setAttribute("nonce", f.nc), c.src = e),o[e] = [r];
            var l = function(r, a) {c.onerror = c.onload = null,clearTimeout(b);
                    var t = o[e];
                    if (delete o[e], c.parentNode && c.parentNode.removeChild(c), t && 
t.forEach(function(e) {
                        return e(a)
                    }), r)
                        return r(a)
                },b = setTimeout(l.bind(null, void 0, {type: "timeout",target: c
                }), 12e4);
            c.onerror = l.bind(null, c.onerror),c.onload = l.bind(null, c.onload),n && document.head.appendChild(c)
        }, f.r = e => {"undefined" != typeof Symbol && Symbol.toStringTag &&
Object.defineProperty(e, Symbol.toStringTag, {value: "Module"
            }),Object.defineProperty(e, "__esModule", {value: !0
            })
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), a = [], f.O = (e, r, o, t) => {
            if (r) {t = t || 0;
                for (var c = a.length; c > 0 && a[c - 1][2] > t; c--)
                    a[c] = a[c - 1];
                a[c] = [r, o, t];
                return
            }
            for (var n = 1 / 0, c = 0; c < a.length; c++) {
                for (var [r, o, t] = a[c], i = !0, d = 0; d < r.length; d++)
                    (!1 & t || n >= t) && Object.keys(f.O).every(e => f.O[e](r[d])) ? r.splice(d--, 1) : (i = !1, t < n && (n = t));
                if (i) {a.splice(c--, 1);
                    var s = o();
                    void 0 !== s && (e = s)
                }
            }
            return e
        }, f.p = "https://static.parastorage.com/services/wix-thunderbolt/dist/", f.rv = () => "1.6.6", "undefined" != typeof document) {
            var s = function(e, r, o, a, t) {
                    var c = document.createElement("link");
                    return c.rel = "stylesheet", c.type = "text/css", f.nc && (c.nonce = f.nc), c.href = r, c.onerror = c.onload = function(o) {
                        if (c.onerror = c.onload = null, "load" === o.type)
                            a();
                        else {
                            var n = o && ("load" === o.type ? "missing" : o.type),i = o && o.target && o.target.href || r,d = Error("Loading CSS chunk " + e + " failed.\\n(" + i + ")");
                            d.code = "CSS_CHUNK_LOAD_FAILED",d.type = n,d.request = i,c.parentNode && c.parentNode.removeChild(c),t(d)
                        }
                    }, o ? o.parentNode.insertBefore(c, o.nextSibling) : document.head.appendChild(c), c
                },l = function(e, r) {
                    for (var o = document.getElementsByTagName("link"), a = 0; a < 
o.length; a++) {
                        var t = o[a],c = t.getAttribute("data-href") || t.getAttribute("href");
                        if (c && (c = c.split("?")[0]), "stylesheet" === t.rel && (c === e || c 
=== r))
                            return t
                    }
                    for (var n = document.getElementsByTagName("style"), a = 0; a < 
n.length; a++) {
                        var t = n[a],c = t.getAttribute("data-href");
                        if (c === e || c === r)
                            return t
                    }
                },b = {404: 0
                };
            f.f.miniCss = function(e, r) {
                if (b[e])
                    r.push(b[e]);
                else
                    0 !== b[e] && ({1818: 1,2304: 1,2689: 1,2735: 1,419: 1,5187: 1,5205: 1,5976: 1,6428: 1,7151: 1,7233: 1,7360: 1,7726: 1,7796: 1,9863: 1
                    })[e] && r.push(b[e] = new Promise(function(r, o) {
                        var a = f.miniCssF(e),t = f.p + a;
                        if (l(a, t))
                            return r();
                        s(e, t, null, r, o)
                    }).then(function() {b[e] = 0
                    }, function(r) {throw delete b[e], r
                    }))
            }
        }
        t = {404: 0
        },f.f.j = function(e, r) {
            var o = f.o(t, e) ? t[e] : void 0;
            if (0 !== o)
                if (o)
                    r.push(o[2]);
                else if (404 != e) {
                    var a = new Promise((r, a) => o = t[e] = [r, a]);
                    r.push(o[2] = a);
                    var c = f.p + f.u(e),n = Error();
                    f.l(c, function(r) {
                        if (f.o(t, e) && (0 !== (o = t[e]) && (t[e] = void 0), o)) {
                            var a = r && ("load" === r.type ? "missing" : r.type),c = r && r.target && r.target.src;
                            n.message = "Loading chunk " + e + " failed.\n(" + a + ": " + c + ")",n.name = "ChunkLoadError",n.type = a,n.request = c,o[1](n)
                        }
                    }, "chunk-" + e, e)
                } else
                    t[e] = 0
        },f.O.j = e => 0 === t[e],c = (e, r) => {
            var o,a,[c, n, i] = r,d = 0;
            if (c.some(e => 0 !== t[e])) {
                for (o in n)
                    f.o(n, o) && (f.m[o] = n[o]);
                if (i)
                    var s = i(f)
            }
            for (e && e(r); d < c.length; d++)
                a = c[d],f.o(t, a) && t[a] && t[a][0](),t[a] = 0;
            return f.O(s)
        },(n = self.webpackJsonp__wix_thunderbolt_app =self.webpackJsonp__wix_thunderbolt_app || []).forEach(c.bind(null, 0)),n.push = c.bind(null, n.push.bind(n)),f.ruid = "bundler=rspack@1.6.6"
    })();
    //# sourceMappingURL=webpack-runtime.fae73f8f.bundle.min.js.map


/* inline-28.js */
(self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([["3033"], {17709(t) {!function(e) {"use strict";
                var i = function() {},n = e.requestAnimationFrame || e.webkitRequestAnimationFrame ||
e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                        return setTimeout(t, 16)
                    };
                function s() {this.reads = [],this.writes = [],this.raf = n.bind(e),i("initialized", this)
                }
                function r(t) {t.scheduled || (t.scheduled = !0, t.raf(a.bind(null, t)), i("flushscheduled"))
                }
                function a(t) {i("flush");
                    var e,n = t.writes,s = t.reads;
                    try {i("flushing reads", s.length),t.runTasks(s),i("flushing writes", n.length),t.runTasks(n)
                    } catch (t) {e = t
                    }
                    if (t.scheduled = !1, (s.length || n.length) && r(t), e)
                        if (i("task errored", e.message), t.catch)
                            t.catch(e);
                        else
                            throw e
                }
                function u(t, e) {
                    var i = t.indexOf(e);
                    return !!~i && !!t.splice(i, 1)
                }
                s.prototype = {constructor: s,runTasks: function(t) {
                        var e;
                        for (i("run tasks"); e = t.shift();)
                            e()
                    },measure: function(t, e) {i("measure");
                        var n = e ? t.bind(e) : t;
                        return this.reads.push(n), r(this), n
                    },mutate: function(t, e) {i("mutate");
                        var n = e ? t.bind(e) : t;
                        return this.writes.push(n), r(this), n
                    },clear: function(t) {
                        return i("clear", t), u(this.reads, t) || u(this.writes, t)
                    },extend: function(t) {
                        if (i("extend", t), "object" != typeof t)
                            throw Error("expected object");
                        var e = Object.create(this);
                        return function(t, e) {
                            for (var i in e)
                                e.hasOwnProperty(i) && (t[i] = e[i])
                        }(e, t), e.fastdom = this, e.initialize && e.initialize(), e
                    },
                    catch: null
                },t.exports = e.fastdom = e.fastdom || new s
            }("undefined" != typeof window ? window : void 0 !== this ? this : globalThis)
        }
    }]);
    //# sourceMappingURL=fastdom.inline.58a6f94c.bundle.min.js.map


/* inline-29.js */
"use strict";
    (self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([["1619"], {26350(e, t, i) {i.r(t),i.d(t, {STATIC_MEDIA_URL: () => eB,fileType: () => v,fittingTypes: () => r,getData: () => eR,sdk: () => e$,isWEBP: () => S,alignTypes: () => h,htmlTag: () => u,getPlaceholder: () => eC,getResponsiveImageProps: () => ek,upscaleMethods: () => m,getFileExtension: () => k,populateGlobalFeatureSupport: () => q
            });
            let r = {SCALE_TO_FILL: "fill",SCALE_TO_FIT: "fit",STRETCH: "stretch",ORIGINAL_SIZE: "original_size",TILE: "tile",TILE_HORIZONTAL: "tile_horizontal",TILE_VERTICAL: "tile_vertical",FIT_AND_TILE: "fit_and_tile",LEGACY_STRIP_TILE: "legacy_strip_tile",LEGACY_STRIP_TILE_HORIZONTAL: "legacy_strip_tile_horizontal",LEGACY_STRIP_TILE_VERTICAL: "legacy_strip_tile_vertical",LEGACY_STRIP_SCALE_TO_FILL: "legacy_strip_fill",LEGACY_STRIP_SCALE_TO_FIT: "legacy_strip_fit",LEGACY_STRIP_FIT_AND_TILE: "legacy_strip_fit_and_tile",LEGACY_STRIP_ORIGINAL_SIZE: "legacy_strip_original_size",LEGACY_ORIGINAL_SIZE: "actual_size",LEGACY_FIT_WIDTH: "fitWidth",LEGACY_FIT_HEIGHT: "fitHeight",LEGACY_FULL: "full",LEGACY_BG_FIT_AND_TILE: "legacy_tile",LEGACY_BG_FIT_AND_TILE_HORIZONTAL: "legacy_tile_horizontal",LEGACY_BG_FIT_AND_TILE_VERTICAL: "legacy_tile_vertical",LEGACY_BG_NORMAL: "legacy_normal"
                },n = "fill",a = "fill_focal",o = "crop",s = "legacy_crop",l = "legacy_fill",h = {CENTER: "center",TOP: "top",TOP_LEFT: "top_left",TOP_RIGHT: "top_right",BOTTOM: "bottom",BOTTOM_LEFT: "bottom_left",BOTTOM_RIGHT: "bottom_right",LEFT: "left",RIGHT: "right"
                },c = {[h.CENTER]: {x: .5,y: .5
                    },[h.TOP_LEFT]: {x: 0,y: 0
                    },[h.TOP_RIGHT]: {x: 1,y: 0
                    },[h.TOP]: {x: .5,y: 0
                    },[h.BOTTOM_LEFT]: {x: 0,y: 1
                    },[h.BOTTOM_RIGHT]: {x: 1,y: 1
                    },[h.BOTTOM]: {x: .5,y: 1
                    },[h.RIGHT]: {x: 1,y: .5
                    },[h.LEFT]: {x: 0,y: .5
                    }
                },d = {center: "c",top: "t",top_left: "tl",top_right: "tr",bottom: "b",bottom_left: "bl",bottom_right: "br",left: "l",right: "r"
                },u = {BG: "bg",IMG: "img",SVG: "svg"
                },m = {AUTO: "auto",CLASSIC: "classic",SUPER: "super"
                },g = {radius: "0.66",amount: "1.00",threshold: "0.01"
                },p = {uri: "",css: {img: {},container: {}
                    },attr: {img: {},container: {}
                    },transformed: !1
                },f = [1.5, 2, 4],_ = {HIGH: {size: 196e4,quality: 90,maxUpscale: 1
                    },MEDIUM: {size: 36e4,quality: 85,maxUpscale: 1
                    },LOW: {size: 16e4,quality: 80,maxUpscale: 1.2
                    },TINY: {size: 0,quality: 80,maxUpscale: 1.4
                    }
                },b = "HIGH",T = "MEDIUM",I = "contrast",E = "brightness",w = "saturation",L = "blur",v = {JPG: "jpg",JPEG: "jpeg",JPE: "jpe",PNG: "png",WEBP: "webp",WIX_ICO_MP: "wix_ico_mp",WIX_MP: "wix_mp",GIF: "gif",SVG: "svg",AVIF: "avif",UNRECOGNIZED: "unrecognized"
                };
            function A(e, ...t) {
                return function(...i) {
                    let r = i[i.length - 1] || {},n = [e[0]];
                    return t.forEach(function(t, a) {
                        let o = Number.isInteger(t) ? i[t] : r[t];
                        n.push(o, e[a + 1])
                    }), n.join("")
                }
            }
            function y(e) {
                return e[e.length - 1]
            }
            v.JPG,v.JPEG,v.JPE,v.PNG,v.GIF,v.WEBP;
            let O = [v.PNG, v.JPEG, v.JPG, v.JPE, v.WIX_ICO_MP, v.WIX_MP, v.WEBP, v.AVIF],C = [v.JPEG, v.JPG, v.JPE];
            function R(e, t, i) {
                var n;
                return i && t && !(!(n = t.id) || !n.trim() || "none" === n.toLowerCase()) && 
Object.values(r).includes(e)
            }
            function M(e, t, i, r) {
                var n;
                if (n = e, /(^https?)|(^data)|(^\/\/)/.test(n) || (S(e) || N(e)) && t && !i)
                    return !1;
                let a = O.includes(k(e)),o = !!G(e) && !!(i || r);
                return a || o
            }
            function x(e) {
                return k(e) === v.PNG
            }
            function S(e) {
                return k(e) === v.WEBP
            }
            function G(e) {
                return k(e) === v.GIF
            }
            function N(e) {
                return k(e) === v.AVIF
            }
            let P = ["/", "\\", "?", "<", ">", "|", "\u201C", ":", '"'].map(encodeURIComponent),F = ["\\.", "\\*"];
            function k(e) {
                return (/[.]([^ .]+)$/.exec(e) && /[.]([^ .]+)$/.exec(e)[1] || "").toLowerCase()
            }
            function $(e, t, i, r, a) {
                let o;
                return o = a === n ? Math.max(i / e, r / t) : "fit" === a ? Math.min(i / e, r / t) : 1
            }
            function B(e, t, i, r, a, o) {
                let {scaleFactor: s, width: l, height: h} = function(e, t, i, r, n) {
                    let a,o = i,s = r;
                    if (a = $(e, t, i, r, n), "fit" === n && (o = e * a, s = t * a), o && s && o * s 
> 25e6) {
                        let i = Math.sqrt(25e6 / (o * s));
                        o *= i,s *= i,a = $(e, t, o, s, n)
                    }
                    return {scaleFactor: a,width: o,height: s
                    }
                }(e = e || r.width, t = t || r.height, r.width * a, r.height * a, i);
                return function(e, t, i, r, a, o, s) {
                    let {optimizedScaleFactor: l, upscaleMethodValue: h, forceUSM: c} = 
function(e, t, i, r) {
                            if ("auto" === r)
                                return {optimizedScaleFactor: _[z(e, t)].maxUpscale,upscaleMethodValue: 1,forceUSM: !1
                                };
                            if ("super" === r)
                                return {optimizedScaleFactor: y(f),upscaleMethodValue: 2,forceUSM: !(f.includes(i) || i > y(f))
                                };
                            return {optimizedScaleFactor: _[z(e, t)].maxUpscale,upscaleMethodValue: 1,forceUSM: !1
                            }
                        }(e, t, o, a),d = i,u = r;
                    if (o <= l)
                        return {width: d,height: u,scaleFactor: o,upscaleMethodValue: h,forceUSM: c,cssUpscaleNeeded: !1
                        };
                    switch (s) {case n:d = l / o * i,u = l / o * r;
                        break;
                    case "fit":d = e * l,u = t * l
                    }
                    return {width: d,height: u,scaleFactor: l,upscaleMethodValue: h,forceUSM: c,cssUpscaleNeeded: !0
                    }
                }(e, t, l, h, o, s, i)
            }
            function H(e) {
                return e.alignment && d[e.alignment] || d[h.CENTER]
            }
            function U(e) {
                let t;
                return !e || "number" != typeof e.x || isNaN(e.x) || "number" != typeof e.y 
|| isNaN(e.y) || (t = {x: W(Math.max(0, Math.min(100, e.x)) / 100, 2),y: W(Math.max(0, Math.min(100, e.y)) / 100, 2)
                }), t
            }
            function z(e, t) {
                let i = e * t;
                return i > _[b].size ? b : i > _[T].size ? T : i > _.LOW.size ? "LOW" : "TINY"
            }
            function W(e, t) {
                let i = Math.pow(10, t || 0);
                return (e * i / i).toFixed(t)
            }
            let Y = {isMobile: !1
                },D = function(e, t) {Y[e] = t
                };
            function q() {
                if ("undefined" != typeof window && "undefined" != typeof navigator) {
                    let e = window.matchMedia && window.matchMedia("(max-width: 767px)").matches,t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent);
                    D("isMobile", e && t)
                }
            }
            function j(e, t) {
                let i = {css: {container: {}
                        }
                    },{css: n} = i,{fittingType: a} = e;
                switch (a) {case r.ORIGINAL_SIZE:case r.LEGACY_ORIGINAL_SIZE:case r.LEGACY_STRIP_ORIGINAL_SIZE:n.container.backgroundSize = "auto",n.container.backgroundRepeat = "no-repeat";
                    break;
                case r.SCALE_TO_FIT:case r.LEGACY_STRIP_SCALE_TO_FIT:n.container.backgroundSize = "contain",n.container.backgroundRepeat = "no-repeat";
                    break;
                case r.STRETCH:n.container.backgroundSize = "100% 100%",n.container.backgroundRepeat = "no-repeat";
                    break;
                case r.SCALE_TO_FILL:case r.LEGACY_STRIP_SCALE_TO_FILL:n.container.backgroundSize = "cover",n.container.backgroundRepeat = "no-repeat";
                    break;
                case r.TILE_HORIZONTAL:case r.LEGACY_STRIP_TILE_HORIZONTAL:n.container.backgroundSize = "auto",n.container.backgroundRepeat = "repeat-x";
                    break;
                case r.TILE_VERTICAL:case r.LEGACY_STRIP_TILE_VERTICAL:n.container.backgroundSize = "auto",n.container.backgroundRepeat = "repeat-y";
                    break;
                case r.TILE:case r.LEGACY_STRIP_TILE:n.container.backgroundSize = "auto",n.container.backgroundRepeat = "repeat";
                    break;
                case r.LEGACY_STRIP_FIT_AND_TILE:n.container.backgroundSize = "contain",n.container.backgroundRepeat = "repeat";
                    break;
                case r.FIT_AND_TILE:case r.LEGACY_BG_FIT_AND_TILE:n.container.backgroundSize = "auto",n.container.backgroundRepeat = "repeat";
                    break;
                case r.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:n.container.backgroundSize = "auto",n.container.backgroundRepeat = "repeat-x";
                    break;
                case r.LEGACY_BG_FIT_AND_TILE_VERTICAL:n.container.backgroundSize = "auto",n.container.backgroundRepeat = "repeat-y";
                    break;
                case r.LEGACY_BG_NORMAL:n.container.backgroundSize = "auto",n.container.backgroundRepeat = "no-repeat"
                }
                switch (t.alignment) {case h.CENTER:n.container.backgroundPosition = "center center";
                    break;
                case h.LEFT:n.container.backgroundPosition = "left center";
                    break;
                case h.RIGHT:n.container.backgroundPosition = "right center";
                    break;
                case h.TOP:n.container.backgroundPosition = "center top";
                    break;
                case h.BOTTOM:n.container.backgroundPosition = "center bottom";
                    break;
                case h.TOP_RIGHT:n.container.backgroundPosition = "right top";
                    break;
                case h.TOP_LEFT:n.container.backgroundPosition = "left top";
                    break;
                case h.BOTTOM_RIGHT:n.container.backgroundPosition = "right bottom";
                    break;
                case h.BOTTOM_LEFT:n.container.backgroundPosition = "left bottom"
                }
                return i
            }
            let V = {[h.CENTER]: "center",[h.TOP]: "top",[h.TOP_LEFT]: "top left",[h.TOP_RIGHT]: "top right",[h.BOTTOM]: "bottom",[h.BOTTOM_LEFT]: "bottom left",[h.BOTTOM_RIGHT]: "bottom right",[h.LEFT]: "left",[h.RIGHT]: "right"
                },Z = {position: "absolute",top: "auto",right: "auto",bottom: "auto",left: "auto"
                };
            function J(e, t) {
                let i = {css: {container: {},img: {}
                        }
                    },{css: n} = i,{fittingType: a} = e,o = t.alignment;
                switch (n.container.position = "relative", a) {case r.ORIGINAL_SIZE:case r.LEGACY_ORIGINAL_SIZE:e.parts && e.parts.length ? (n.img.width = e.parts[0].width,n.img.height = e.parts[0].height) : (n.img.width = e.src.width, n.img.height =e.src.height);
                    break;
                case r.SCALE_TO_FIT:case r.LEGACY_FIT_WIDTH:case r.LEGACY_FIT_HEIGHT:case r.LEGACY_FULL:n.img.width = t.width,n.img.height = t.height,n.img.objectFit = "contain",n.img.objectPosition = V[o] || "unset";
                    break;
                case r.LEGACY_BG_NORMAL:n.img.width = "100%",n.img.height = "100%",n.img.objectFit = "none",n.img.objectPosition = V[o] || "unset";
                    break;
                case r.STRETCH:n.img.width = t.width,n.img.height = t.height,n.img.objectFit = "fill";
                    break;
                case r.SCALE_TO_FILL:n.img.width = t.width,n.img.height = t.height,n.img.objectFit = "cover"
                }
                if ("number" == typeof n.img.width && "number" == typeof n.img.height 
&& (n.img.width !== t.width || n.img.height !== t.height)) {
                    let e = Math.round((t.height - n.img.height) / 2),i = Math.round((t.width - n.img.width) / 2);
                    Object.assign(n.img, Z, {[h.TOP_LEFT]: {top: 0,left: 0
                        },[h.TOP_RIGHT]: {top: 0,right: 0
                        },[h.TOP]: {top: 0,left: i
                        },[h.BOTTOM_LEFT]: {bottom: 0,left: 0
                        },[h.BOTTOM_RIGHT]: {bottom: 0,right: 0
                        },[h.BOTTOM]: {bottom: 0,left: i
                        },[h.RIGHT]: {top: e,right: 0
                        },[h.LEFT]: {top: e,left: 0
                        },[h.CENTER]: {width: t.width,height: t.height,objectFit: "none"
                        }
                    }[o])
                }
                return i
            }
            function X(e, t) {
                let i,a = {css: {container: {}
                        },attr: {container: {},img: {}
                        }
                    },{css: o, attr: s} = a,{fittingType: l} = e,c = t.alignment,{width: d, height: u} = e.src;
                switch (o.container.position = "relative", l) {case r.ORIGINAL_SIZE:case r.LEGACY_ORIGINAL_SIZE:case r.TILE:e.parts && e.parts.length ? (s.img.width = e.parts[0].width,s.img.height = e.parts[0].height) : (s.img.width = d, s.img.height = u),s.img.preserveAspectRatio = "xMidYMid slice";
                    break;
                case r.SCALE_TO_FIT:case r.LEGACY_FIT_WIDTH:case r.LEGACY_FIT_HEIGHT:case r.LEGACY_FULL:s.img.width = "100%",s.img.height = "100%",s.img.transform = "",s.img.preserveAspectRatio = "";
                    break;
                case r.STRETCH:s.img.width = t.width,s.img.height = t.height,s.img.x = 0,s.img.y = 0,s.img.transform = "",s.img.preserveAspectRatio = "none";
                    break;
                case r.SCALE_TO_FILL:
                    if (M(e.src.id))
                        s.img.width = t.width,s.img.height = t.height;
                    else {
                        var m;
                        let e;
                        m = t.width,e = $(d, u, m, t.height, n),i = {width: Math.round(d * e),height: Math.round(u * e)
                        },s.img.width = i.width,s.img.height = i.height
                    }
                    s.img.x = 0,s.img.y = 0,s.img.transform = "",s.img.preserveAspectRatio = "xMidYMid slice"
                }
                if ("number" == typeof s.img.width && "number" == typeof s.img.height 
&& (s.img.width !== t.width || s.img.height !== t.height)) {
                    let e,i,n = 0,a = 0;
                    l === r.TILE ? (e = t.width % s.img.width, i = t.height % s.img.height) : (e = t.width - s.img.width, i = t.height - s.img.height);
                    let o = Math.round(e / 2),d = Math.round(i / 2);
                    switch (c) {case h.TOP_LEFT:n = 0,a = 0;
                        break;
                    case h.TOP:n = o,a = 0;
                        break;
                    case h.TOP_RIGHT:n = e,a = 0;
                        break;
                    case h.LEFT:n = 0,a = d;
                        break;
                    case h.CENTER:n = o,a = d;
                        break;
                    case h.RIGHT:n = e,a = d;
                        break;
                    case h.BOTTOM_LEFT:n = 0,a = i;
                        break;
                    case h.BOTTOM:n = o,a = i;
                        break;
                    case h.BOTTOM_RIGHT:n = e,a = i
                    }
                    s.img.x = n,s.img.y = a
                }
                return s.container.width = t.width, s.container.height = t.height, s.container.viewBox = ["0 0", t.width, t.height].join(" "), a
            }
            function K(e, t) {
                let i = B(e.src.width, e.src.height, "fit", t, e.devicePixelRatio, e.upscaleMethod);
                return {transformType: e.src.width && e.src.height ? n : "fit",width: Math.round(i.width),height: Math.round(i.height),alignment: d.center,upscale: i.scaleFactor > 1,forceUSM: i.forceUSM,scaleFactor: i.scaleFactor,cssUpscaleNeeded: i.cssUpscaleNeeded,upscaleMethodValue: i.upscaleMethodValue
                }
            }
            function Q(e) {
                return {transformType: o,x: Math.round(e.x),y: Math.round(e.y),width: Math.round(e.width),height: Math.round(e.height),upscale: !1,forceUSM: !1,scaleFactor: 1,cssUpscaleNeeded: !1
                }
            }
            function ee(e, t, i) {
                return "number" == typeof e && !isNaN(e) && 0 !== e && e >= t && e <= i
            }
            function et(e, t, i, o) {
                var d,u,p,f,b,T,A;
                let R,Y = o?.isSEOBot ?? !1,D = function(e) {
                        if (C.includes(k(e)))
                            return v.JPG;
                        if (x(e))
                            return v.PNG;
                        if (S(e))
                            return v.WEBP;
                        if (G(e))
                            return v.GIF;
                        if (N(e))
                            return v.AVIF;
                        return v.UNRECOGNIZED
                    }(t.id),q = function(e, t) {
                        let i = /\.([^ .]*)$/,r = RegExp(`(${P.concat(F).join("|")})`, "g");
                        if (t && t.length) {
                            let e = t,n = t.match(i);
                            return n && O.includes(n[1]) && (e = t.replace(i, "")), encodeURIComponent(e).replace(r, "_")
                        }
                        let n = e.match(/\/(. *?)$/);
                        return (n ? n[1] : e).replace(i, "")
                    }(t.id, t.name),j = Y ? 1 : Math.min(i.pixelAspectRatio || 1, 2),V = k(t.id),Z = M(t.id, o?.hasAnimation, o?.allowAnimatedTransform,o?.allowFullGIFTransformation),J = {fileName: q,fileExtension: V,fileType: D,fittingType: e,preferredExtension: V,src: {id: t.id,width: t.width,height: t.height,isCropped: !1,isAnimated: (d = t.id, u = o?.hasAnimation, R = S(d) || N(d), k(d)
=== v.GIF || R && u)
                        },focalPoint: {x: t.focalPoint && t.focalPoint.x,y: t.focalPoint && t.focalPoint.y
                        },parts: [],devicePixelRatio: j,quality: 0,upscaleMethod: o && o.upscaleMethod &&
m[o.upscaleMethod.toUpperCase()] || m.AUTO,progressive: !0,watermark: "",unsharpMask: {},filters: {},transformed: Z,allowFullGIFTransformation: o?.allowFullGIFTransformation,isPlaceholderFlow: o?.isPlaceholderFlow
                    };
                if (Z) {
                    let e,d,u,m,O,C;
                    !function(e, t, i) {
                        var o,d,u,m,g,p,f,_,b,T,I;
                        let E,w,L,v,A,y;
                        if (t.crop) {
                            let i,r;
                            o = t.crop,i = Math.max(0, Math.min(t.width, o.x + o.width) - Math.max(0,o.x)),r = Math.max(0, Math.min(t.height, o.y + o.height) - Math.max(0,o.y)),(E = i && r && (t.width !== i || t.height !== r) ? {x: Math.max(0, o.x),y: Math.max(0, o.y),width: i,height: r
                            } : null) && (e.src.width = E.width, e.src.height = E.height, e.src.isCropped = !0, e.parts.push(Q(E)))
                        }
                        switch (e.fittingType) {case r.SCALE_TO_FIT:case r.LEGACY_FIT_WIDTH:case r.LEGACY_FIT_HEIGHT:case r.LEGACY_FULL:case r.FIT_AND_TILE:case r.LEGACY_BG_FIT_AND_TILE:case r.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case r.LEGACY_BG_FIT_AND_TILE_VERTICAL:case r.LEGACY_BG_NORMAL:e.parts.push(K(e, i));
                            break;
                        case r.SCALE_TO_FILL:e.parts.push((g = e, p = i, w = B(g.src.width, g.src.height, n, p,g.devicePixelRatio, g.upscaleMethod), {transformType: (L = U(g.focalPoint)) ? a : n,width: Math.round(w.width),height: Math.round(w.height),alignment: H(p),focalPointX: L && L.x,focalPointY: L && L.y,upscale: w.scaleFactor > 1,forceUSM: w.forceUSM,scaleFactor: w.scaleFactor,cssUpscaleNeeded: w.cssUpscaleNeeded,upscaleMethodValue: w.upscaleMethodValue
                            }));
                            break;
                        case r.STRETCH:e.parts.push((f = e, _ = i, v = $(f.src.width, f.src.height, _.width,_.height, n), (A = {..._
                            }).width = f.src.width * v, A.height = f.src.height * v, K(f, A)));
                            break;
                        case r.TILE_HORIZONTAL:case r.TILE_VERTICAL:case r.TILE:case r.LEGACY_ORIGINAL_SIZE:case r.ORIGINAL_SIZE:d = e.src,u = e.focalPoint,m = i.alignment,y = U(u) || function(e=h.CENTER) {
                                return c[e]
                            }(m),E = {x: Math.max(0, Math.min(d.width - i.width, y.x * d.width -i.width / 2)),y: Math.max(0, Math.min(d.height - i.height, y.y * d.height -i.height / 2)),width: Math.min(d.width, i.width),height: Math.min(d.height, i.height)
                            },e.src.isCropped ? (Object.assign(e.parts[0], E), e.src.width =E.width, e.src.height = E.height) : e.parts.push(Q(E));
                            break;
                        case r.LEGACY_STRIP_TILE_HORIZONTAL:case r.LEGACY_STRIP_TILE_VERTICAL:case r.LEGACY_STRIP_TILE:case r.LEGACY_STRIP_ORIGINAL_SIZE:e.parts.push({transformType: s,width: Math.round((b = i).width),height: Math.round(b.height),alignment: H(b),upscale: !1,forceUSM: !1,scaleFactor: 1,cssUpscaleNeeded: !1
                            });
                            break;
                        case r.LEGACY_STRIP_SCALE_TO_FIT:case r.LEGACY_STRIP_FIT_AND_TILE:e.parts.push({transformType: "fit",width: Math.round((T = i).width),height: Math.round(T.height),upscale: !1,forceUSM: !0,scaleFactor: 1,cssUpscaleNeeded: !1
                            });
                            break;
                        case r.LEGACY_STRIP_SCALE_TO_FILL:e.parts.push({transformType: l,width: Math.round((I = i).width),height: Math.round(I.height),alignment: H(I),upscale: !1,forceUSM: !0,scaleFactor: 1,cssUpscaleNeeded: !1
                            })
                        }
                    }(J, t, i),J.quality = function(e, t) {
                        let i = e.fileType === v.PNG,r = e.fileType === v.JPG,n = e.fileType === v.WEBP,a = e.fileType === v.AVIF;
                        if (r || i || n || a) {
                            let r = y(e.parts),n = _[z(r.width, r.height)].quality,a = t.quality && t.quality >= 5 && t.quality <= 90 ? t.quality : n;
                            return i ? a + 5 : a
                        }
                        return 0
                    }(J, p = (p = o) || {}),J.progressive = !1 !== p.progressive,J.watermark = p.watermark,J.autoEncode = p.autoEncode ?? !0,J.encoding = p?.encoding,f = J,e = "number" == typeof (T = (T = (b = p).unsharpMask) || {}).radius
&& !isNaN(T.radius) && T.radius >= .1 && T.radius <= 500,d = "number" == typeof T.amount && !isNaN(T.amount) && T.amount
>= 0 && T.amount <= 10,u = "number" == typeof T.threshold && !isNaN(T.threshold) &&
T.threshold >= 0 && T.threshold <= 255,J.unsharpMask = e && d && u ? {radius: W(b.unsharpMask?.radius, 2),amount: W(b.unsharpMask?.amount, 2),threshold: W(b.unsharpMask?.threshold, 2)
                    } : "number" == typeof (A = (A = b.unsharpMask) || {}).radius && !
isNaN(A.radius) && 0 === A.radius && "number" == typeof A.amount && !
isNaN(A.amount) && 0 === A.amount && "number" == typeof A.threshold && !
isNaN(A.threshold) && 0 === A.threshold || (m = y(f.parts)).scaleFactor >= 1 && !
m.forceUSM && "fit" !== m.transformType ? void 0 : g,O = p.filters || {},C = {},ee(O[I], -100, 100) && (C[I] = O[I]),ee(O[E], -100, 100) && (C[E] = O[E]),ee(O[w], -100, 100) && (C[w] = O[w]),ee(O.hue, -180, 180) && (C.hue = O.hue),ee(O[L], 0, 100) && (C[L] = O[L]),J.filters = C
                }
                return J
            }
            function ei(e, t, i) {
                let n = {...i
                    },a = Y.isMobile;
                switch (e) {case r.LEGACY_BG_FIT_AND_TILE:case r.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case r.LEGACY_BG_FIT_AND_TILE_VERTICAL:case r.LEGACY_BG_NORMAL:n.width = Math.min(a ? 1e3 : 1920, t.width),n.height = Math.min(a ? 1e3 : 1920, Math.round(n.width / (t.width /t.height))),n.pixelAspectRatio = 1
                }
                return n
            }
            let er = A`fit/w_${"width"},h_${"height"}`,en = A`fill/w_${"width"},h_${"height"},al_${"alignment"}`,ea = A`fill/w_${"width"},h_${"height"},fp_${"focalPointX"}_$
{"focalPointY"}`,eo = A`crop/x_${"x"},y_${"y"},w_${"width"},h_${"height"}`,es = A`crop/w_${"width"},h_${"height"},al_${"alignment"}`,el = A`fill/w_${"width"},h_${"height"},al_${"alignment"}`,eh = A`,lg_${"upscaleMethodValue"}`,ec = A`,q_${"quality"}`,ed = A`,quality_auto`,eu = A`,usm_${"radius"}_${"amount"}_${"threshold"}`,em = A`,bl`,eg = A`,wm_${"watermark"}`,ep = {[I]: A`,con_${"contrast"}`,[E]: A`,br_${"brightness"}`,[w]: A`,sat_${"saturation"}`,hue: A`,hue_${"hue"}`,[L]: A`,blur_${"blur"}`
                },ef = A`,enc_auto`,e_ = A`,enc_avif`,eb = A`,enc_pavif`,eT = A`,pstr`,eI = A`,anm_all`;
            function eE(e, t, i, r={}, h) {
                if (M(t.id, r?.hasAnimation, r?.allowAnimatedTransform, r?.allowFullGIFTransformation)) {
                    if (S(t.id) || N(t.id)) {
                        let {alignment: n, ...a} = i;
                        t.focalPoint = {x: void 0,y: void 0
                        },delete t?.crop,h = et(e, t, a, r)
                    } elseh = h || et(e, t, i, r);
                    return function(e) {
                        let t = [];
                        e.parts.forEach(e => {switch (e.transformType) {case o:t.push(eo(e));
                                break;
                            case s:t.push(es(e));
                                break;
                            case l:
                                let i = el(e);
                                e.upscale && (i += eh(e)),t.push(i);
                                break;
                            case "fit":
                                let r = er(e);
                                e.upscale && (r += eh(e)),t.push(r);
                                break;
                            case n:
                                let h = en(e);
                                e.upscale && (h += eh(e)),t.push(h);
                                break;
                            case a:
                                let c = ea(e);
                                e.upscale && (c += eh(e)),t.push(c)
                            }
                        });
                        let i = t.join("/");
                        if (e.quality && (i += ec(e)), e.unsharpMask && (i += eu(e.unsharpMask)), e.progressive || (i += em(e)), e.watermark && (i += eg(e)),e.filters && (i += Object.keys(e.filters).map(t => ep[t](e.filters)).join("")),e.fileType !== v.GIF && ("AVIF" === e.encoding ? (i += e_(e), i += ed(e)) : "PAVIF"=== e.encoding ? (i += eb(e), i += ed(e)) : e.autoEncode && (i += ef(e))),e.src?.isAnimated && e.transformed) {
                            let t = G(e.src.id),r = !0 === e.isPlaceholderFlow,n = !0 === e.allowFullGIFTransformation;
                            r ? i += eT(e) : t && n && (i += eI(e))
                        }
                        return `${e.src.id}/v1/${i}/${e.fileName}.${e.preferredExtension}`
                    }(h)
                }
                return t.id
            }
            let ew = {[h.CENTER]: "50% 50%",[h.TOP_LEFT]: "0% 0%",[h.TOP_RIGHT]: "100% 0%",[h.TOP]: "50% 0%",[h.BOTTOM_LEFT]: "0% 100%",[h.BOTTOM_RIGHT]: "100% 100%",[h.BOTTOM]: "50% 100%",[h.RIGHT]: "100% 50%",[h.LEFT]: "0% 50%"
                },eL = Object.entries(ew).reduce((e, [t, i]) => (e[i] = t, e), {}),ev = [r.TILE, r.TILE_HORIZONTAL, r.TILE_VERTICAL,r.LEGACY_BG_FIT_AND_TILE, r.LEGACY_BG_FIT_AND_TILE_HORIZONTAL,r.LEGACY_BG_FIT_AND_TILE_VERTICAL],eA = [r.LEGACY_ORIGINAL_SIZE, r.ORIGINAL_SIZE,r.LEGACY_BG_NORMAL];
            function ey(e, t, {width: i, height: n}) {
                return e === r.TILE && t.width > i && t.height > n
            }
            let eO = {width: "100%",height: "100%"
            };
            function eC(e, t, i, n={}) {
                var a;
                let o,{autoEncode: s=!0, isSEOBot: l, shouldLoadHQImage: h, hasAnimation:c, allowAnimatedTransform: d, encoding: u} = n;
                if (!R(e, t, i))
                    return p;
                let m = d ?? !0,g = M(t.id, c, m);
                if (!g || h)
                    return eR(e, t, i, {...n,autoEncode: s,useSrcset: g
                    });
                let f = {...i,...function(e, {width: t, height: i}) {
                            if (!t || !i) {
                                let r = t || Math.min(980, e.width),n = r / e.width;
                                return {width: r,height: i || e.height * n
                                }
                            }
                            return {width: t,height: i
                            }
                        }(t, i)
                    },{alignment: _, htmlTag: b} = f,T = ey(e, t, f),I = function(e, t, {width: i, height: r}, n=!1) {
                        var a,o;
                        if (n)
                            return {width: i,height: r
                            };
                        let s = !eA.includes(e),l = ey(e, t, {width: i,height: r
                            }),h = !l && ev.includes(e),c = h ? t.width : i,d = h ? t.height : r,u = s ? (a = c, o = x(t.id), a > 900 ? o ? .05 : .15 : a > 500 ? o ? .1 :.18 : a > 200 ? .25 : 1) : 1;
                        return {width: l ? 1920 : c * u,height: d * u
                        }
                    }(e, t, f, l),E = (a = f.width, l ? 0 : ev.includes(e) ? 1 : a > 200 ? 2 : 3),w = (o = ev.includes(e) && !T, e === r.SCALE_TO_FILL || o ?r.SCALE_TO_FIT : e),L = function(e, t, i, n="center") {
                        let a = {img: {},container: {}
                        };
                        if (e === r.SCALE_TO_FILL) {
                            var o;
                            let e = t.focalPoint && (o = t.focalPoint, eL[`${o.x}% ${o.y}%`] || 
"");
                            t.focalPoint && !e ? a.img = {objectPosition: function(e, t, i) {
                                    let {width: r, height: n} = e,{width: a, height: o} = t,{x: s, y: l} = i;
                                    if (!a || !o)
                                        return `${s}% ${l}%`;
                                    let h = Math.max(a / r, o / n),c = r * h,d = n * h,u = Math.max(0, Math.min(c - a, s / 100 * c - a / 2)),m = Math.max(0, Math.min(d - o, l / 100 * d - o / 2)),g = u && Math.floor(u / (c - a) * 100),p = m && Math.floor(m / (d - o) * 100);
                                    return `${g}% ${p}%`
                                }(t, i, t.focalPoint)
                            } : a.img = {objectPosition: ew[e || n]
                            }
                        } else
                            [r.LEGACY_ORIGINAL_SIZE, r.ORIGINAL_SIZE].includes(e) ? a.img 
= {objectFit: "none",top: "auto",left: "auto",right: "auto",bottom: "auto"
                            } : ev.includes(e) && (a.container = {backgroundSize: `${t.width}px ${t.height}px`
                            });
                        return a
                    }(e, t, i, _),{uri: v} = eR(w, t, {...I,alignment: _,htmlTag: b
                    }, {autoEncode: s,filters: E ? {blur: E
                        } : {},hasAnimation: c,allowAnimatedTransform: m,encoding: u,isPlaceholderFlow: !0
                    }),{attr: A={}, css: y} = eR(e, t, {...f,alignment: _,htmlTag: b
                    }, {});
                return y.img = y.img || {}, y.container = y.container || {}, Object.assign(y.img, L.img, eO), Object.assign(y.container, L.container), {uri: v,css: y,attr: A,transformed: !0
                }
            }
            function eR(e, t, i, r) {
                let n = {};
                if (R(e, t, i)) {
                    var a;
                    let o,s = ei(e, t, i),l = et(e, t, s, r);
                    n.uri = eE(e, t, s, r, l),r?.useSrcset && (n.srcset = (a = n, o = s.pixelAspectRatio || 1, {dpr: [`${1 === o ? a.uri : eE(e, t, {...s,pixelAspectRatio: 1}, r)} 1x`,`${2 === o ? a.uri : eE(e, t, {...s,pixelAspectRatio: 2}, r)} 2x`]
                    })),Object.assign(n, (s.htmlTag === u.BG ? j : s.htmlTag === u.SVG ? X : J)
(l, s), {transformed: l.transformed
                    })
                } else
                    n = p;
                return n
            }
            function eM(e, t, i, r) {
                if (R(e, t, i)) {
                    let n = ei(e, t, i),a = et(e, t, n, r);
                    return {uri: eE(e, t, n, r || {}, a)
                    }
                }
                return {uri: ""
                }
            }
            let ex = "https://static.wixstatic.com/media/",eS = /^media\//i,eG = "undefined" != typeof window ? window.devicePixelRatio : 1,eN = (e, t) => {
                    let i = t && t.baseHostURL;
                    return i ? `${i}${e}` : eS.test(e) ? `https://static.wixstatic.com/${e}` : `${ex}${e}`
                };
            q();
            let eP = "center",eF = [1920, 1536, 1366, 1280, 980],ek = (e, t, i) => {
                    let {displayMode: r, uri: n, width: a, height: o, name: s, crop: l, focalPoint: h, alignType: c, quality: d, upscaleMethod: u, hasAnimation: m,allowAnimatedTransform: g, encoding: p, siteMargin: f, widthProportion: _,allowFullGIFTransformation: b, baseHostURL: T} = e;
                    if (_) {
                        let e,g,I = (e = "original_size" === r, g = a / o, eF.map((r, I) => {
                                let E = 980 === r,w = e => E ? t : _ / 100 * (e - 2 * (f || 0)),L = w(eF[I + 1]),v = w(r),A = L / i,y = !(e || E) && ((e, t, i, r, n, a, o, s=eP) => {
                                        if (e > t) {
                                            let e = Math.round(r / (a / n)),t = Math.round(i / 2 - e / 2);
                                            return s.includes("top") ? t = 0 : s.includes("bottom") 
&& (t = i - e), {width: r,height: e,x: 0,y: t
                                            }
                                        }
                                        {
                                            let e = Math.round(i / (n / o)),t = Math.round(r / 2 - e / 2);
                                            return s.includes("left") ? t = 0 : s.includes("right") && 
(t = r - e), {width: e,height: i,x: t,y: 0
                                            }
                                        }
                                    })(A, g, o, a, i, L, v, c),{srcset: O, fallbackSrc: C, css: R} = ek({displayMode: e ? "original_size" : E ? "fill" : "fit",uri: n,width: a,height: o,crop: l || y,name: s,focalPoint: h,alignType: c,quality: d,upscaleMethod: u,hasAnimation: m,encoding: p,allowFullGIFTransformation: b,baseHostURL: T
                                    }, v, i);
                                return e && R && (R.img.objectFit = "cover"), {srcset: O || "",sizes: E ? `${_}vw` : `${v}px`,media: `(max-width: ${r}px)`,fallbackSrc: C,imgStyle: R?.img
                                }
                            })).filter(Boolean).reverse();
                        return {fallbackSrc: I[0].fallbackSrc,sources: I,css: I[0].imgStyle
                        }
                    }
                    {
                        let {srcset: e, css: f, uri: _} = eR(r, {id: n,width: a,height: o,name: s,crop: l,focalPoint: h
                            }, {width: t,height: i,alignment: c
                            }, {focalPoint: h,name: s,quality: d?.quality,upscaleMethod: u,hasAnimation: m,allowAnimatedTransform: g,useSrcset: !0,encoding: p,allowFullGIFTransformation: b
                            }),I = T || eB,E = e?.dpr?.map(e => /^[a-z]+:/.test(e) ? e : `${I}${e}`);
                        return {fallbackSrc: `${I}${_}`,srcset: E?.join(", ") || "",css: f
                        }
                    }
                };
            q();
            let e$ = {getScaleToFitImageURL: function(e, t, i, n, a, o) {
                        return eN(eM(r.SCALE_TO_FIT, {id: e,width: t,height: i,name: o && o.name
                        }, {width: n,height: a,htmlTag: u.IMG,alignment: h.CENTER,pixelAspectRatio: o?.devicePixelRatio ?? eG
                        }, o).uri, o)
                    },getScaleToFillImageURL: function(e, t, i, n, a, o) {
                        return eN(eM(r.SCALE_TO_FILL, {id: e,width: t,height: i,name: o && o.name,focalPoint: {x: o && o.focalPoint && o.focalPoint.x,y: o && o.focalPoint && o.focalPoint.y
                            }
                        }, {width: n,height: a,htmlTag: u.IMG,alignment: h.CENTER,pixelAspectRatio: o?.devicePixelRatio ?? eG
                        }, o).uri, o)
                    },getCropImageURL: function(e, t, i, n, a, o, s, l, c, d) {
                        return eN(eM(r.SCALE_TO_FILL, {id: e,width: t,height: i,name: d && d.name,crop: {x: n,y: a,width: o,height: s
                            }
                        }, {width: l,height: c,htmlTag: u.IMG,alignment: h.CENTER,pixelAspectRatio: d?.devicePixelRatio ?? eG
                        }, d).uri, d)
                    }
                },eB = ex
        },55901(e, t, i) {(0, i(16858).Rr)()
        },19787(e, t, i) {
            var r = i(16858),n = i(99090);
            ((e=window) => {
                let {mediaServices: t, environmentConsts: i, requestUrl: a, staticVideoUrl: o} = e.customElementNamespace;
                (0, r.EH)(e, t, {...i,prefersReducedMotion: (0, n.O)(window, a),staticVideoUrl: o
                }),(0, r.jh)(e),(0, r.p7)(e, t, i)
            })(),window.resolveExternalsRegistryModule("imageClientApi")
        },16858(e, t, i) {i.d(t, {_o: () => s,NL: () => y,yO: () => w,vk: () => c,EH: () => k,KU: () => l,Rr: () => x,jh: () => G,p7: () => A,Aq: () => h
            });
            var r = i(17709),n = i.n(r);
            let a = (e, t, i) => {
                let r = 1,n = 0;
                for (let a = 0; a < e.length; a++) {
                    let o = e[a];
                    if (o > t || (n += o) > t && (r++, n = o, r > i))
                        return !1
                }
                return !0
            };
            function o(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {value: i,enumerable: !0,configurable: !0,writable: !0
                }) : e[t] = i, e
            }
            function s() {
                class e extends HTMLElement {setContainerHeight(e)
                    {this.style.setProperty("--flex-columns-height", `${e}px`)
                    }
                    removeContainerHeight()
                    {this.style.removeProperty("--flex-columns-height")
                    }
                    getColumnCount(e)
                    {
                        return parseInt(e.getPropertyValue("--flex-column-count"), 10)
                    }
                    getRowGap(e)
                    {
                        return parseInt(e.getPropertyValue("row-gap") || "0", 10)
                    }
                    activate()
                    {this.isActive = !0,this.attachObservers(),this.recalcHeight()
                    }
                    deactivate()
                    {this.isActive = !1,this.detachHeightCalcObservers(),this.removeContainerHeight()
                    }
                    calcActive()
                    {
                        return "multi-column-layout" === getComputedStyle(this).getPropertyValue("--container-layout-type")
                    }
                    get itemsHeights()
                    {
                        return Array.from(this.children).map(e => {
                            let t = getComputedStyle(e),i = parseFloat(t.height || "0");
                            return i += parseFloat(t.marginTop || "0"), {height: i += parseFloat(t.marginBottom || "0")
                            }
                        })
                    }
                    setIsActive()
                    {
                        let e = this.calcActive();
                        this.isActive !== e && (e ? this.activate() : this.deactivate())
                    }
                    connectedCallback()
                    {this.cleanUp(),this.createObservers(),this.setIsActive(),window.document.body &&
this.isActiveObserver?.observe(window.document.body)
                    }
                    disconnectedCallback()
                    {this.cleanUp()
                    }
                    constructor(...e)
                    {super(...e),o(this, "containerWidthObserver", void 0),o(this, "mutationObserver", void 0),o(this, "isActiveObserver", void 0),o(this, "childResizeObserver", void 0),o(this, "containerWidth", 0),o(this, "isActive", !1),o(this, "isDuringCalc", !1),o(this, "attachObservers", () => {this.mutationObserver?.observe(this, {childList: !0,subtree: !0
                            }),this.containerWidthObserver?.observe(this),Array.from(this.children).forEach(e => {this.handleItemAdded(e)
                            })
                        }),o(this, "detachHeightCalcObservers", () => {this.mutationObserver?.disconnect(),this.containerWidthObserver?.disconnect(),this.childResizeObserver?.disconnect()
                        }),o(this, "recalcHeight", () => {this.isActive && n().measure(() => {
                                if (!this.isActive || this.isDuringCalc)
                                    return;
                                this.isDuringCalc = !0;
                                let e = getComputedStyle(this),t = ((e, t, i) => {
                                        let r = -1 / 0,n = e.map(e => (e.height + t > r && (r = e.height + t),e.height + t)),o = r,s = r * e.length,l = r;
                                        for (; o < s;) {
                                            let e = Math.floor((o + s) / 2);
                                            a(n, e, i) ? s = e : o = e + 1,l = o
                                        }
                                        return l - t
                                    })(this.itemsHeights, this.getRowGap(e), this.getColumnCount(e));
                                this.isDuringCalc = !1,n().mutate(() => {this.setContainerHeight(t),this.style.setProperty("visibility", null)
                                })
                            })
                        }),o(this, "cleanUp", () => {this.detachHeightCalcObservers(),this.removeContainerHeight(),this.isActiveObserver?.disconnect()
                        }),o(this, "handleItemAdded", e => {e instanceof window.HTMLElement &&
this.childResizeObserver?.observe(e)
                        }),o(this, "handleItemRemoved", e => {e instanceof window.HTMLElement &&
this.childResizeObserver?.unobserve(e)
                        }),o(this, "createObservers", () => {this.containerWidthObserver = new ResizeObserver(e => {
                                let t = e[0];
                                if (t.contentRect.width !== this.containerWidth) {
                                    if (0 === this.containerWidth) {this.containerWidth = t.contentRect.width;
                                        return
                                    }
                                    this.containerWidth = t.contentRect.width,this.recalcHeight()
                                }
                            }),this.mutationObserver = new MutationObserver(e => {e.forEach(e => {
                                    
Array.from(e.removedNodes).forEach(this.handleItemRemoved),Array.from(e.addedNodes).forEach(this.handleItemAdded)
                                }),this.recalcHeight()
                            }),this.childResizeObserver = new ResizeObserver(() => {this.recalcHeight()
                            }),this.isActiveObserver = new ResizeObserver(() => {this.setIsActive()
                            })
                        })
                    }
                }
                return e
            }
            let l = "multi-column-layouter",h = () => {
                    let e = {observedElementToRelayoutTarget: new Map,getLayoutTargets(t) {
                                let i = new Set;
                                return t.forEach(t => 
i.add(e.observedElementToRelayoutTarget.get(t))), i
                            },observe: i => {e.observedElementToRelayoutTarget.set(i, i),t.observe(i)
                            },unobserve: i => {e.observedElementToRelayoutTarget.delete(i),t.unobserve(i)
                            },observeChild: (i, r) => {e.observedElementToRelayoutTarget.set(i, r),t.observe(i)
                            },unobserveChild: i => {e.observedElementToRelayoutTarget.delete(i),t.unobserve(i)
                            }
                        },t = new window.ResizeObserver(t => {e.getLayoutTargets(t.map(e => e.target)).forEach(e =>
e.reLayout())
                        });
                    return e
                },c = (e, t=window) => {
                    let i = !1;
                    return (...r) => {i || (i = !0, t.requestAnimationFrame(() => {i = !1,e(...r)
                        }))
                    }
                };
            function d(...e) {
                let t = e[0];
                for (let i = 1; i < e.length; ++i)
                    t = `${t.replace(/\/$/, "")}/${e[i].replace(/^\//, "")}`;
                return t
            }
            var u = i(26350);
            let m = {columnCount: 1,columns: 1,fontWeight: 1,lineHeight: 1,opacity: 1,zIndex: 1,zoom: 1
                },g = (e, t) => e && t && Object.keys(t).forEach(i => e.setAttribute(i, t[i])),p = (e, t) => e && t && Object.keys(t).forEach(i => {
                    let r = t[i];
                    if (void 0 !== r)
                        e.style[i] = "number" != typeof r || m[i] ? r : `${r}px`;
                    elsee.style.removeProperty(i)
                }),f = (e, t, i=!0) => {
                    var r;
                    return e && i ? (r = e.dataset[t]) ? "true" === r || "false" !== r && 
("null" === r ? null : `${+r}` === r ? +r : r) : r : e.dataset[t]
                },_ = (e, t) => e && t && Object.assign(e.dataset, t),b = e => e || document.documentElement.clientHeight ||
window.innerHeight || 0,T = {fit: "contain",fill: "cover"
                };
            var I = i(69654);
            let E = (e, t, i) => {void 0 === e.customElements.get(t) && e.customElements.define(t, i)
            };
            function w(e, t=window) {
                class i extends t.HTMLElement {reLayout() {}
                    connectedCallback()
                    {this.observeResize(),this.reLayout()
                    }
                    disconnectedCallback()
                    {this.unobserveResize(),this.unobserveChildren()
                    }
                    observeResize()
                    {e.resizeService.observe(this)
                    }
                    unobserveResize()
                    {e.resizeService.unobserve(this)
                    }
                    observeChildren(e)
                    {this.childListObserver || (this.childListObserver = newt.MutationObserver(() => this.reLayout())),this.childListObserver.observe(e, {childList: !0
                        })
                    }
                    observeChildAttributes(e, i=[])
                    {this.childrenAttributesObservers || (this.childrenAttributesObservers
= []);
                        let r = new t.MutationObserver(() => this.reLayout());
                        r.observe(e, {attributeFilter: i
                        }),this.childrenAttributesObservers.push(r)
                    }
                    observeChildResize(t)
                    {this.childrenResizeObservers || (this.childrenResizeObservers = []),e.resizeService.observeChild(t, this),this.childrenResizeObservers.push(t)
                    }
                    unobserveChildrenResize()
                    {this.childrenResizeObservers &&
(this.childrenResizeObservers.forEach(t => {e.resizeService.unobserveChild(t)
                        }), this.childrenResizeObservers = null)
                    }
                    unobserveChildren()
                    {
                        if (this.childListObserver && (this.childListObserver.disconnect(), this.childListObserver = null), this.childrenAttributesObservers) {
                            for (let e of this.childrenAttributesObservers)
                                e.disconnect(),e = null;
                            this.childrenAttributesObservers = null
                        }
                        this.unobserveChildrenResize()
                    }
                    constructor()
                    {super()
                    }
                }
                return i
            }
            let L = e => {
                    if (e.customElementNamespace || (e.customElementNamespace = {}), void 0 === e.customElementNamespace.WixElement) {
                        let t = w({resizeService: h()
                        }, e);
                        return e.customElementNamespace.WixElement = t, t
                    }
                    return e.customElementNamespace.WixElement
                },v = "wix-bg-image",A = (e=globalThis.window, t={}, i={experiments: {}
                }) => {
                    if (e && void 0 === e.customElements.get(v)) {
                        let r = function(e, t, i, r=window) {
                            let n = ((e=window) => ({measure: function(e, t, i, {containerId: r, bgEffectName: n}, a) {
                                    let o = i[e],s = i[r],{width: l, height: h} = a.getMediaDimensionsByEffect(n,s.offsetWidth, s.offsetHeight, b(a.getScreenHeightOverride?.()));
                                    t.width = l,t.height = h,t.currentSrc = o.style.backgroundImage,t.bgEffectName = o.dataset.bgEffectName
                                },patch: function(t, i, r, n, a) {
                                    let o = r[t];
                                    n.targetWidth = i.width,n.targetHeight = i.height;
                                    let s = ((e, t, i) => {
                                        var r;
                                        let n,{targetWidth: a, targetHeight: o, imageData: s, filters: l,displayMode: h=u.fittingTypes.SCALE_TO_FILL} = e;
                                        if (!a || !o || !s.uri)
                                            return {uri: "",css: {}
                                            };
                                        let {width: c, height: d, crop: m, name: g, focalPoint: p, upscaleMethod: f, quality: _, devicePixelRatio: b=t.devicePixelRatio} = s,T = {filters: l,upscaleMethod: f,..._,hasAnimation: e?.hasAnimation || s?.hasAnimation
                                            },I = (r = b, ((n = window.location.search.split("&").map(e
=> e.split("=")).find(e => e[0].toLowerCase().includes("devicepixelratio"))) ? Number(n[1]) : null) || r || 1),E = {id: s.uri,width: c,height: d,...m && {crop: m
                                                },...p && {focalPoint: p
                                                },...g && {name: g
                                                }
                                            },w = {width: a,height: o,htmlTag: "bg",pixelAspectRatio: I,alignment: e.alignType || u.alignTypes.CENTER
                                            },L = (0, u.getData)(h, E, w, T),v = s.baseHostURL || t.staticMediaUrl;
                                        return L.uri = ((e, t, i) => {
                                            if (/(^https?)|(^data)|(^blob)|(^\/\/)/.test(e))
                                                return e;
                                            let r = `${t}/`;
                                            return e && (/^micons\//.test(e) ? r = i : "ico" === /[^ .]+$/.exec(e)[0] && (r = r.replace("media", "ficons"))), r + e
                                        })(L.uri, v, t.mediaRootUrl), L
                                    })(n, a, 0);
                                    if (function(e="", t) {
                                        return !e.includes(t) || !!e != !!t
                                    }(i.currentSrc, s.uri)) {
                                        let t,i;
                                        t = {backgroundImage: `url("${s.uri}")`,...s.css.container
                                        },(i = new e.Image).onload = p.bind(null, o, t),i.src = s.uri
                                    } elsep(o, s.css.container)
                                }
                            }))(r);
                            return class  extends e{reLayout()
                                {
                                    if 
(t.isExperimentOpen("specs.thunderbolt.tb_stop_client_images") || 
t.isExperimentOpen("specs.thunderbolt.final_force_webp") || 
t.isExperimentOpen("specs.thunderbolt.final_force_no_webp"))
                                        return;
                                    let e = {},a = {},o = (0, I.ZH)(this, {experiments: i.experiments,logger: i.logger,document: r.document
                                        }),s = JSON.parse(this.dataset.tiledImageInfo),{bgEffectName: l} = this.dataset,{containerId: h} = s,c = (0, I.qc)(h, {experiments: i.experiments,logger: i.logger,document: r.document
                                        });
                                    e[o] = this,e[h] = c,s.displayMode = s.imageData.displayMode,t.mutationService.measure(() => {n.measure(o, a, e, {containerId: h,bgEffectName: l
                                        }, t)
                                    }),t.mutationService.mutate(() => {n.patch(o, a, e, s, i, t)
                                    })
                                }
                                attributeChangedCallback(e, t)
                                {t && this.reLayout()
                                }
                                disconnectedCallback()
                                {super.disconnectedCallback()
                                }
                                static get observedAttributes()
                                {
                                    return ["data-tiled-image-info"]
                                }
                                constructor()
                                {super()
                                }
                            }
                        }(L(e), t, i, e);
                        E(e, v, r)
                    }
                };
            function y(e, t, i, r=window) {
                let n = {width: void 0,height: void 0,left: void 0
                };
                return class  extends e{reLayout()
                    {
                        let {containerId: e, pageId: a, useCssVars: o, bgEffectName: s} = this.dataset,l = (0, I.hW)(this, e) || (0, I.qc)(`${e}`, {experiments: i.experiments,logger: i.logger,document: r.document
                            }),h = (0, I.hW)(this, a) || (0, I.qc)(`${a}`, {experiments: i.experiments,logger: i.logger,document: r.document
                            }),c = {};
                        t.mutationService.measure(() => {
                            let e = "fixed" === r.getComputedStyle(this).position,i = b(t.getScreenHeightOverride?.()),n = l.getBoundingClientRect(),a = t.getMediaDimensionsByEffect(s, n.width, n.height, i),{hasParallax: d} = a,u = h && (r.getComputedStyle(h).transition ||
"").includes("transform"),{width: m, height: g} = a,p = `${m}px`,f = `${g}px`,_ = `${(n.width - m) / 2}px`;
                            if (e) {
                                let e = r.document.documentElement.clientLeft;
                                _ = u ? `${l.offsetLeft - e}px` : `${n.left - e}px`
                            }
                            let T = e || d ? 0 : `${(n.height - g) / 2}px`;
                            Object.assign(c, o ? {"--containerW": p,"--containerH": f,"--containerL": _,"--screenH_val": `${i}`
                            } : {width: p,height: f,left: _,top: T
                            })
                        }),t.mutationService.mutate(() => {
                            if (o) {
                                let e;
                                p(this, n),e = this,e && c && Object.keys(c).forEach(t => {e.style.setProperty(t, c[t])
                                })
                            } else
                                p(this, c)
                        })
                    }
                    connectedCallback()
                    {super.connectedCallback(),t.windowResizeService.observe(this)
                    }
                    disconnectedCallback()
                    {super.disconnectedCallback(),t.windowResizeService.unobserve(this)
                    }
                    attributeChangedCallback(e, t)
                    {t && this.reLayout()
                    }
                    static get observedAttributes()
                    {
                        return ["data-is-full-height", "data-container-size"]
                    }
                    constructor()
                    {super()
                    }
                }
            }
            let O = "__more__",C = "moreContainer";
            function R(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {value: i,enumerable: !0,configurable: !0,writable: !0
                }) : e[t] = i, e
            }
            let M = "wix-dropdown-menu",x = (e=globalThis.window) => {
                    if (e && void 0 === e.customElements.get(M)) {
                        let t = h(),i = function(e, t, i=window) {
                                let r = ((e=window) => {
                                    let t = (e, t, i, r, n, a, o, s) => {
                                            if (e -= n * (o ? r.length : r.length - 1), e -= s.left + s.right, t && (r = r.map(() => a)), r.some(e => 0 === e))
                                                return null;
                                            let l = 0,h = r.reduce((e, t) => e + t, 0);
                                            if (h > e)
                                                return null;
                                            if (t) {
                                                if (i) {
                                                    let t = Math.floor(e / r.length),i = r.map(() => t);
                                                    if ((l = t * r.length) < e) {
                                                        let t = Math.floor(e - l);
                                                        r.forEach((e, r) => {r <= t - 1 && i[r]++
                                                        })
                                                    }
                                                    return i
                                                }
                                                return r
                                            }
                                            if (i) {
                                                let t = Math.floor((e - h) / r.length);
                                                l = 0;
                                                let i = r.map(e => (l += e + t, e + t));
                                                if (l < e) {
                                                    let t = Math.floor(e - l);
                                                    r.forEach((e, r) => {r <= t - 1 && i[r]++
                                                    })
                                                }
                                                return i
                                            }
                                            return r
                                        },i = e => {
                                            let t = parseFloat(e);
                                            return isFinite(t) ? t : 0
                                        },r = e => !isNaN(parseFloat(e)) && isFinite(e);
                                    return {measure: (r, n) => {
                                            var a;
                                            let o,s,l,h,c,d,u,m,g,p,_ = {},b = {};
                                            b[r] = n;
                                            let T = 1,I = n.getRootNode().querySelector("[id^=site-root]");
                                            I && (T = I.getBoundingClientRect().width / I.offsetWidth);
                                            let E = (o = +f(b[r], "numItems")) <= 0 || o > 
Number.MAX_SAFE_INTEGER ? [] : Array(o).fill(0).map((e, t) => String(t)),w = ["moreContainer", "itemsContainer","dropWrapper"].concat(E, [O]);
                                            w.forEach(e => {
                                                let t = `${r}${e}`;
                                                b[t] = n.getRootNode().getElementById(`${t}`)
                                            }),a = T,s = {},w.forEach(e => {
                                                let t = `${r}${e}`,i = b[t];
                                                i && (s[t] = {width: i.offsetWidth,boundingClientRectWidth:Math.round(i.getBoundingClientRect().width / a),height: i.offsetHeight
                                                })
                                            }),_.children = s;
                                            let L = b[r],v = b[`${r}itemsContainer`],A = v.childNodes,y = b[`${r}moreContainer`],C = y.childNodes,R = f(L, "stretchButtonsToMenuWidth"),M = f(L, "sameWidthButtons");
                                            _.absoluteLeft = L.getBoundingClientRect().left,_.bodyClientWidth = e.document.body.clientWidth,_.alignButtons = f(L, "dropalign"),_.hoverListPosition = f(L, "drophposition"),_.menuBorderY = parseInt(f(L, "menuborderY"), 10),_.ribbonExtra = parseInt(f(L, "ribbonExtra"), 10),_.ribbonEls = parseInt(f(L, "ribbonEls"), 10),_.labelPad = parseInt(f(L, "labelPad"), 10),_.menuButtonBorder = parseInt(f(L, "menubtnBorder"),10),l = v.lastChild,_.menuItemContainerMargins = (parseInt((h =e.getComputedStyle(l)).marginLeft, 10) || 0) + (parseInt(h.marginRight, 10) || 0),d = i((c = e.getComputedStyle(v)).borderTopWidth) +i(c.paddingTop),u = i(c.borderBottomWidth) + i(c.paddingBottom),m = i(c.borderLeftWidth) + i(c.paddingLeft),g = i(c.borderRightWidth) + i(c.paddingRight),d += i(c.marginTop),u += i(c.marginBottom),m += i(c.marginLeft),g += i(c.marginRight),_.menuItemContainerExtraPixels = {top: d,bottom: u,left: m,right: g,height: d + u,width: m + g
                                            },_.needToOpenMenuUp = L.getBoundingClientRect().top
> e.innerHeight / 2,_.menuItemMarginForAllChildren = !R || "false" !==v.getAttribute("data-marginAllChildren"),_.moreSubItem = [],_.labelWidths = {},_.linkIds = {},_.parentId = {},_.menuItems = {},_.labels = {},C.forEach((t, i) => {_.parentId[t.id] = f(t, "parentId");
                                                let r = f(t, "dataId");
                                                _.menuItems[r] = {dataId: r,parentId: f(t, "parentId"),moreDOMid: t.id,moreIndex: i
                                                },b[t.id] = t;
                                                let n = t.querySelector("p");
                                                b[n.id] = n,_.labels[n.id] = {width: n.offsetWidth,height: n.offsetHeight,left: n.offsetLeft,lineHeight:parseInt(e.getComputedStyle(n).fontSize, 10)
                                                },_.moreSubItem.push(t.id)
                                            }),A.forEach((e, t) => {
                                                let i,r,n = f(e, "dataId");
                                                _.menuItems[n] = _.menuItems[n] || {},_.menuItems[n].menuIndex = t,_.menuItems[n].menuDOMid = e.id,_.children[e.id].left = e.offsetLeft;
                                                let a = e.querySelector("p");
                                                b[a.id] = a,_.labelWidths[a.id] = (i = a, r = T,Math.round(i.getBoundingClientRect().width / r));
                                                let o = e.querySelector("p");
                                                b[o.id] = o,_.linkIds[e.id] = o.id
                                            });
                                            let x = L.offsetHeight;
                                            _.height = x,_.width = L.offsetWidth,p = x - _.menuBorderY - _.labelPad - _.ribbonEls -_.menuButtonBorder - _.ribbonExtra,_.lineHeight = `${p}px`;
                                            let S = ((e, i, r, n, a) => {
                                                let o = i.width;
                                                i.hasOriginalGapData = {},i.originalGapBetweenTextAndBtn = {};
                                                let s = a.map(t => {
                                                        let r,a = f(n[e + t],"originalGapBetweenTextAndBtn");
                                                        return (void 0 === a ? (i.hasOriginalGapData[t] 
= !1, r = i.children[e + t].boundingClientRectWidth - i.labelWidths[`${e + t}label`], i.originalGapBetweenTextAndBtn[e + t] = r) : (i.hasOriginalGapData[t] = !0, r =parseFloat(a)), i.children[e + t].width > 0) ? Math.floor(i.labelWidths[`${e + t}
label`] + r) : 0
                                                    }),l = s.pop(),h = r.sameWidthButtons,c = r.stretchButtonsToMenuWidth,d = !1,u = i.menuItemContainerMargins,m = i.menuItemMarginForAllChildren,g = i.menuItemContainerExtraPixels,p = s.reduce((e, t) => e > t ? e : t, -1 / 0),_ = t(o, h, c, s, u, p, m, g);
                                                if (!_) {
                                                    for (let e = 1; e <= s.length; e++)
                                                        if (_ = t(o, h, c, s.slice(0, -1 * e).concat(l), u, p, m, g)) {d = !0;
                                                            break
                                                        }
                                                    _ || (d = !0, _ = [l])
                                                }
                                                if (d) {
                                                    let e = _[_.length - 1];
                                                    for (_ = _.slice(0, -1); _.length < a.length;)
                                                        _.push(0);
                                                    _[_.length - 1] = e
                                                }
                                                return {realWidths: _,moreShown: d
                                                }
                                            })(r, _, {sameWidthButtons: M,stretchButtonsToMenuWidth: R
                                            }, b, E.concat(O));
                                            return _.realWidths = S.realWidths, _.isMoreShown = S.moreShown, _.menuItemIds = E, _.hoverState = f(y, "hover", !1), {measures: _,domNodes: b
                                            }
                                        },patch: (e, t, i) => {
                                            let n = i[e];
                                            p(n, {overflowX: "visible"
                                            });
                                            let {menuItemIds: a, needToOpenMenuUp: o} = t,s = a.concat(O);
                                            _(n, {dropmode: o ? "dropUp" : "dropDown"
                                            });
                                            let l = 0;
                                            if (t.hoverState === O) {
                                                let e,r,n = t.realWidths.indexOf(0),o = t.menuItems[e = t.menuItems, r = e =>
e.menuIndex === n, Object.keys(e).find(t => r(e[t], t))],s = o.moreIndex,h = s === a.length - 1;
                                                o.moreDOMid && g(i[o.moreDOMid], {"data-listposition": h ? "dropLonely" : "top"
                                                }),Object.values(t.menuItems).filter(e => !!
e.moreDOMid).forEach(e => {
                                                    if (e.moreIndex < s)
                                                        p(i[e.moreDOMid], {display: "none"
                                                        });
                                                    else {
                                                        let i = `${e.moreDOMid}label`;
                                                        l = Math.max(t.labels[i].width, l)
                                                    }
                                                })
                                            } elset.hoverState && t.moreSubItem.forEach((i, r) => {
                                                    let n = `${e + C + r}label`;
                                                    l = Math.max(t.labels[n].width, l)
                                                });
                                            ((e, t, i, n) => {
                                                let {hoverState: a} = t;
                                                if ("-1" !== a) {
                                                    let {menuItemIds: o} = t,s = o.indexOf(a);
                                                    if (r(t.hoverState) || a === O) {
                                                        if (!t.realWidths)
                                                            return;
                                                        let a = Math.max(n, t.children[-1 !== s ? e + s : e 
+ O].width),o = Math.max(n, t.children[`${e}
dropWrapper`].width),l = (0 !== t.moreSubItem.length ? t.labels[`$
{t.moreSubItem[0]}label`].lineHeight : 0) + 15 + t.menuBorderY + t.labelPad + t.menuButtonBorder;
                                                        t.moreSubItem.forEach(e => {p(i[e], {minWidth: `${a}px`
                                                            }),p(i[`${e}label`], {minWidth: "0px",lineHeight: `${l}px`
                                                            })
                                                        });
                                                        let h = r(t.hoverState) ? t.hoverState : "__more__",c = {width: t.children[e + h].width,left: t.children[e + h].left
                                                            },d = ((e, t, i, r, n) => {
                                                                let {width: a, height: o, alignButtons: s, hoverListPosition: l, menuItemContainerExtraPixels: h} = t,c = t.absoluteLeft,d = ((e, t, i, r, n, a, o, s, l, h) => {
                                                                        let c = "0px",d = "auto",u = a.left,m = a.width;
                                                                        if ("left" === t ? c = "left" === n ? 0 : `$
{u + e.left}px` : "right" === t ? (d = "right" === n ? 0 : `${r - u - m - e.right}px`, c = "auto") : "left" === n ? c = `${u + (m + e.left - i) / 2}px` : "right" === n ? (c ="auto", d = `${(m + e.right - (i + e.width)) / 2}px`) : c = `${e.left + u + (m - (i +e.width)) / 2}px`, "auto" !== c) {
                                                                            let e = o + parseInt(c, 10);
                                                                            e + h > l ? (c = "auto", d = 0) : c = e < 
0 ? 0 : c
                                                                        }
                                                                        return "auto" !== d && (d = s - parseInt(d, 10) > l ? 0 : d), {moreContainerLeft: c,moreContainerRight: d
                                                                        }
                                                                    })(h, s, r, a, l, i, c, c + a, t.bodyClientWidth, n);
                                                                return {left: d.moreContainerLeft,right: d.moreContainerRight,top: t.needToOpenMenuUp ? "auto" : `$
{o}px`,bottom: t.needToOpenMenuUp ? `${o}
px` : "auto"
                                                                }
                                                            })(0, t, c, a, o);
                                                        p(i[`${e}${C}`], {left: d.left,right: d.right
                                                        }),p(i[`${e}dropWrapper`], {left: d.left,right: d.right,top: d.top,bottom: d.bottom
                                                        })
                                                    }
                                                }
                                            })(e, t, i, l),t.originalGapBetweenTextAndBtn && s.forEach(r => {t.hasOriginalGapData[r] || _(i[`${e}${r}`], {originalGapBetweenTextAndBtn:t.originalGapBetweenTextAndBtn[`${e}${r}`]
                                                })
                                            }),((e, t, i, r) => {
                                                let {realWidths: n, height: a, menuItemContainerExtraPixels: o} = i,s = 0,l = null,h = null,c = i.lineHeight,d = a - o.height;
                                                for (let a = 0; a < r.length; a++) {
                                                    let o = n[a],u = o > 0,m = e + r[a];
                                                    h = i.linkIds[m],u ? (s++, l = m, p(t[m], {width: `${o}px`,height: `${d}px`,position: "relative","box-sizing": "border-box",overflow: "visible",visibility: "inherit"
                                                    }), p(t[`${m}label`], {"line-height": c
                                                    }), g(t[m], {"aria-hidden": !1
                                                    })) : (p(t[m], {height: "0px",overflow: "hidden",position: "absolute",visibility: "hidden"
                                                    }), g(t[m], {"aria-hidden": !0
                                                    }), g(t[h], {tabIndex: -1
                                                    }))
                                                }
                                                1 === s && (_(t[`${e}moreContainer`], {listposition: "lonely"
                                                }), _(t[l], {listposition: "lonely"
                                                }))
                                            })(e, i, t, s)
                                        }
                                    }
                                })(i);
                                return class  extends e{static get observedAttributes()
                                    {
                                        return ["data-hovered-item"]
                                    }
                                    attributeChangedCallback()
                                    {this._isVisible() && this.reLayout()
                                    }
                                    connectedCallback()
                                    {this._id = this.getAttribute("id"),this._hideElement(),this._waitForDomLoad().then(() => {super.observeResize(),this._observeChildrenResize(),this.reLayout()
                                        })
                                    }
                                    disconnectedCallback()
                                    {t.mutationService.clear(this._mutationIds.read),t.mutationService.clear(this._mutationIds.write),super.disconnectedCallback()
                                    }
                                    _waitForDomLoad()
                                    {
                                        let e,t = new Promise(t => {e = t
                                            });
                                        return this._isDomReady() ? e() : (this._waitForDomReadyObserver = new i.MutationObserver(() =>
this._onRootMutate(e)), this._waitForDomReadyObserver.observe(this, {childList: !0,subtree: !0
                                        })), t
                                    }
                                    _isDomReady()
                                    {
                                        return this._itemsContainer = this.getRootNode().getElementById(`${this._id}itemsContainer`),this._dropContainer = this.getRootNode().getElementById(`${this._id}
dropWrapper`), this._itemsContainer && this._dropContainer
                                    }
                                    _onRootMutate(e)
                                    {this._isDomReady() &&
(this._waitForDomReadyObserver.disconnect(), e())
                                    }
                                    _observeChildrenResize()
                                    {
                                        let e = Array.from(this._itemsContainer.childNodes);
                                        this._labelItems = e.map(e => 
this.getRootNode().getElementById(`${e.getAttribute("id")}label`)),this._labelItems.forEach(e =>
super.observeChildResize(e))
                                    }
                                    _setVisibility(e)
                                    {this._visible = e,this.style.visibility = e ? "inherit" : "hidden"
                                    }
                                    _isVisible()
                                    {
                                        return this._visible
                                    }
                                    _hideElement()
                                    {this._setVisibility(!1)
                                    }
                                    _showElement()
                                    {this._setVisibility(!0)
                                    }
                                    reLayout()
                                    {
                                        let e,i;
                                        t.mutationService.clear(this._mutationIds.read),t.mutationService.clear(this._mutationIds.write),this._mutationIds.read = t.mutationService.measure(() =>
{
                                            let t = r.measure(this._id, this);
                                            e = t.measures,i = t.domNodes
                                        }),this._mutationIds.write = t.mutationService.mutate(() => {r.patch(this._id, e, i),this._showElement()
                                        })
                                    }
                                    constructor(...e)
                                    {super(...e),R(this, "_visible", !1),R(this, "_mutationIds", {read: null,write: null
                                        }),R(this, "_itemsContainer", null),R(this, "_dropContainer", null),R(this, "_labelItems", [])
                                    }
                                }
                            }(L(e), {resizeService: t,mutationService: n()
                            }, e);
                        e.customElements.define(M, i)
                    }
                },S = "wix-iframe",G = (e=globalThis.window) => {
                    if (e && void 0 === e.customElements.get(S)) {
                        var t;
                        let i = (t = L(e), class  extends t{reLayout()
                            {
                                let e = this.querySelector("iframe");
                                if (e) {
                                    let t = e.dataset.src;
                                    t && e.src !== t && (e.src = t, e.dataset.src = "", this.dataset.src = "")
                                }
                            }
                            attributeChangedCallback(e, t, i)
                            {i && this.reLayout()
                            }
                            static get observedAttributes()
                            {
                                return ["data-src"]
                            }
                            constructor()
                            {super()
                            }
                        }
                        );
                        E(e, S, i)
                    }
                },N = {measure(e, t, {hasBgScrollEffect: i, videoWidth: r, videoHeight: n,fittingType: a, alignType: o="center", qualities: s, staticVideoUrl: l, videoId: h,videoFormat: c, focalPoint: m}) {
                        var g,p,f,_,b,I,E,w,L,v;
                        let A,y,O,C = i ? t.offsetWidth : e.parentElement.offsetWidth,R = e.parentElement.offsetHeight,M = parseInt(r, 10),x = parseInt(n, 10),S = (g = a, p = {wScale: C / M,hScale: R / x
                            }, f = M, _ = x, {width: Math.round(f * (A = g ===u.fittingTypes.SCALE_TO_FIT ? Math.min(p.wScale, p.hScale) :Math.max(p.wScale, p.hScale))),height: Math.round(_ * A)
                            }),G = (b = function(e, {width: t, height: i}) {
                                var r;
                                return (r = e => e.size, Object.values(e.reduce((e, t) => (e[r(t)] 
= t, e), {}))).find(e => e.size > t * i) || e[e.length - 1]
                            }(s, S), I = l, E = h, "mp4" === (w = c) ? b.url ? d(I, b.url) : d(I, E, b.quality, w, "file.mp4") : ""),N = (L = e, v = G, y = L.networkState ===L.NETWORK_NO_SOURCE, O = !L.currentSrc.endsWith(v), v && (O || y)),P = T[a] || "cover",F = m ? function(e, t, i) {
                                let {width: r, height: n} = e,{width: a, height: o} = t,{x: s, y: l} = i;
                                if (!a || !o)
                                    return `${s}% ${l}%`;
                                let h = Math.max(a / r, o / n),c = r * h,d = n * h,u = Math.max(0, Math.min(c - a, s / 100 * c - a / 2)),m = Math.max(0, Math.min(d - o, l / 100 * d - o / 2)),g = u && Math.floor(u / (c - a) * 100),p = m && Math.floor(m / (d - o) * 100);
                                return `${g}% ${p}%`
                            }(S, {width: C,height: R
                            }, m) : "",k = o.replace("_", " ");
                        return {videoSourceUrl: G,needsSrcUpdate: N,videoStyle: {height: "100%",width: "100%",objectFit: P,objectPosition: F || k
                            }
                        }
                    },mutate(e, t, i, r, n, a, o, s, l, h, c) {
                        var d,u,m;
                        if (n ? i.setAttribute("autoplay", "") : i.removeAttribute("autoplay"), t) {
                            let {width: e, height: i, ...n} = r;
                            p(t, n)
                        } else
                            (function(e, t, i, r, n, a) {a && t.paused && (i.style.opacity = "1", t.style.opacity = "0");
                                let o = t.paused || "" === t.currentSrc;
                                if ((e || a) && o)
                                    if (t.ontimeupdate = null, t.onseeked = null, t.onplay = null, !a 
&& n) {
                                        let e = t.muted;
                                        t.muted = !0,t.ontimeupdate = () => {t.currentTime > 0 && (t.ontimeupdate = null, t.onseeked
= () => {t.onseeked = null,t.muted = e,P(t, i, r)
                                            }, t.currentTime = 0)
                                        }
                                    } elset.onplay = () => {a || (t.onplay = null),P(t, i, r)
                                        }
                            })(o, i, e, s, n, c),p(i, r);
                        d = o,u = i,m = a,d && (u.src = m, u.load()),i.playbackRate = h
                    }
                };
            function P(e, t, i) {"fade" === i && (t.style.transition = "opacity 1.6s ease-out"),t.style.opacity = "0",e.style.opacity = "1"
            }
            let F = "wix-video",k = (e=globalThis.window, t, i={experiments: {}
                }) => {
                    if (e && void 0 === e.customElements.get(F)) {
                        var r,n;
                        let a = L(e),o = new IntersectionObserver(e => e.map(e => {
                                if (e.isIntersecting) {
                                    let t = e.target;
                                    t.unobserveIntersect(),t.observeResize()
                                }
                                return e
                            }), {rootMargin: "50% 100%"
                            });
                        E(e, F, (r = a, n = {...t,intersectionObserver: o
                        }, class  extends r{connectedCallback()
                            {i.disableImagesLazyLoading ? this.reLayout() :n.intersectionObserver.observe(this)
                            }
                            disconnectedCallback()
                            {this.unobserveResize(),this.unobserveIntersect(),this.unobserveChildren()
                            }
                            unobserveIntersect()
                            {n.intersectionObserver?.unobserve(this)
                            }
                            reLayout()
                            {
                                let {isVideoDataExists: e, videoWidth: t, videoHeight: r, qualities: a, videoId: o, videoFormat: s, alignType: l, fittingType: h, focalPoint: c,hasBgScrollEffect: d, autoPlay: u, animatePoster: m, containerId: g, isEditorMode:p, playbackRate: f, hasAlpha: _} = JSON.parse(this.dataset.videoInfo);
                                if (!e)
                                    return;
                                let b = !i.prefersReducedMotion && u,T = this.querySelector(`video[id^="${g}"]`),E = this.querySelector(`.bgVideoposter[id^="${g}"]`);
                                if (this.unobserveChildren(), !(T && E))
                                    return void this.observeChildren(this);
                                let w = (0, I.qc)(g, {document: this.getRootNode(),experiments: i.experiments,logger: i.logger
                                    }),L = (0, I.iT)(`.webglcanvas[id^="${g}"]`, {element: w,experiments: i.experiments,logger: i.logger
                                    });
                                (_ || "true" === w.dataset.hasAlpha) && !L ? requestAnimationFrame(() => this.reLayout()) : n.mutationService.measure(() => {
                                    let {videoSourceUrl: e, needsSrcUpdate: u, videoStyle: g} = N.measure(T, w, {hasBgScrollEffect: d,videoWidth: t,videoHeight: r,fittingType: h,alignType: l,qualities: a,staticVideoUrl: i.staticVideoUrl,videoId: o,videoFormat: s,focalPoint: c
                                    });
                                    n.mutationService.mutate(() => {N.mutate(E, L, T, g, b, e, u, m, s, f, p)
                                    })
                                })
                            }
                            attributeChangedCallback(e, t)
                            {t && this.reLayout()
                            }
                            static get observedAttributes()
                            {
                                return ["data-video-info"]
                            }
                            constructor()
                            {super()
                            }
                        }
                        ))
                    }
                }
        },46418(e, t, i) {
            var r = i(17709),n = i.n(r),a = i(33842),o = i(26350),s = i(16858);
            let l = o,h = function(e, t=window) {!function(e) {
                        if (void 0 === e.Reflect || void 0 === e.customElements || 
e.customElements.hasOwnProperty("polyfillWrapFlushCallback"))
                            return;
                        let t = e.HTMLElement;
                        e.HTMLElement = function() {
                            return e.Reflect.construct(t, [], this.constructor)
                        },e.HTMLElement.prototype = t.prototype,e.HTMLElement.prototype.constructor = e.HTMLElement,e.Object.setPrototypeOf(e.HTMLElement, t),e.Object.defineProperty(e.HTMLElement, "name", {value: t.name
                        })
                    }(t);
                    let i = {registry: new Set,observe(e) {i.registry.add(e)
                        },unobserve(e) {i.registry.delete(e)
                        }
                    };
                    e.windowResizeService.init((0, s.vk)(() => i.registry.forEach(e => 
e.reLayout())), t);
                    let r = (0, s.Aq)(),n = (e, i) => {void 0 === t.customElements.get(e) &&
t.customElements.define(e, i)
                        },a = (0, s.yO)({resizeService: r
                        }, t);
                    return t.customElementNamespace = {WixElement: a
                    }, n("wix-element", a), {contextWindow: t,defineWixBgMedia: e => {n("wix-bg-media", (0, s.NL)(a, {windowResizeService: i,...e
                            }, t))
                        },defineMultiColumnRepeaterElement: () => {
                            let e = (0, s._o)();
                            n(s.KU, e)
                        }
                    }
                };
            var c = i(91534);
            let d = () => ({getSiteScale: () => {
                        let e = document.querySelector("#site-root");
                        return e ? e.getBoundingClientRect().width / e.offsetWidth : 1
                    }
                }),u = (e, t, i, r) => {
                    let {getMediaDimensions: n, ...o} = a[e] || {};
                    return n ? {...n(t, i, r),...o
                    } : {width: t,height: i,...o
                    }
                },{experiments: m, media: g, requestUrl: p, site: f, siteAssets: _} =window.viewerModel;
            ((e, t, i, r) => {
                var a,o,s;
                let m,g,p,f,_,b,{environmentConsts: T, wixCustomElements: I, media: E, requestUrl: w,mediaServices: L} = (a = void 0, o = void 0, s = void 0, g = {"specs.thunderbolt.useClassSelectorsForLookup": (m = t => !!
e.experiments[t])("specs.thunderbolt.useClassSelectorsForLookup"),"specs.thunderbolt.addIdAsClassName":m("specs.thunderbolt.addIdAsClassName")
                    }, p = {staticMediaUrl: e.media.staticMediaUrl,mediaRootUrl: e.media.mediaRootUrl,externalBaseUrl: e.externalBaseUrl ?? "",hasUserDomainMedia: e.hasUserDomainMedia ?? !1,experiments: g,isViewerMode: !0,devicePixelRatio: /iemobile/i.test(navigator.userAgent) ?Math.round(window.screen.availWidth / (window.screen.width ||
window.document.documentElement.clientWidth)) : window.devicePixelRatio,...s
                    }, _ = {getMediaDimensionsByEffect: u,...f = {mutationService: n(),isExperimentOpen: m,siteService: d()
                        },...o
                    }, {...e,wixCustomElements: a || (b = d(), h({resizeService: {init: e => new ResizeObserver(e)
                            },windowResizeService: {init: e => window.addEventListener("resize", e)
                            },siteService: b
                        })),services: f,environmentConsts: p,mediaServices: _
                    }),v = I?.contextWindow || window;
                v.wixCustomElements = I,Object.assign(v.customElementNamespace, {mediaServices: L,environmentConsts: T,requestUrl: w,staticVideoUrl: E.staticVideoUrl
                }),(0, c.g)({...L
                }, I.contextWindow, T),I.defineWixBgMedia(L),I.defineMultiColumnRepeaterElement(),window.__imageClientApi__ = l
            })({experiments: m,media: g,requestUrl: p,externalBaseUrl: f?.externalBaseUrl ?? "",hasUserDomainMedia: _?.siteScopeParams?.hasUserDomainMedia ?? !1
            })
        },13176(e, t, i) {i.d(t, {z: () => r
            });
            let r = ["MENU_AS_CONTAINER_TOGGLE", "MENU_AS_CONTAINER_EXPANDABLE_MENU", "BACK_TO_TOP_BUTTON","SCROLL_TO_", "TPAMultiSection_", "TPASection_", "comp-", "TINY_MENU","MENU_AS_CONTAINER", "SITE_HEADER", "SITE_FOOTER", "SITE_PAGES","PAGES_CONTAINER", "BACKGROUND_GROUP", "POPUPS_ROOT"]
        },69654(e, t, i) {i.d(t, {C5: () => h,Xx: () => c,ZH: () => l,hW: () => m,iT: () => d,kp: () => g,qc: () => s,vP: () => u
            });
            var r = i(13176);
            function n(e={}) {
                let t = e?.experiments;
                if (!t && "undefined" != typeof window)
                    try {
                        let e = window;
                        t = e.viewerModel?.experiments
                    } catch {}
                if (!t)
                    return !1;
                let i = t["specs.thunderbolt.useClassSelectorsForLookup"],r = t["specs.thunderbolt.addIdAsClassName"];
                return !!(i && r)
            }
            function a(e={}) {
                return e.document || ("undefined" != typeof document ? document : null)
            }
            function o(e, t, i) {e && "function" == typeof e.meter &&
e.meter("dom_selector_id_fallback", {customParams: {compId: t,selectorType: i
                    }
                }),"undefined" != typeof console && console.warn && console.warn(`[DOMSelectors] Fallback to ID for '${t}' (${i}).`)
            }
            function s(e, t={}) {
                let i = a(t);
                if (!i || !e || "string" != typeof e)
                    return null;
                let r = n(t);
                if (r) {
                    let t = i.querySelector(`.${e}`);
                    if (t)
                        return t
                }
                let l = i.getElementById(e);
                return l && r && o(t?.logger, e, "getElementById"), l
            }
            function l(e, t={}) {
                if (!e)
                    return "";
                if (!n(t))
                    return e.id;
                let i = Array.from(e.classList || []),a = t.experiments?.["specs.thunderbolt.preserveWixSelectClass"];
                if (t.isEditor && a && !i.includes("wix-select"))
                    return "";
                if (t.componentIds?.size) {
                    let e = null;
                    for (let r of i) {
                        if (t.componentIds.has(r))
                            return r;
                        if (!e) {
                            let i = r.indexOf("__");
                            if (i > 0) {
                                let n = r.substring(0, i);
                                t.componentIds.has(n) && (e = r)
                            }
                        }
                    }
                    if (e)
                        return e
                }
                let s = t.prefixes ?? r.z,h = null;
                for (let e of i)
                    if (s.some(t => e.startsWith(t))) {
                        if (e.includes("__"))
                            return e;
                        (!h || e.length < h.length) && (h = e)
                    }
                return h || (e.id && o(t.logger, e.id, "getElementCompId"), e.id || "")
            }
            function h(e) {
                return e.replace(/#([a-zA-Z0-9_-]+)/g, ".$1").replace(/\[id="([^"]+)"\]/g, '[class~="$1"]').replace(/\[id\^="([^"]+)"\]/g, ':is([class^="$1"],[class*="$1"])').replace(/\[id\*="([^"]+)"\]/g, '[class*="$1"]').replace(/\[id\$="([^"]+)"\]/g,'[class$="$1"]')
            }
            function c(e, t, i=!1) {
                if (!t)
                    return e;
                let r = h(e);
                return `:is(${r}${i ? ".wix-select" : ""}, ${e})`
            }
            function d(e, t={}) {
                let i = t.element || a(t);
                if (!i || !e || "string" != typeof e)
                    return null;
                let r = n(t);
                if (r) {
                    let t = h(e),r = i.querySelector(t);
                    if (r)
                        return r
                }
                let s = i.querySelector(e);
                return s && r && o(t.logger, e, "querySelector"), s
            }
            function u(e, t={}) {
                let i = t.element || a(t);
                if (!i || !e || "string" != typeof e)
                    return [];
                let r = n(t);
                if (r) {
                    let t = h(e),r = Array.from(i.querySelectorAll(t));
                    if (r.length > 0)
                        return r
                }
                let s = Array.from(i.querySelectorAll(e));
                return s.length > 0 && r && o(t.logger, e, "querySelectorAll"), s
            }
            function m(e, t, i={}) {
                if (!t || "string" != typeof t)
                    return null;
                let r = n(i);
                if (r) {
                    let i = e.closest(`.${t}`);
                    if (i)
                        return i
                }
                let a = e.closest(`#${t}`);
                return a && r && o(i.logger, t, "getClosestByCompId"), a
            }
            function g(e, t, i={}) {
                if (!t || "string" != typeof t)
                    return null;
                let r = n(i);
                if (r) {
                    let i = h(t),r = e.closest(i);
                    if (r)
                        return r
                }
                let a = e.closest(t);
                return a && r && o(i.logger, t, "closest"), a
            }
        }
    }]);
    //# sourceMappingURL=custom-element-utils.inline.dfd062cc.bundle.min.js.map


/* inline-30.js */
"use strict";
    (self.webpackJsonp__wix_thunderbolt_app = self.webpackJsonp__wix_thunderbolt_app || []).push([["6901"], {33842(e, t, i) {i.r(t),i.d(t, {BackgroundParallax: () => n,BackgroundParallaxZoom: () => o,BackgroundReveal: () => l,BgCloseUp: () => c,BgExpand: () => d,BgFabeBack: () => h,BgFadeIn: () => u,BgFadeOut: () => g,BgFake3D: () => m,BgPanLeft: () => f,BgPanRight: () => b,BgParallax: () => p,BgPullBack: () => v,BgReveal: () => w,BgRotate: () => y,BgShrink: () => M,BgSkew: () => x,BgUnwind: () => I,BgZoomIn: () => P,BgZoomOut: () => L,ImageParallax: () => S,ImageReveal: () => D
            });
            var a = i(16956);
            let s = (e, t) => ({width: e,height: t
                }),r = (e, t, i) => ({width: e,height: Math.max(t, i)
                }),n = {hasParallax: !0,getMediaDimensions: r
                },o = {hasParallax: !0,getMediaDimensions: r
                },l = {hasParallax: !0,getMediaDimensions: r
                },c = {getMediaDimensions: s
                },d = {getMediaDimensions: s
                },h = {getMediaDimensions: s
                },u = {getMediaDimensions: s
                },g = {getMediaDimensions: s
                },m = {hasParallax: !0,getMediaDimensions: r
                },f = {getMediaDimensions: (e, t) => ({width: 1.2 * e,height: t
                    })
                },b = {getMediaDimensions: (e, t) => ({width: 1.2 * e,height: t
                    })
                },p = {hasParallax: !0,getMediaDimensions: r
                },v = {getMediaDimensions: s
                },w = {hasParallax: !0,getMediaDimensions: r
                },y = {getMediaDimensions: (e, t) => {
                        let i,s,r,n,o;
                        return i = (0, a.kU)(22), s = Math.hypot(e, t) / 2, r = Math.acos(e / 2 / s), n = e * Math.abs(Math.cos(i)) + t * Math.abs(Math.sin(i)), o = e *
Math.abs(Math.sin(i)) + t * Math.abs(Math.cos(i)), {width: Math.ceil(i < r ? n : 2 * s),height: Math.ceil(i < (0, a.kU)(90) - r ? o : 2 * s)
                        }
                    }
                },M = {getMediaDimensions: s
                },x = {getMediaDimensions: (e, t) => ({width: e,height: e * Math.tan((0, a.kU)(20)) + t
                    })
                },I = {getMediaDimensions: s
                },P = {hasParallax: !0,getMediaDimensions: r
                },L = {getMediaDimensions: (e, t) => ({width: 1.15 * e,height: 1.15 * t
                    })
                },S = {getMediaDimensions: (e, t) => ({width: e,height: 1.5 * t
                    })
                },D = {getMediaDimensions: (e, t, i) => ({width: e,height: i
                    })
                }
        },16956(e, t, i) {
            function a(e, t, i, a, s) {
                return (s - e) * (a - i) / (t - e) + i
            }
            function s(e, t) {
                let [i, a] = e,[s, r] = t;
                return Math.sqrt((s - i) ** 2 + (r - a) ** 2)
            }
            function r(e) {
                return e * Math.PI / 180
            }
            function n(e, t, i) {
                return void 0 === e && (e = [0, 0]), void 0 === t && (t = [0, 0]), void 0 
=== i && (i = 0), (360 + i + 180 * Math.atan2(t[1] - e[1], t[0] - e[0]) / Math.PI) % 
360
            }
            i.d(t, {Io: () => s,Rb: () => n,_b: () => a,kU: () => r
            })
        },91534(e, t, i) {i.d(t, {g: () => f
            });
            var a = i(26350);
            let s = {columnCount: 1,columns: 1,fontWeight: 1,lineHeight: 1,opacity: 1,zIndex: 1,zoom: 1
                },r = (e, t) => (Array.isArray(t) ? t : [t]).reduce((t, i) => {
                    let a = e[i];
                    return void 0 !== a ? Object.assign(t, {[i]: a
                    }) : t
                }, {}),n = (e, t) => e && t && Object.keys(t).forEach(i => {
                    let a = t[i];
                    if (void 0 !== a)
                        e.style[i] = "number" != typeof a || s[i] ? a.toString() : `${a}px`;
                    elsee.style.removeProperty(i)
                }),o = (e, t, i) => {
                    if (!e.targetWidth || !e.targetHeight || !e.imageData.uri)
                        return {uri: "",css: {},transformed: !1
                        };
                    let {imageData: s} = e,n = e.displayMode || a.fittingTypes.SCALE_TO_FILL,o = Object.assign(r(s, ["upscaleMethod"]), r(e, ["filters","encoding", "allowFullGIFTransformation"]), e.quality || s.quality, {hasAnimation: e?.hasAnimation || s?.hasAnimation
                        }),d = c(e.imageData.devicePixelRatio || t.devicePixelRatio),h = Object.assign(r(s, ["width", "height", "crop", "name","focalPoint"]), {id: s.uri
                        }),u = {width: e.targetWidth,height: e.targetHeight,htmlTag: i || "img",pixelAspectRatio: d,alignment: e.alignType || a.alignTypes.CENTER
                        },g = (0, a.getData)(n, h, u, o);
                    return g.uri = l(g.uri, t.staticMediaUrl, t.mediaRootUrl), g
                },l = (e, t, i) => {
                    if (/(^https?)|(^data)|(^blob)|(^\/\/)/.test(e))
                        return e;
                    let a = `${t}/`;
                    return e && (/^micons\//.test(e) ? a = i : /[^ .]+$/.exec(e)?.[0] === "ico" && (a = a.replace("media", "ficons"))), a + e
                },c = e => {
                    let t = window.location.search.split("&").map(e => e.split("=")).find(e 
=> e[0]?.toLowerCase().includes("devicepixelratio"));
                    return (t?.[1] ? Number(t[1]) : null) || e || 1
                },d = function(e, t, i, {containerElm: a, bgEffect: s="none", sourceSets: r},n) {
                    var o,l;
                    let c,d = i.image,h = i[e],u = n.getScreenHeightOverride?.() ||
document.documentElement.clientHeight || window.innerHeight || 0,g = a?.dataset.mediaHeightOverrideType,m = s && "none" !== s || r && r.some(e => e.scrollEffect),f = a && m ? a : h,b = window.getComputedStyle(h).getPropertyValue("--bg-scrub-effect"),{width: p, height: v} = n.getMediaDimensionsByEffect?.(b || s,f.offsetWidth, f.offsetHeight, u) || {width: h.offsetWidth,height: h.offsetHeight
                        };
                    if (r && (o = f.offsetWidth, l = f.offsetHeight, c = {}, r.forEach(({mediaQuery: e, scrollEffect: t}) => {c[e] = n.getMediaDimensionsByEffect?.(t, o, l, u).height || l
                    }), t.sourceSetsTargetHeights = c), !d)
                        return;
                    let w = d.getAttribute("src");
                    b && (t.top = .5 * (h.offsetHeight - v), t.left = .5 * (h.offsetWidth - p)),t.width = p,t.height = "fixed" === g || "viewport" === g ?document.documentElement.clientHeight + 80 : v,t.screenHeight = u,t.imgSrc = w,t.boundingRect = h.getBoundingClientRect(),t.mediaHeightOverrideType = g,t.srcset = d.srcset
                },h = function(e, t, i, s, r, l, c, d, h, u) {
                    if (!Object.keys(t).length)
                        return;
                    let {imageData: g} = s,m = i[e],f = i.image;
                    h && (g.devicePixelRatio = 1);
                    let b = s.targetScale || 1,p = r.isExperimentOpen?.("specs.thunderbolt.allowFullGIFTransformation"),v = {...s,...!s.skipMeasure && {targetWidth: (t.width || 0) * b,targetHeight: (t.height || 0) * b
                            },displayMode: g.displayMode,allowFullGIFTransformation: p
                        },w = o(v, l, "img"),y = w?.css?.img || {};
                    n(f, function(e, t, i, a, s) {
                        let r = function(e, t=1) {
                            return 1 !== t ? {...e,width: "100%",height: "100%"
                            } : e
                        }(t, a);
                        if (s && (delete r.height, r.width = "100%"), !e)
                            return r;
                        let n = {...r
                        };
                        return "fill" === i ? (n.position = "absolute", n.top = "0") : "fit" === i 
&& (n.height = "100%"), "fixed" === e && (n["will-change"] = "transform"), n.objectPosition && (n.objectPosition = t.objectPosition.replace(/(center|bottom)
$/, "top")), n
                    }(t.mediaHeightOverrideType, y, g.displayMode, b, d)),(t.top || t.left) && n(m, {top: `${t.top}px`,left: `${t.left}px`
                    });
                    let M = w?.uri || "",x = g?.hasAnimation || s?.hasAnimation,I = function(e, t, i) {
                            let {sourceSets: a} = t;
                            if (!a || !a.length)
                                return;
                            let s = {};
                            return a.forEach(({mediaQuery: a, crop: r, focalPoint: n}) => {
                                let l = o({...t,targetHeight: (e.sourceSetsTargetHeights || {})[a] || 0,imageData: {...t.imageData,crop: r,focalPoint: n
                                    }
                                }, i, "img");
                                s[a] = l.uri || ""
                            }), s
                        }(t, v, l);
                    if (u && (f.dataset.ssrSrcDone = "true"), !s.isLQIP || !s.lqipTransition || 
"transitioned" in m.dataset || (m.dataset.transitioned = "", f.complete ? f.onload = 
function() {f.dataset.loadDone = ""
                    } : f.onload = function() {f.complete ? f.dataset.loadDone = "" : f.onload = function() {f.dataset.loadDone = ""
                        }
                    }), c) {
                        let e;
                        (e = g.uri, (0, a.getFileExtension)(e) === a.fileType.GIF || (0, a.getFileExtension)(e) === a.fileType.WEBP && x) ? (f.setAttribute("fetchpriority","low"), f.setAttribute("loading", "lazy"), f.setAttribute("decoding", "async")) :f.setAttribute("fetchpriority", "high"),f.currentSrc !== M && f.setAttribute("src", M),t.srcset && !t.srcset.split(", ").some(e => e.split(" ")[0] === M) &&
f.setAttribute("srcset", M),i.picture && v.sourceSets &&
Array.from(i.picture.querySelectorAll("source")).forEach(e => {
                            let t = e.media || "",i = I?.[t];
                            e.srcset !== i && e.setAttribute("srcset", i || "")
                        })
                    }
                },u = {parallax: "ImageParallax",fixed: "ImageReveal"
                };
            var g = i(17709),m = i.n(g);
            function f(e={}, t=null, i={}) {
                if ("undefined" == typeof window)
                    return;
                let a = {staticMediaUrl: "https://static.wixstatic.com/media",mediaRootUrl: "https://static.wixstatic.com",experiments: {},devicePixelRatio: /iemobile/i.test(navigator.userAgent) ?Math.round(window.screen.availWidth / (window.screen.width ||
window.document.documentElement.clientWidth)) : window.devicePixelRatio,disableImagesLazyLoading: (() => {
                            try {
                                return "true" === new URL(window.location.href).searchParams.get("disableLazyLoading")
                            } catch {
                                return !1
                            }
                        })(),...i
                    },s = function(e, t) {
                        let i = "wow-image";
                        if (void 0 === (e = e || window).customElements.get(i)) {
                            let a,s;
                            return e.ResizeObserver && (a = new e.ResizeObserver(e => 
e.map(e => e.target.reLayout()))), e.IntersectionObserver && (s = new IntersectionObserver(e => e.map(e => {
                                if (e.isIntersecting) {
                                    let t = e.target;
                                    t.unobserveIntersect(),t.observeResize()
                                }
                                return e
                            }), {rootMargin: "150% 100%"
                            })), function(r) {
                                var n,o;
                                let l = (n = {resizeService: a,intersectionService: s,mutationService: m(),...t
                                }, o = e, class  extends o.HTMLElement{constructor()
                                    {super(),this.childListObserver = null,this.timeoutId = null
                                    }
                                    attributeChangedCallback(e, t)
                                    {t && this.reLayout()
                                    }
                                    connectedCallback()
                                    {r.disableImagesLazyLoading ? this.reLayout() :this.observeIntersect()
                                    }
                                    disconnectedCallback()
                                    {this.unobserveResize(),this.unobserveIntersect(),this.unobserveChildren()
                                    }
                                    static get observedAttributes()
                                    {
                                        return ["data-image-info"]
                                    }
                                    reLayout()
                                    {
                                        let e = {},t = {},i = this.getAttribute("id"),a = JSON.parse(this.dataset.imageInfo || ""),s = "true" === this.dataset.isResponsive,{bgEffectName: l} = this.dataset,{scrollEffect: c} = a.imageData,{sourceSets: g} = a,m = l || c && u[c];
                                        g && g.length && g.forEach(e => {e.scrollEffect && (e.scrollEffect = u[e.scrollEffect])
                                        }),e[i] = this,a.containerId && (e[a.containerId] =o.document.getElementById(`${a.containerId}`));
                                        let f = a.containerId ? e[a.containerId] : void 0;
                                        if (e.image = this.querySelector("img"), e.picture = this.querySelector("picture"), !e.image)
                                            return void this.observeChildren(this);
                                        this.unobserveChildren(),this.observeChildren(this),n.mutationService.measure(() => {d(i, t, e, {containerElm: f,bgEffect: m,sourceSets: g
                                            }, n)
                                        });
                                        let b = (o, l) => {n.mutationService.mutate(() => {h(i, t, e, a, n, r, o, s, m, l)
                                                })
                                            },p = e.image,v = this.dataset.hasSsrSrc && !p.dataset.ssrSrcDone;
                                        !p.getAttribute("src") || v ? b(!0, !0) : this.debounceImageLoad(b)
                                    }
                                    debounceImageLoad(e)
                                    {clearTimeout(this.timeoutId),this.timeoutId = o.setTimeout(() => {e(!0)
                                        }, 250),e(!1)
                                    }
                                    observeResize()
                                    {n.resizeService?.observe(this)
                                    }
                                    unobserveResize()
                                    {n.resizeService?.unobserve(this)
                                    }
                                    observeIntersect()
                                    {n.intersectionService?.observe(this)
                                    }
                                    unobserveIntersect()
                                    {n.intersectionService?.unobserve(this)
                                    }
                                    observeChildren(e)
                                    {this.childListObserver || (this.childListObserver = newo.MutationObserver(() => {this.reLayout()
                                        })),this.childListObserver.observe(e, {childList: !0
                                        })
                                    }
                                    unobserveChildren()
                                    {this.childListObserver &&
(this.childListObserver.disconnect(), this.childListObserver = null)
                                    }
                                }
                                );
                                e.customElements.define(i, l)
                            }
                        }
                    }(t, e);
                s && s(a)
            }
        }
    }, function(e) {e.O(0, ["1619", "3033"], function() {
            return e(e.s = 46418)
        }),e.O()
    }]);
    //# sourceMappingURL=initCustomElements.inline.25987d64.bundle.min.js.map
