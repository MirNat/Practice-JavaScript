define(['alert-window-logger','console-logger','current-window-logger'], function (alertLogger, consoleLogger, windowLogger) {
    'use strict';

    return {
        getLogger: function (loggerType) {
            switch(loggerType) {
                case 'alert': return alertLogger;
                case 'console':	return consoleLogger;
            	case 'window': return windowLogger;
	            default: throw new IncorrectLoggerArgument('loggerType');
            }
        } 
    };
});


