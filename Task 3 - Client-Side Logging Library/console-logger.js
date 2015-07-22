define(['base-logger', 'logger-exceptions'], function(baseLogger, loggerExceptions) {
    function consoleLog () {};
    consoleLog.prototype = Object.create(baseLogger.log.prototype);
    consoleLog.prototype.log = function (objectToLog) {
        var dataToLog = baseLogger.log.call(this, objectToLog);
        if (window.console && window.console.log) {
            window.console.log(dataToLog);
        } else {
            throw new loggerExceptions.UnavailableOutputMethodError('Window console unavailable.');
        }
    };
    var consoleLogger = new consoleLog();

   return {
        log: function (objectToLog) {
                return consoleLogger.log(objectToLog);
            }
        };
});