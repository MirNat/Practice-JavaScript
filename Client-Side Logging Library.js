var ClientSideLoggingLibrary = (function () {
    'use scrict';

    var clientSideLoggingLibrary = {};

    var exceptionToObject = function (exception) {
    	var result = {};
        if (!exception) {
            return result;
        }
        if (typeof exception.name !== 'undefined') {
            result.name = exception.name;
        }
        if (typeof exception.message !== 'undefined') {
            result.message = exception.message;
        }
        if (typeof exception.stack !== 'undefined') {
            result.stack = exception.stack;
        }
        if (typeof exception.fileName !== 'undefined') {
            result.fileName = exception.fileName;
        }
        if (typeof exception.lineNumber !== 'undefined') {
            result.lineNumber = exception.lineNumber;
        }
        if (typeof exception.columnNumber !== 'undefined') {
            result.columnNumber = exception.columnNumber;
        }
        if (typeof exception.description !== 'undefined') {
            result.description = exception.description;
        }

        return result;
    }

    clientSideLoggingLibrary.log = function (obj) {
    	if (typeof obj === 'string') {
    		return obj;  		
    	} else {
    		if(obj instanceof Error) {
    			return JSON.stringify(exceptionToObject(obj));/*['Name: ',obj.name, '; Message: ', obj.message, '; File Name: ', obj.fileName, '; Line Number: ', obj.lineNumber,
    			'; Column Number: ', obj.columnNumber, '; Constructor: ', obj.constructor, '; Stack: ', obj.stack].join();*/
    		}

    		return 'Exception happened on object: '.concat(JSON.stringify(obj));
    	}  
    };

    clientSideLoggingLibrary.logToConsole = function (obj) {
    	var messageToLog = clientSideLoggingLibrary.log.call(this, obj);
		if (window.console && window.console.log) {
		 	window.console.log(messageToLog);
		}
    };

	clientSideLoggingLibrary.logToAlertWindow (obj) {
		var messageToLog = clientSideLoggingLibrary.log.call(this, obj);
		if (window.alert) {
		 	window.alert(messageToLog);
		}
    };

    clientSideLoggingLibrary.logToCurrentWindow (obj) {
		var messageToLog = clientSideLoggingLibrary.log.call(this, obj);
		if (window.document && window.document.write) {
		 	window.document.write(messageToLog);
		}
    };
}):