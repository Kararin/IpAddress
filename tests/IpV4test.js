define(['IpAddress/IpV4'], function(IpV4) {
    describe('it should be a number', function () {

        it('', function () {
            console.log(IpV4);
            expect(IpV4.isValid('1.1.1.1')).toBe(true);
        });

    });
});