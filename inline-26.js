if (typeof Promise === 'undefined' ||
    typeof Set === 'undefined' ||
    typeof Object.assign === 'undefined' ||
    typeof Array.from === 'undefined' ||
    typeof Symbol === 'undefined'
    ) {
        // send bi in order to detect the browsers in which polyfills are not workingwindow.fedops.phaseStarted('missing_polyfills')
    }
