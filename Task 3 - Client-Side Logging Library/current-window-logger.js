define(['base-logger', 'logger-exceptions'], function(baseLogger, loggerExceptions) {
    function windowLog () {};
    windowLog.prototype = Object.create(baseLogger.log.prototype);
    windowLog.prototype.log = function (objectToLog) {
        var dataToLog = baseLogger.log.call(this, objectToLog);
        if (window.document && window.document.write) {
            window.document.write(dataToLog);
        } else {
            throw new loggerExceptions.UnavailableOutputMethodError('Writing to current window unavailable.');
        }
    };
    var windowLogger = new windowLog();

   return {
        log: function (objectToLog) {
                return windowLogger.log(objectToLog);
            }
        };
});