define(['logger-fabric'], function(loggerFabric) {
    'use strict';

    try {
        var loggerConsole = loggerFabric.getLogger("console");
        var loggerWindow = loggerFabric.getLogger("window");
        var loggerAlert = loggerFabric.getLogger("alert");
        var logger = loggerAlert;//default logger
        var oldOnErrorHandler = window.onerror;
        window.onerror = function () { 
            oldOnErrorHandler();
            logger.log();
        };

        var MyError = function (message) {
          this.name = 'MyError';
          this.message = message || 'Default Message';
        }
        MyError.prototype = Object.create(Error.prototype);
        MyError.prototype.constructor = MyError;
        try {
            throw new TypeError('Whoops!', 'someFile.js', 10);
        } catch (e) {
            loggerAlert.log(e);
        }
        try {
          null.f();
        } catch (e) {
            loggerWindow.log(e);
        }
        try {
          throw new MyError();
        } catch (e) {
            logger.log(e);
        }
        try {
            throw new Error('Whoops!');
        } catch (e) {
            loggerConsole.log(e);
        }
    }
    catch (e) {
        if (window.alert) { 
            window.alert(JSON.stringify(e));
        }
    }
});
