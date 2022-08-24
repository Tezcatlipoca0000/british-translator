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

    test('Translate I ate yogurt for breakfast. to British English', function() {
        let text = 'I ate yogurt for breakfast.',
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'yoghurt', 'string includes the translation');
        assert.notInclude(translated, 'yogurt', 'string does not include original term');
    });

    test("Translate We had a party at my friend's condo. to British English", function() {
        let text = "We had a party at my friend's condo.",
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'flat', 'string includes the translation');
        assert.notInclude(translated, 'condo', 'string does not include original term');
    });

    test('Translate Can you toss this in the trashcan for me? to British English', function() {
        let text = "Can you toss this in the trashcan for me?",
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'bin', 'string includes the translation');
        assert.notInclude(translated, 'trashcan', 'string does not include original term');
    });

    test('Translate The parking lot was full. to British English', function() {
        let text = "The parking lot was full.",
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'car park', 'string includes the translation');
        assert.notInclude(translated, 'parking lot', 'string does not include original term');
    });

    test('Translate Like a high tech Rube Goldberg machine. to British English', function() {
        let text = "Like a high tech Rube Goldberg machine.",
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'Heath Robinson device', 'string includes the translation');
        assert.notInclude(translated, 'Rube Goldberg machine', 'string does not include original term');
    });

    test('Translate To play hooky means to skip class or work. to British English', function() {
        let text = "To play hooky means to skip class or work.",
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'bunk off', 'string includes the translation');
        assert.notInclude(translated, 'play hooky', 'string does not include original term');
    });

    test('Translate No Mr. Bond, I expect you to die. to British English', function() {
        let text = "No Mr. Bond, I expect you to die.",
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'Mr', 'string includes the translation');
        assert.notInclude(translated, 'Mr.', 'string does not include original term');
    });

    test('Translate Dr. Grosh will see you now. to British English', function() {
        let text = "Dr. Grosh will see you now.",
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'Dr', 'string includes the translation');
        assert.notInclude(translated, 'Dr.', 'string does not include original term');
    });

    test('Translate Lunch is at 12:15 today. to British English', function() {
        let text = "Lunch is at 12:15 today.",
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, '12.15', 'string includes the translation');
        assert.notInclude(translated, '12:15', 'string does not include original term');
    });

    test('Translate We watched the footie match for a while. to American English', function() {
        let text = "We watched the footie match for a while.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'soccer', 'string includes the translation');
        assert.notInclude(translated, 'footie', 'string does not include original term');
    });

    test('Translate Paracetamol takes up to an hour to work. to American English', function() {
        let text = "Paracetamol takes up to an hour to work.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'Tylenol', 'string includes the translation');
        assert.notInclude(translated, 'Paracetamol', 'string does not include original term');
    });

    test('Translate First, caramelise the onions. to American English', function() {
        let text = "First, caramelise the onions.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'caramelize', 'string includes the translation');
        assert.notInclude(translated, 'caramelise', 'string does not include original term');
    });

    test('Translate I spent the bank holiday at the funfair. to American English', function() {
        let text = "I spent the bank holiday at the funfair.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'public holiday', 'string includes the translation');
        assert.notInclude(translated, 'bank holiday', 'string does not include original term');
        assert.include(translated, 'carnival', 'string includes the translation');
        assert.notInclude(translated, 'funfair', 'string does not include original term');
    });

    test('Translate I had a bicky then went to the chippy. to American English', function() {
        let text = "I had a bicky then went to the chippy.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'cookie', 'string includes the translation');
        assert.notInclude(translated, 'bicky', 'string does not include original term');
        assert.include(translated, 'fish-and-chip shop', 'string includes the translation');
        assert.notInclude(translated, 'chippy', 'string does not include original term');
    });

    test("Translate I've just got bits and bobs in my bum bag. to American English", function() {
        let text = "I've just got bits and bobs in my bum bag.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'odds and ends', 'string includes the translation');
        assert.notInclude(translated, 'bits and bobs', 'string does not include original term');
        assert.include(translated, 'fanny pack', 'string includes the translation');
        assert.notInclude(translated, 'bum bag', 'string does not include original term');
    });

    test('Translate The car boot sale at Boxted Airfield was called off. to American English', function() {
        let text = "The car boot sale at Boxted Airfield was called off.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'swap meet', 'string includes the translation');
        assert.notInclude(translated, 'car boot sale', 'string does not include original term');
    });

    test('Translate Have you met Mrs Kalyani? to American English', function() {
        let text = "Have you met Mrs Kalyani?",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'Mrs.', 'string includes the translation');
    });

    test("Translate Prof Joyner of King's College, London. to American English", function() {
        let text = "Prof Joyner of King's College, London.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, 'Prof.', 'string includes the translation');
    });

    test('Translate Tea time is usually around 4 or 4.30. to American English', function() {
        let text = "Tea time is usually around 4 or 4.30.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, '4:30', 'string includes the translation');
        assert.notInclude(translated, '4.30', 'string does not include original term');
    });

    test('Highlight translation in Mangoes are my favorite fruit.', function() {
        let text = "Mangoes are my favorite fruit.",
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, '<span class="highlight">favourite</span>', 'string includes the translation');
    });

    test('Highlight translation in I ate yogurt for breakfast.', function() {
        let text = 'I ate yogurt for breakfast.',
            locale = 'american-to-british',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, '<span class="highlight">yoghurt</span>', 'string includes the translation');
    });

    test('Highlight translation in We watched the footie match for a while.', function() {
        let text = "We watched the footie match for a while.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, '<span class="highlight">soccer</span>', 'string includes the translation');
    });

    test('Highlight translation in Paracetamol takes up to an hour to work.', function() {
        let text = "Paracetamol takes up to an hour to work.",
            locale = 'british-to-american',
            translated = translator.translate(text, locale);
        
        assert.isString(translated, 'translated is a string');
        assert.include(translated, '<span class="highlight">Tylenol</span>', 'string includes the translation');
    });

});
