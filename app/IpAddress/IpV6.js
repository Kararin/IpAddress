define([
    'Validators/validators'
], function(valid) {
    return {
        isValid: (ipValue) => {
            var hexNumbers = valid.isEmpty(ipValue) ? [] : (ipValue + '').trim().split(':'),
                iPv6NumberCount = 8,
                conditions = {
                    length: hexNumbers.length > 0 && hexNumbers.length <= iPv6NumberCount,
                    allHexadecimal: hexNumbers.filter(item => item !== '').every(item => {
                        return valid.isHexadecimal(item);
                    }),
                    beginOrEndWithzeros: (hexNumbers.indexOf('') === 0 || hexNumbers.indexOf('') === hexNumbers.length) &&
                        hexNumbers.filter(item => item === '').length >= 2,
                    zerosInTheMiddle: (hexNumbers.indexOf('') !== 0 || hexNumbers.indexOf('') !== hexNumbers.length) &&
                        hexNumbers.filter(item => item === '').length < 2
                };

            return conditions.length && conditions.allHexadecimal &&
                (conditions.beginOrEndWithzeros || conditions.zerosInTheMiddle);
        }
    };

});