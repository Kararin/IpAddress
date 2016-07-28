define([
    'Validators/validators'
], function(valid) {
    var validation = (ipValue) => {
            if (!IpV6.isValid(ipValue)) {
                throw new Error('it is not valid IpV4');
            }
        },
        emptyValue = '',
        iPv6NumberCount = 8,
        delimiter = ':';

    var IpV6 = function () {
        var ipAddressValue,
            ipAddressArray = [];

        validation(ipString);
        ipAddressValue = ipString;
    };

    IpV6.isValid = (ipValue) => {
        var hexNumbers = valid.isEmpty(ipValue) ? [] : (ipValue + emptyValue).trim().split(delimiter),
            conditions = {
                length: hexNumbers.length > 0 && hexNumbers.length <= iPv6NumberCount,
                allHexadecimal: hexNumbers.filter(item => item !== emptyValue).every(item => {
                    return valid.isHexadecimal(item);
                }),
                beginOrEndWithzeros: (hexNumbers.indexOf(emptyValue) === 0 || hexNumbers.indexOf(emptyValue) === hexNumbers.length) &&
                    hexNumbers.filter(item => item === emptyValue).length >= 2,
                zerosInTheMiddle: (hexNumbers.indexOf(emptyValue) !== 0 || hexNumbers.indexOf(emptyValue) !== hexNumbers.length) &&
                    hexNumbers.filter(item => item === emptyValue).length < 2
            };

        return conditions.length && conditions.allHexadecimal &&
            (conditions.beginOrEndWithzeros || conditions.zerosInTheMiddle);
    };

    IpV6.normalize = (ipString) => {
        validation(ipString);

        var numbers = ipString.split(delimiter),
            firstEmptyIndex,
            notEmptyNumbersCount,
            index;

        if (numbers.length < iPv6NumberCount) {
            firstEmptyIndex = numbers.indexOf(emptyValue);

            notEmptyNumbersCount = numbers.filter(item => item !== emptyValue).length;

            while (numbers.length !== iPv6NumberCount) {
                numbers.splice(firstEmptyIndex, 0 , 0);
            }
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
        }).join(delimiter);
    };

    IpV6.parse = (ipString) => {
        var normalizeString;

        validation(ipString);
        normalizeString = IpV6.normalize(ipString);

        return normalizeString.split(delimiter);
    };

    return IpV6;

});