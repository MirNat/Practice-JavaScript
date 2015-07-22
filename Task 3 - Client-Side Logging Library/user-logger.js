define(['base-logger', 'logger-exceptions'], function(baseLogger, loggerExceptions) {
    function userLog () {};
    userLog.prototype = Object.create(baseLogger.log.prototype);
    userLog.prototype.log = function (objectToLog) {
        var dataToLog = baseLogger.log.call(this, objectToLog);
        if (window.document && window.document.write) {
            window.document.write('User way to log: ' + dataToLog);
        } else {
            throw new loggerExceptions.UnavailableOutputMethodError('Writing to current window unavailable.');
        }
    };
    var userLogger = new userLog();

   return {
        log: function (objectToLog) {
                return userLogger.log(objectToLog);
            }
        };
});