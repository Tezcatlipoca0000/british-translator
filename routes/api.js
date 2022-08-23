'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      //console.log('testing post /translate req.body ', req.body);
      let text = req.body.text,
          locale = req.body.locale,
          translated = translator.translate(text, locale);

    //console.log('testing post /translate variables ', text, locale, translated);
    if (locale && locale !== 'american-to-british' && locale !== 'british-to-american') {
      res. json({error: 'Invalid value for locale field'});
    } else if (text === '') {
      res.json({error: 'No text to translate'});
    } else if (!locale || !text) {
      res.json({error: 'Required field(s) missing'});
    } else {
      res.json({'text': text, 'translation': translated});
    }
    
    });
};
