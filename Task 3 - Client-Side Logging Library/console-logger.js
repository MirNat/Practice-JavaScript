define(['default-logger', 'logger-exceptions'], function(defaultLogger, loggerExceptions) {
    return {
        log: function (objectToLog) {
                var dataToLog = defaultLogger.log(objectToLog);
                if (window.console && window.console.log) {
                    window.console.log(dataToLog);
                } else {
                    throw new loggerExceptions.UnavailableOutputMethodError('Window console unavailable.');
                }
            }
        } 
});