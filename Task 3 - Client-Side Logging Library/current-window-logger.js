define(['base-logger', 'logger-exceptions'], function(baseLogger, loggerExceptions) {
    return {
        log: function (objectToLog) {
                var dataToLog = baseLogger.log.call(this, objectToLog);
                if (window.document && window.document.write) {
                    window.document.write(dataToLog);
                } else {
                    throw new loggerExceptions.UnavailableOutputMethodError('Writing to current window unavailable.');
                }
            }
        }; 
});