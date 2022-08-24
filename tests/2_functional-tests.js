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

});
