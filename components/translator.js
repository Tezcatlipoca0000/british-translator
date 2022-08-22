const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translate(text, locale) {
        console.log('testing translate func arguments ', text, locale);
        //console.log('testing translate func components ', americanOnly, americanToBritishSpelling, americanToBritishTitles, britishOnly);
        let translated = text,
            span1 = '<span class="highlight">',
            span2 = '</span>',
            re1 = /\.|\?|!/; // TODO re1 to catch any punctuation 
            // TODO re2 to catch dd.dd | dd:dd

        if (locale === 'american-to-british') {

            for (let i of Object.keys(americanOnly)) {
                let re3 = new RegExp(i, 'ig'),
                    x = re3.exec(translated);

                if (x !== null) {
                    console.log('testing -------- ', x);
                    translated = translated.replace(re3, `${span1}${americanOnly[i]}${span2}`);
                }

            }

            for (let i of Object.keys(americanToBritishSpelling)) {
                if (translated.includes(i)) {
                    let re3 = new RegExp(i, 'ig');
                    translated = translated.replace(re3, `${span1}${americanToBritishSpelling[i]}${span2}`);
                }
            }

            for (let i of Object.keys(americanToBritishTitles)) {
                if (translated.includes(i)) {
                    let re3 = new RegExp(i, 'ig');
                    translated = translated.replace(re3, `${span1}${americanToBritishTitles[i]}${span2}`);
                }
            }

        } 

        if (locale === 'british-to-american') {

            for (let i of Object.keys(britishOnly)) {
                if (translated.includes(i)) {
                    let re3 = new RegExp(i, 'ig');
                    translated = translated.replace(re3, `${span1}${britishOnly[i]}${span2}`);
                }
            }

            for (let i of Object.keys(americanToBritishSpelling)) {
                if (translated.includes(americanToBritishSpelling[i])) {
                    let re3 = new RegExp(americanToBritishSpelling[i], 'ig');
                    translated = translated.replace(re3, `${span1}${i}${span2}`);
                }
            }

            for (let i of Object.keys(americanToBritishTitles)) {
                if (translated.includes(americanToBritishTitles[i])) {
                    let re3 = new RegExp(americanToBritishTitles[i], 'ig');
                    translated = translated.replace(re3, `${span1}${i}${span2}`);
                }
            }

        }
        
        console.log('testing translate func translated ', translated);
        return translated;
        
    }

}

module.exports = Translator;