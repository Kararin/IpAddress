define(['Validators/validators'], (valid) => {

    describe('should be a valid hexadecimal number', function () {
        it('AB12 should be true', () => {
            expect(valid.isHexadecimal('AB12')).toBe(true);
        });

        it('01234567890AbCdEf should be true', () => {
            expect(valid.isHexadecimal('01234567890AbCdEf')).toBe(true);
        });

        it('q124dr should be false', () => {
            expect(valid.isHexadecimal('q124dr')).toBe(false);
        });

        it('"" should be false', () => {
            expect(valid.isHexadecimal('')).toBe(false);
        });

        it('1249 should be true', () => {
            expect(valid.isHexadecimal(1249)).toBe(true);
        });

        it('0 should be true', () => {
            expect(valid.isHexadecimal(0)).toBe(true);
        });
    });

});