define(['base-logger', 'logger-exceptions'], function(baseLogger, loggerExceptions) {
    return {
        log: function (objectToLog) {
                var dataToLog = baseLogger.log.call(this, objectToLog);
                if (window.console && window.console.log) {
                    window.console.log(dataToLog);
                } else {
                    throw new loggerExceptions.UnavailableOutputMethodError('Window console unavailable.');
                }
            }
        }; 
});