define(['IpAddress/IpV4'], function(IpV4) {
    describe('IpV4 IpAddress validation', function () {

        it('should be true', function () {
            expect(IpV4.isValid('1.1.1.1')).toBe(true);
        });

        it('0.1.1.1 should be false', function () {
            expect(IpV4.isValid('0.1.1.1')).toBe(false);
        });

        it('1.1 should be false', function () {
            expect(IpV4.isValid('1.1')).toBe(false);
        });

        it('456.4.3.1 should be false', function () {
            expect(IpV4.isValid('456.4.3.1')).toBe(false);
        });

        it('1.1 should be false', function () {
            expect(IpV4.isValid(1.1)).toBe(false);
        });
    });

    describe('Ipv4 parse to an array', function () {

        it('split the value to array', function () {
            expect(IpV4.parse('1.1.1.1')).toEqual([1,1,1,1]);
        });

    });

    describe('ipV4 Comparison', function () {
        var ipv4;

        it('1.1.1.1 should be smaller than 2.1.2.3', function () {
            ipv4 = new IpV4('1.1.1.1');

            expect(ipv4.compare('2.1.2.3')).toBe(-1);
        });

        it('123.255.233.122 should be equal 123.255.233.122', function () {
            ipv4 = new IpV4('123.255.233.122');

            expect(ipv4.compare('123.255.233.122')).toBe(0);
        });

        it('123.255.233.122 should be greater than 122.12.31.3', function () {
            ipv4 = new IpV4('123.255.233.122');

            expect(ipv4.compare('122.12.31.3')).toBe(1);
        });
    });


    describe('should convert Ipv4 to IpV6', function () {

        it('should convert Ipv4 to IpV6', function () {
            var result = '::123.255.233.122';

            ipv4 = new IpV4('123.255.233.122');

            expect(ipv4.toIpV6()).toBe(result);
        });

    });


});