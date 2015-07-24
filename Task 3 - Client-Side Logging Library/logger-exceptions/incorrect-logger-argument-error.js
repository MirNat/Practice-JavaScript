define(function () {
    'use strict';

    function IncorrectLoggerArgument(argumentName) {
        Error.call(this, argumentName);
        this.name = 'IncorrectLoggerArgument';
        this.message = ['Argument "', argumentName, '" is incorrect.'].join(' ');
        this.stack = (new Error()).stack;
    }
    IncorrectLoggerArgument.prototype = Object.create(Error.prototype);
    IncorrectLoggerArgument.prototype.constructor = IncorrectLoggerArgument;

    return IncorrectLoggerArgument;
});