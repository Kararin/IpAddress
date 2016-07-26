define([], function () {
    var isString = function (string) {
        return typeof string === 'string';
    };

    return {
        isValid: function (ipString) {
        var values = isString(ipString) ? ipString.split('.') : [];

        return values.every(item => item > 0 && item < 256);
    }
    };
});