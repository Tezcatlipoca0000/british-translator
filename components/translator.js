const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translate(text, locale) {
        //console.log('testing translate func arguments ', text, locale);
        let translated = text,
            span1 = '<span class="highlight">',
            span2 = '</span>',
            re2 = /\d\d:\d\d|\d\d\.\d\d/g;

        if (locale === 'american-to-british') {

            for (let i of Object.keys(americanOnly)) {
                let re3 = new RegExp(i + '\\b', 'ig'),
                    x = re3.exec(translated);

                if (x) translated = translated.replace(re3, `${span1}${americanOnly[i]}${span2}`);
            }

            for (let i of Object.keys(americanToBritishSpelling)) {
                let re3 = new RegExp(i + '\\b', 'ig'),
                    x = re3.exec(translated);                    
                    
                if (x) translated = translated.replace(re3, `${span1}${americanToBritishSpelling[i]}${span2}`);
            }

            for (let i of Object.keys(americanToBritishTitles)) {
                let re3 = new RegExp(i.slice(0, -1) + '\\.', 'ig'),
                    x = re3.exec(translated),
                    y = americanToBritishTitles[i].charAt(0).toUpperCase() + americanToBritishTitles[i].slice(1);
                
                //console.log('testing translate func titles re3.source ', re3.source, re3.flags);    
                if (x) translated = translated.replace(re3, `${span1}${y}${span2}`);
            }

            let x = re2.exec(translated);
            if (x) {
                let y = x[0],
                    re3 = new RegExp(x[0], 'g');
                
                if (y.includes(':')) {
                    y = y.replace(':', '.');
                    translated = translated.replace(re3, `${span1}${y}${span2}`);
                } 
            }

        } 

        if (locale === 'british-to-american') {

            for (let i of Object.keys(britishOnly)) {
                let re3 = new RegExp(i + '\\b', 'ig'),
                    x = re3.exec(translated);
                    
                if (x) translated = translated.replace(re3, `${span1}${britishOnly[i]}${span2}`);
            }

            for (let i of Object.keys(americanToBritishSpelling)) {
                let re3 = new RegExp(americanToBritishSpelling[i] + '\\b', 'ig'),
                    x = re3.exec(translated);
                    
                if (x) translated = translated.replace(re3, `${span1}${i}${span2}`);
            }

            for (let i of Object.keys(americanToBritishTitles)) {
                let re3 = new RegExp(americanToBritishTitles[i] + '\\b', 'ig'),
                    x = re3.exec(translated),
                    y = i.charAt(0).toUpperCase() + i.slice(1);
                    
                if (x) translated = translated.replace(re3, `${span1}${y}${span2}`);
            }

            let x = re2.exec(translated);
            if (x) {
                let y = x[0],
                    re3 = new RegExp(x[0], 'g');
                
                if (y.includes('.')) {
                    y = y.replace('.', ':');
                    translated = translated.replace(re3, `${span1}${y}${span2}`);
                } 
            }

        }
        
        //console.log('testing translate func translated ', translated);
        if (translated == text) {
            translated = 'Everything looks good to me!';
        }

        return translated;
        
    }

}

module.exports = Translator;