const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    const translator = new Translator();

    test('Translation with text and locale fields: POST request to /api/translate', function(done) {
        chai
            .request(server)
            .post('/api/translate')
            .type('form')
            .send({
                text: 'Mangoes are my favorite fruit.',
                locale: 'american-to-british'
            })
            .end(function(err, res) {
                assert.isNull(err, 'error is null');
                assert.equal(res.status, 200, 'res.status is 200');
                assert.isString(res.body.translation, 'translation is a string');
                assert.include(res.body.translation, 'favourite', 'string includes the translation');
                assert.notInclude(res.body.translation, 'favorite', 'string does not include original term');
                done();
            });
    });

    test('Translation with text and invalid locale field: POST request to /api/translate', function(done) {
        chai
            .request(server)
            .post('/api/translate')
            .type('form')
            .send({
                text: 'Mangoes are my favorite fruit.',
                locale: 'american-to-spanish'
            })
            .end(function(err, res) {
                assert.isNull(err, 'error is null');
                assert.equal(res.status, 200, 'res.status is 200');
                assert.propertyVal(res.body, 'error', 'Invalid value for locale field', 'response is error: Invalid value for locale field');
                done();
            });
    });

    test('Translation with missing text field: POST request to /api/translate', function(done) {
        chai
            .request(server)
            .post('/api/translate')
            .type('form')
            .send({
                locale: 'american-to-british'
            })
            .end(function(err, res) {
                assert.isNull(err, 'error is null');
                assert.equal(res.status, 200, 'res.status is 200');
                assert.propertyVal(res.body, 'error', 'Required field(s) missing', 'response is error: Required field(s) missing');
                done();
            });
    });

    test('Translation with missing locale field: POST request to /api/translate', function(done) {
        chai
            .request(server)
            .post('/api/translate')
            .type('form')
            .send({
                text: 'Mangoes are my favorite fruit.',
            })
            .end(function(err, res) {
                assert.isNull(err, 'error is null');
                assert.equal(res.status, 200, 'res.status is 200');
                assert.propertyVal(res.body, 'error', 'Required field(s) missing', 'response is error: Required field(s) missing');
                done();
            });
    });

    test('Translation with empty text: POST request to /api/translate', function(done) {
        chai
            .request(server)
            .post('/api/translate')
            .type('form')
            .send({
                text: '',
                locale: 'american-to-british'
            })
            .end(function(err, res) {
                assert.isNull(err, 'error is null');
                assert.equal(res.status, 200, 'res.status is 200');
                assert.propertyVal(res.body, 'error', 'No text to translate', 'response is error: No text to translate');
                done();
            });
    });

    test('Translation with text that needs no translation: POST request to /api/translate', function(done) {
        chai
            .request(server)
            .post('/api/translate')
            .type('form')
            .send({
                text: 'Mangoes are my favorite fruit.',
                locale: 'british-to-american'
            })
            .end(function(err, res) {
                assert.isNull(err, 'error is null');
                assert.equal(res.status, 200, 'res.status is 200');
                assert.equal(res.body.translation, 'Everything looks good to me!', 'response is: Everything looks good to me!');
                done();
            });
    });

});
