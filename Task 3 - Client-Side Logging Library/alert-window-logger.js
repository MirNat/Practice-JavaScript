define(['default-logger', 'logger-exceptions'], function(defaultLogger, loggerExceptions) {
    return {
        log: function (objectToLog) {
                var dataToLog = defaultLogger.log(objectToLog);
                if (window.alert) {
                    window.alert(dataToLog);
                } else {
                    throw new loggerExceptions.UnavailableOutputMethodError('Alert window unavailable.');
                }
            }
        } 
});