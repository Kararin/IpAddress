define(['../Validators/validators'], function (valid) {
    var validation = (ipValue) => {
        if (!IpV4.isValid(ipValue)) {
            throw new Error('it is not valid IpV4');
        }
    };

    var IpV4 = function (ipString) {
        var ipAddressValue,
            ipAddressArray = [];

        validation(ipString);
        ipAddressValue = ipString;
        ipAddressArray = IpV4.parse(ipString);

        return {
            compare: (ipValue) => {
                validation(ipValue);
                var difference = 0,
                    ipValuesToCompare = IpV4.parse(ipValue),
                    index = 0;

                while (difference === 0 && index < ipAddressArray.length) {
                    difference = ipAddressArray[index] - ipValuesToCompare[index];

                    index++;
                }

                return difference < 0 ? -1 :
                    difference > 0 ? 1 : difference;
            }
        };
    };

    IpV4.isValid = (ipString) => {
        var values = valid.isString(ipString) ? ipString.split('.') : [],
            iPv4NumbersCount = 4;

        return values.length === 4 && values.every(item => item > 0 && item < 256);
    };

    IpV4.parse = (ipString) => {
        validation(ipString);

        return ipString.split('.').map(item => +item);
    };

    return IpV4;
});