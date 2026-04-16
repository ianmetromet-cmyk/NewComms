(function() {
        var now = Date.now()
        var activationStart = 0
        try {
            var navEntry = performance.getEntriesByType('navigation')[0];
            if (navEntry && navEntry.activationStart > 0) {activationStart = navEntry.activationStart;
            }
        } catch (e) {}
        window.initialTimestamps = {initialTimestamp: now,
            // initialRequestTimestamp approximates when the navigation started.
            // activationStart is added to account for prerendered pages: the page may have been
            // created well before the user actually navigated, and activationStart marks when
            // the prerendered page was activated (made visible). Adding it shifts timeOrigin
            // forward to reflect the real navigation time. For non-prerendered pages activationStart is 0.initialRequestTimestamp: Math.round(performance.timeOrigin ?performance.timeOrigin + activationStart : now - performance.now() +activationStart)
        }
        window.thunderboltTag = "QA_READY"window.thunderboltVersion = "1.17152.0"
    })();
