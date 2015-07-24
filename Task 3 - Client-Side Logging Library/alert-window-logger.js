define(['base-logger', 'logger-exceptions/unavailable-output-method-error'], function(baseLogger, UnavailableOutputMethodError) {
    'use strict';
      
    function alertLog () {};
    alertLog.prototype = Object.create(baseLogger.log.prototype);
    alertLog.prototype.log = function (objectToLog) {
        var dataToLog = baseLogger.log.call(this, objectToLog);
        if (window.alert) {
            window.alert(dataToLog);
        } else {
            throw new UnavailableOutputMethodError('Alert window unavailable.');
        }
    };

    return new alertLog();
});