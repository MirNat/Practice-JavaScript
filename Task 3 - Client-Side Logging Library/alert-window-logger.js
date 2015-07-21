define(['base-logger', 'logger-exceptions'], function(baseLogger, loggerExceptions) {
    return {
        log: function (objectToLog) {
                var dataToLog = baseLogger.log.call(this, objectToLog);
                if (window.alert) {
                    window.alert(dataToLog);
                } else {
                    throw new loggerExceptions.UnavailableOutputMethodError('Alert window unavailable.');
                }
            }
        }; 
});