define(['logger-fabric','logger-exceptions'], function(loggerFabric, loggerExceptions) {
    try {
        var loggerConsole = loggerFabric.getLogger("console");
        var loggerWindow = loggerFabric.getLogger("window");
        var loggerAlert = loggerFabric.getLogger("alert");
        var logger = loggerAlert;//default logger
        window.onerror = logger.log;

        // Create a new object, that prototypally inherits from the Error constructor.
        function MyError(message) {
          this.name = 'MyError';
          this.message = message || 'Default Message';
        }
        MyError.prototype = Object.create(Error.prototype);
        MyError.prototype.constructor = MyError;

        document.write('Client-Side Logging Library<br/>');
        document.write('<br/>Ability to log information, send log information to the console,  send log information to an alert window, send log information to the current window, <br/>'+ 
            'send log information to abstract Web API endpoint, select from built-in logging methods on input: <br/> throwing a generic error, catching a TypeError, creating of TypeError, creating of MyError: <br/>');
        try {
            throw new Error('Whoops!');
        } catch (e) {
            loggerConsole.log(e);
        }
        document.write('<br/>');
        try {
            throw new TypeError('Whoops!', 'someFile.js', 10);
        } catch (e) {
            //loggerAlert.log(e);
        }

        try {
          null.f();
        } catch (e) {
            loggerWindow.log(e);
        }
        document.write('<br/>');

        try {
          throw new MyError();
        } catch (e) {
            logger.log(e);
        }

        document.write('<br/>Ability to extend the library with custom logging methods on input TypeError: <br/>');
        document.write('<br/>Ability to log information using onerror attribute on input null, "String to log", Error: <br/>');
    }
    catch (e) {
        if (window.alert) { 
            window.alert(JSON.stringify(e));
        }
    }
});
