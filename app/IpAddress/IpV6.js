define([
    'Validators/validators'
], function(valid) {
    var validation = (ipValue) => {
            if (!IpV6.isValid(ipValue)) {
                throw new Error('it is not valid IpV4');
            }
        },
        emptyValue = '',
        iPv6NumberCount = 8;

    var IpV6 = function () {
        var ipAddressValue,
            ipAddressArray = [];

        validation(ipString);
        ipAddressValue = ipString;
    };

    IpV6.isValid = (ipValue) => {
        var hexNumbers = valid.isEmpty(ipValue) ? [] : (ipValue + '').trim().split(':'),
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
    };

    IpV6.normalize = (ipString) => {
        validation(ipString);

        var numbers = ipString.split(':'),
            firstEmptyIndex,
            notEmptyNumbersCount;

        if (numbers.length !== iPv6NumberCount) {
            firstEmptyIndex = numbers.indexOf(emptyValue);

            notEmptyNumbersCount = numbers.filter(item => item !== emptyValue).length;

            numbers.splice(firstEmptyIndex, 0 , ...(new Array(iPv6NumberCount - notEmptyNumbersCount - 2).fill(0)));
        }


        return numbers.map(item => {
            var stringItem = String(item),
                stringItemLength = stringItem.length,
                octetLength = 4,
                i = 0;

            if (stringItemLength < octetLength) {
                for (; i < octetLength - stringItemLength; i++) {
                    stringItem = '0' + stringItem;
                }
            }

            return stringItem;
        }).join(':');
    };

    return IpV6;

});