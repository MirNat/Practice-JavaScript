define(['alert-window-logger','console-logger','current-window-logger'], function (alertLogger, consoleLogger, windowLogger) {
    'use strict';

    return {
        getLogger: function (loggerType) {
            if (loggerType === 'alert') {
            	return alertLogger;
            } else {
            	if (loggerType === 'console') {
            		return consoleLogger;
            	} else {
            		if (loggerType === 'window') {
	            		return windowLogger;
	            	}
	            	throw new IncorrectLoggerArgument('loggerType');
            	}
            }
        } 
    }
});


