define(['logger-exceptions/incorrect-logger-argument-error'], function (IncorrectLoggerArgument) {
    'use scrict';

    var getUserFriendlyErrorString = function (error) {
        var errorStringArray = [];
        if (error) {
            if (error.name) {
               errorStringArray.push('Name: ' + error.name);
            }
            if (error.message) {
                errorStringArray.push('Message: ' + error.message);
            }
            if (error.fileName) {
                errorStringArray.push('File Name: ' + error.fileName);
            }
            if (error.lineNumber) {
                errorStringArray.push('Line Number: ' + error.lineNumber);
            }
            if (error.columnNumber) {
                errorStringArray.push('Column Number: ' + error.columnNumber);
            }
            if (error.description) {
                errorStringArray.push('Description: ' + error.description);
            }
            if (error.constructor) {
                errorStringArray.push('Constructor: ' + error.constructor);
            }
        }

        return errorStringArray.join('; ');
    }

    var getCurrentDateTime = function () {
        var currentDate = new Date(); 
        return  currentDate.getDate() + "/"
            + (currentDate.getMonth()+1)  + "/" 
            + currentDate.getFullYear() + " "  
            + currentDate.getHours() + ":"  
            + currentDate.getMinutes() + ":" 
            + currentDate.getSeconds() + " ";
    };

    var log = function (objectToLog) {
        try {
            var currentDateTime = getCurrentDateTime();
            if (typeof objectToLog === 'string') {
                return currentDateTime.concat(objectToLog);         
            } else {
                if(objectToLog instanceof Error) {
                    return currentDateTime.concat(getUserFriendlyErrorString(objectToLog));
                }
                return currentDateTime.concat('error happened on object: ' + JSON.stringify(objectToLog));
            }  
        } catch (e) {
            throw new IncorrectLoggerArgument('objectToLog');
        }
    };

    return {log: log};
});