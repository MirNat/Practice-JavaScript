
ClientSideLoggingLibrary = (function () {
    'use scrict';

    var clientSideLoggingLibrary = {};

    var exceptionToObjectAndString = function (exception) {
        var resultObject = {};
        var resultString = '';
        if (exception) {
            if (typeof exception.name !== 'undefined') {
                resultObject.name = exception.name;
                resultString = [resultString, 'Name: ', exception.name, '; '].join(' ');
            }
            if (typeof exception.message !== 'undefined') {
                resultObject.message = exception.message;
                resultString = [resultString, 'Message: ', exception.message, '; '].join(' ');
            }/*
            if (typeof exception.stack !== 'undefined') {
                result.stack = exception.stack;
                [resultString,'Stack: ', exception.stack, '; '].join();
            }*/
            if (typeof exception.fileName !== 'undefined') {
                resultObject.fileName = exception.fileName;
                resultString = [resultString,'File Name: ', exception.fileName, '; '].join(' ');
            }
            if (typeof exception.lineNumber !== 'undefined') {
                resultObject.lineNumber = exception.lineNumber;
                resultString = [resultString,'Line Number: ', exception.lineNumber, '; '].join(' ');
            }
            if (typeof exception.columnNumber !== 'undefined') {
                resultObject.columnNumber = exception.columnNumber;
                resultString = [resultString,'Column Number: ', exception.columnNumber, '; '].join(' ');
            }
            if (typeof exception.description !== 'undefined') {
                resultObject.description = exception.description;
                resultString = [resultString,'Description: ', exception.description, '; '].join(' ');
            }
            if (typeof exception.constructor !== 'undefined') {
                resultObject.constructor = exception.constructor;
                resultString = [resultString,'Constructor: ', exception.constructor, '; '].join(' ');
            }
        }

        return [resultObject, resultString];
    }

    clientSideLoggingLibrary.log = function (obj) {
        if (typeof obj === 'string') {
            return obj;         
        } else {
            if(obj instanceof Error) {
                return exceptionToObjectAndString(obj)[1];
                /*['Name: ',obj.name, '; Message: ', obj.message, '; File Name: ', obj.fileName, '; Line Number: ', obj.lineNumber,
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

    clientSideLoggingLibrary.logToAlertWindow  = function (obj) {
        var messageToLog = clientSideLoggingLibrary.log.call(this, obj);
        if (window.alert) {
            window.alert(messageToLog);
        }
    };

    clientSideLoggingLibrary.logToCurrentWindow  = function (obj) {
        var messageToLog = clientSideLoggingLibrary.log.call(this, obj);
        if (window.document && window.document.write) {
            window.document.write(messageToLog);
        }
    };

    return clientSideLoggingLibrary;
})();