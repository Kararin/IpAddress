define(['../Validators/validators'], function (valid) {
    return {
        isValid: function (ipString) {
            var values = valid.isString(ipString) ? ipString.split('.') : [],
                iPv4NumbersCount = 4;

            return values.length === 4 && values.every(item => item > 0 && item < 256);
        }
    };
});