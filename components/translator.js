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
                let re3 = new RegExp(i + '\\b', 'ig'), //TODO '^' + i + '\\W?$'
                    x = re3.exec(text);

                if (x) {
                    //console.log('testing translate func x is true ', x, re3.source);
                    translated = translated.replace(re3, `${span1}${americanOnly[i]}${span2}`);
                }

            }

            for (let i of Object.keys(americanToBritishSpelling)) {
                let re3 = new RegExp(i + '\\b', 'ig'),
                    x = re3.exec(text);                    
                    
                if (x) translated = translated.replace(re3, `${span1}${americanToBritishSpelling[i]}${span2}`);
            }

            for (let i of Object.keys(americanToBritishTitles)) {
                // i have to scape the dot
                // mr\.\b gi
                let re3 = new RegExp(i.slice(0, -1) + '\\.', 'ig'),
                    x = re3.exec(text);
                console.log('testing translate func titles re3.source ', re3.source, re3.flags);    
                if (x) translated = translated.replace(re3, `${span1}${americanToBritishTitles[i]}${span2}`);
            }

        } 

        if (locale === 'british-to-american') {

            for (let i of Object.keys(britishOnly)) {
                let re3 = new RegExp(i + '\\b', 'ig'),
                    x = re3.exec(text);
                    
                if (x) translated = translated.replace(re3, `${span1}${britishOnly[i]}${span2}`);
            }

            for (let i of Object.keys(americanToBritishSpelling)) {
                let re3 = new RegExp(americanToBritishSpelling[i] + '\\b', 'ig'),
                    x = re3.exec(text);
                    
                if (x) translated = translated.replace(re3, `${span1}${i}${span2}`);
            }

            for (let i of Object.keys(americanToBritishTitles)) {
                let re3 = new RegExp(americanToBritishTitles[i] + '\\b', 'ig'),
                    x = re3.exec(text);
                    
                if (x) translated = translated.replace(re3, `${span1}${i}${span2}`);
            }

        }
        
        console.log('testing translate func translated ', translated);
        return translated;
        
    }

}

module.exports = Translator;