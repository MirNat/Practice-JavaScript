define(['logger-exceptions'], function (loggerExceptions) {
    'use scrict';

    var getUserFriendlyErrorString = function (error) {
        var errorStringArray = [];
        if (error) {
            if (typeof error.name !== 'undefined') {
               errorStringArray.push('Name: ' + error.name);
            }
            if (typeof error.message !== 'undefined') {
                errorStringArray.push('Message: ' + error.message);
            }
            if (typeof error.fileName !== 'undefined') {
                errorStringArray.push('File Name: ' + error.fileName);
            }
            if (typeof error.lineNumber !== 'undefined') {
                errorStringArray.push('Line Number: ' + error.lineNumber);
            }
            if (typeof error.columnNumber !== 'undefined') {
                errorStringArray.push('Column Number: ' + error.columnNumber);
            }
            if (typeof error.description !== 'undefined') {
                errorStringArray.push('Description: ' + error.description);
            }
            if (typeof error.constructor !== 'undefined') {
                errorStringArray.push('Constructor: ' + error.constructor);
            }
        }
        var str = errorStringArray.join('; ');
        return str;
    }

    var getDateTime = function () {
        var currentdate = new Date(); 
        return  currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds() + " ";
    };

    var log = function (objectToLog) {
        try {
            var datetime = getDateTime();
            if (typeof objectToLog === 'string') {
                return datetime.concat(objectToLog);         
            } else {
                if(objectToLog instanceof Error) {
                    return datetime.concat(getUserFriendlyErrorString(objectToLog));
                }
                return datetime.concat('error happened on object: ' + JSON.stringify(objectToLog));
            }  
        } catch (e) {
            throw new loggerExceptions.IncorrectLoggerArgument('objectToLog');
        }
    };

    return {log: log};
});