define(['default-logger', 'logger-exceptions'], function(defaultLogger, loggerExceptions) {
    return {
        log: function (objectToLog) {
                var dataToLog = defaultLogger.log(objectToLog);
                if (window.document && window.document.write) {
                    window.document.write(dataToLog);
                } else {
                    throw new loggerExceptions.UnavailableOutputMethodError('Writing to current window unavailable.');
                }
            }
        } 
});