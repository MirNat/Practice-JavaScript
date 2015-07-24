define(['base-logger', 'logger-exceptions/unavailable-output-method-error'], function(baseLogger, UnavailableOutputMethodError) {
    'use strict';
    
    function consoleLog () {};
    consoleLog.prototype = Object.create(baseLogger.log.prototype);
    consoleLog.prototype.log = function (objectToLog) {
        var dataToLog = baseLogger.log.call(this, objectToLog);
        if (window.console && window.console.log) {
            window.console.log(dataToLog);
        } else {
            throw new UnavailableOutputMethodError('Window console unavailable.');
        }
    };

    return new consoleLog();
});