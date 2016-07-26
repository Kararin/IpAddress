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
});