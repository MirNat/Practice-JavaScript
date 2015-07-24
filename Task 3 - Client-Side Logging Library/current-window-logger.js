define(['base-logger', 'logger-exceptions/unavailable-output-method-error'], function(baseLogger, UnavailableOutputMethodError) {
    'use strict';

    function windowLog () {};
    windowLog.prototype = Object.create(baseLogger.log.prototype);
    windowLog.prototype.log = function (objectToLog) {
        var dataToLog = baseLogger.log.call(this, objectToLog);
        if (window.document && window.document.write) {
            window.document.write(dataToLog);
        } else {
            throw new UnavailableOutputMethodError('Writing to current window unavailable.');
        }
    };

    return new windowLog();
});