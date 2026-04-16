/* inline-14.js */
var bodyCacheable = true;
    var exclusionReason = {"shouldRender": true,"forced": false
    };
    var ssrInfo = {"cacheExclusionReason": "","renderBodyTime": 4160,"renderTimeStamp": 1776193915332
    }


/* inline-15.js */



/* inline-16.js */



/* inline-17.js */
if (window.ResizeObserver &&
    (!window.PerformanceObserver || !PerformanceObserver.supportedEntryTypes || 
PerformanceObserver.supportedEntryTypes.indexOf('paint') === -1)) {new ResizeObserver(function(entries, observer) {entries.some(function(entry) {
                var contentRect = entry.contentRect;
                if (contentRect.width > 0 && contentRect.height > 0) {requestAnimationFrame(function(now) {window.wixFirstPaint = now;
                        dispatchEvent(new CustomEvent('wixFirstPaint'));
                    });
                    observer.disconnect();
                    return true;
                }
            });
        }).observe(document.body);
    }


/* inline-18.js */
const div = document.createElement('div')
    div.style.overflowY = 'scroll'div.style.width = '50px'div.style.height = '50px'div.style.visibility = 'hidden'document.body.appendChild(div)
    const scrollbarWidth = div.offsetWidth - div.clientWidthdocument.body.removeChild(div)
    if (scrollbarWidth > 0) {document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)
    }
