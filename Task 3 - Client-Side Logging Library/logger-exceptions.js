define(function () {
    'use strict';

    function UnavailableOutputMethodError() {
        Error.call(this);
        this.name = 'UnavailableOutputMethodError';
        this.message = 'This way of log output not available.';
        this.stack = (new Error()).stack;
    }
    UnavailableOutputMethodError.prototype = Object.create(Error.prototype);
    UnavailableOutputMethodError.prototype.constructor = UnavailableOutputMethodError;

    function OverrideFunctionError(functionName) {
        Error.call(this, functionName);
        this.name = 'OverrideFunctionError';
        this.functionName = functionName;
        this.message = ['Override function', this.functionName, 'don\'t satisfy the contract.'].join(' ').toString();
        this.stack = (new Error()).stack;
    }
    OverrideFunctionError.prototype = Object.create(Error.prototype);
    OverrideFunctionError.prototype.constructor = OverrideFunctionError;

    function IncorrectLoggerArgument(argumentName) {
        Error.call(this, argumentName);
        this.name = 'IncorrectLoggerArgument';
        this.message = ['Argument "', argumentName, '" is incorrect.'].join(' ').toString();
        this.stack = (new Error()).stack;
    }
    IncorrectLoggerArgument.prototype = Object.create(Error.prototype);
    IncorrectLoggerArgument.prototype.constructor = IncorrectLoggerArgument;

    return {
        UnavailableOutputMethodError: UnavailableOutputMethodError,
        OverrideFunctionError: OverrideFunctionError,
        IncorrectLoggerArgument: IncorrectLoggerArgument
    };
});