define(['IpAddress/IpV4', 'IpAddress/IpV6'], function(ipV4, ipV6) {
    'use strict';
    var IpAddress = function (ipAddress) {
        var ipAddressValue;

        if (IpAddress.isValid(ipAddress)) {
            ipAddressValue = ipAddress;
        } else {
            throw new Error();
        }

        return {
            getValue: () => ipAddressValue
        };
    };

    IpAddress.isValid = ipAddress => ipV4.isValid(ipAddress) || ipV6.isValid(ipAddress);

    return IpAddress;
});