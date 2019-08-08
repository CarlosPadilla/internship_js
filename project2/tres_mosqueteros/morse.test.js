const morse = require("./morse.js");

const input = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
const output = 'HEY JUDE';
describe('Morse Tests', () => {

    test('expect HEY JUDE', () => {
        expect(morse(input).length).toBe(output);
    });

});

const input = '1100110011001111110000001100110000001100110011001111110000001100111111000000000000001111110011111100000011000000111111001100110011111100000011001100000011111100110011111100110000001111110011111100111111';
const output = 'VIVA MEXICO';
describe('Morse Tests', () => {

    test('expect VIVA MEXICO', () => {
        expect(morse(input).length).toBe(output);
    });

});

const input = '11001111110011001100000011000000110011001100000011001100110011000000110000000000000011001100110000001100110011001100000011001111110000001100110011001111110000001111110011111100111111';
const output = 'LESHE SHAVO';
describe('Morse Tests', () => {

    test('expect LESHE SHAVO', () => {
        expect(morse(input).length).toBe(output);
    });

});



