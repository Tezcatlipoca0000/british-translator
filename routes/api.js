'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log('testing post /translate req.body ', req.body);
      let text = req.body.text,
          locale = req.body.locale,
          translated = translator.translate(text, locale);

    console.log('testing post /translate variables ', text, locale, translated);
    res.json({'text': text, 'translation': translated});
    });
};
