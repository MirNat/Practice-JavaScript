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

    return UnavailableOutputMethodError;
});