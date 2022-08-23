const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    const translator = new Translator();

    test('Translate Mangoes are my favorite fruit. to British English', function() {
        let text = 'Mangoes are my favorite fruit.',
            locale = 'american-to-british',
            translated = translator.translate(text, locale);

        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'favourite', 'string includes the translation');
        assert.notInclude(translated, 'favorite', 'string does not include original term');
    });

});
