define(['base-logger', 'logger-exceptions'], function(baseLogger, loggerExceptions) {
    function alertLog () {};
    alertLog.prototype = Object.create(baseLogger.log.prototype);
    alertLog.prototype.log = function (objectToLog) {
        var dataToLog = baseLogger.log.call(this, objectToLog);
        if (window.alert) {
            window.alert(dataToLog);
        } else {
            throw new loggerExceptions.UnavailableOutputMethodError('Alert window unavailable.');
        }
    };
    var alertLogger = new alertLog;

   return {
        log: function (objectToLog) {
                return alertLogger.log(objectToLog);
            }
        };
});