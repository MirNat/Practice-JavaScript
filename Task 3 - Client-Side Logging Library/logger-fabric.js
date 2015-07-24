define(['alert-window-logger', 'console-logger', 'current-window-logger', 'logger-exceptions/incorrect-logger-argument-error'], function (alertLogger, consoleLogger, windowLogger, IncorrectLoggerArgument) {
    'use strict';

    return {
        getLogger: function (loggerType) {
            switch(loggerType) {
                case 'alert': 
                    return alertLogger;
                case 'console':	
                    return consoleLogger;
            	case 'window': 
                    return windowLogger;
	            default: 
                    throw new IncorrectLoggerArgument('loggerType');
            }
        } 
    };
});


