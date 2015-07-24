define(['base-logger', 'logger-exceptions/unavailable-output-method-error'], function(baseLogger, UnavailableOutputMethodError) {
    'use strict';

    function userLog () {};
    userLog.prototype = Object.create(baseLogger.log.prototype);
    userLog.prototype.log = function (objectToLog) {
        var dataToLog = baseLogger.log.call(this, objectToLog);
        if (window.document && window.document.write) {
            window.document.write('User way to log: ' + dataToLog);
        } else {
            throw new UnavailableOutputMethodError('Writing to current window unavailable.');
        }
    };

    return new userLog();
});