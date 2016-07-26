define(['IpAddress/IpAddress'], function(IpAddress) {
    'use strict';


    describe('IpAddress class', function () {

        it('should create instance', function () {
               var test = new IpAddress('1.1.1.1');

               expect(test.getValue()).toBe('1.1.1.1');
        });

        it('should validData', function () {

               expect(IpAddress.isValid('1.1.1.1')).toBe(true);
        });

    });

});