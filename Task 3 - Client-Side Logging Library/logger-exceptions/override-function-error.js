define(function () {
    'use strict';

    function OverrideFunctionError(functionName) {
        Error.call(this, functionName);
        this.name = 'OverrideFunctionError';
        this.functionName = functionName;
        this.message = ['Override function', this.functionName, 'don\'t satisfy the contract.'].join(' ');
        this.stack = (new Error()).stack;
    }
    OverrideFunctionError.prototype = Object.create(Error.prototype);
    OverrideFunctionError.prototype.constructor = OverrideFunctionError;

    
    return OverrideFunctionError;
});