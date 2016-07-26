define([], () => {
    return {
        isString : (string) => typeof string === 'string',
        isHexadecimal: (value) => {
            var symbols = (value + '').trim().split(''),
                validValues = [
                    '1', '2', '3',
                    '4', '5', '6',
                    '7', '8', '9',
                    '0', 'A', 'B',
                    'C', 'D', 'E', 'F'];

            return (symbols.length > 0) &&
                symbols.every(item => validValues.includes(item.toUpperCase()));
        },
        isEmpty: (value) => {
            return value === '';
        }
    };
});