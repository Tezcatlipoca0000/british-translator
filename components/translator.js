const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translate(text, locale) {
        console.log('testing translate func arguments ', text, locale);
        //console.log('testing translate func components ', americanOnly, americanToBritishSpelling, americanToBritishTitles, britishOnly);
        let words = text.split(' '),
            translated = [],
            trText = text,
            span1 = '<span class="highlight">',
            span2 = '</span>',
            re1 = /\.|\?|!/; // TODO re1 to catch any punctuation 
            // TODO re2 to catch dd.dd | dd:dd

        // MAYBE A REGEXP CONSTRUCTOR:
        // >>
        // >>
        // check if text.includes(j)
        // new regexp j
        // text.replace(re, <span>obj[j]</>)
        //
        //
        // NOTE: The includes() method is case sensitive.
        //

        if (locale === 'american-to-british') {

            for (let i of Object.keys(americanOnly)) {
                if (text.includes(i)) {
                    let re3 = new RegExp(i);
                    trText = trText.replace(re3, `${span1}${americanOnly[i]}${span2}`);
                }
            }

            for (let i of Object.keys(americanToBritishSpelling)) {
                if (text.includes(i)) {
                    let re3 = new RegExp(i);
                    trText = trText.replace(re3, `${span1}${americanToBritishSpelling[i]}${span2}`);
                }
            }

            for (let i of Object.keys(americanToBritishTitles)) {
                if (text.includes(i)) {
                    let re3 = new RegExp(i);
                    trText = trText.replace(re3, `${span1}${americanToBritishTitles[i]}${span2}`);
                }
            }

            /*for (let i of Object.keys(britishOnly)) {
                if (text.includes(britishOnly[i])) {
                    let re3 = new RegExp(britishOnly[i]);
                    trText = trText.replace(re3, `${span1}${i}${span2}`);
                }
            }*/

        } 

        if (locale === 'british-to-american') {

        }
        
        console.log('testing translate func trText ', trText);
        
        /* v1
        //console.log('testing translate func words ', words);
        for (let [i, n] of words.entries()) {
            //console.log('testing translate func words loop ', i, n);

            for (let j of Object.keys(americanOnly)) {
                //console.log('testing translate func american only loop ', j);
                if (locale === 'american-to-british') {
                    if (n === j) {
                        translated.push(`${span1}${americanOnly[j]}${span2}`);
                    } else if (n.includes('.')) { // TODO change string for re1
                        let x = n.replace('.', '');
                        if (x === j) translated.push(`${span1}${americanOnly[j]}${span2}.`);
                    }
                } else {
                    if (n === americanOnly[j]) {
                        translated.push(`${span1}${j}${span2}`);
                    } else if (n.includes('.')) {
                        let x = n.replace('.', '');
                        if (x === americanOnly[j]) translated.push(`${span1}${j}${span2}.`);
                    }
                }
            }

            for (let j of Object.keys(americanToBritishSpelling)) {
                if (locale === 'american-to-british') {
                    if (n === j) {
                        translated.push(`${span1}${americanToBritishSpelling[j]}${span2}`);
                    } else if (n.includes('.')) {
                        let x = n.replace('.', '');
                        if (x === j) translated.push(`${span1}${americanToBritishSpelling[j]}${span2}.`);
                    }
                } else {
                    if (n === americanToBritishSpelling[j]) {
                        translated.push(`${span1}${j}${span2}`);
                    } else if (n.includes('.')) {
                        let x = n.replace('.', '');
                        if (x === americanToBritishSpelling[j]) translated.push(`${span1}${j}${span2}.`);
                    }
                }
            }

            for (let j of Object.keys(americanToBritishTitles)) {
                if (locale === 'american-to-british') {
                    if (n === j) {
                        translated.push(`${span1}${americanToBritishTitles[j]}${span2}`);
                    } else if (n.includes('.')) {
                        let x = n.replace('.', '');
                        if (x === j) translated.push(`${span1}${americanToBritishTitles[j]}${span2}.`);
                    }
                } else {
                    if (n === americanToBritishTitles[j]) {
                        translated.push(`${span1}${j}${span2}`);
                    } else if (n.includes('.')) {
                        let x = n.replace('.', '');
                        if (x === americanToBritishTitles[j]) translated.push(`${span1}${j}${span2}.`);
                    }
                }
            }

            for (let j of Object.keys(britishOnly)) {
                if (locale === 'american-to-british') {
                    if (n === j) {
                        translated.push(`${span1}${britishOnly[j]}${span2}`);
                    } else if (n.includes('.')) {
                        let x = n.replace('.', '');
                        if (x === j) translated.push(`${span1}${britishOnly[j]}${span2}.`);
                    }
                } else {
                    if (n === britishOnly[j]) {
                        translated.push(`${span1}${j}${span2}`);
                    } else if (n.includes('.')) {
                        let x = n.replace('.', '');
                        if (x === britishOnly[j]) translated.push(`${span1}${j}${span2}.`);
                    }
                }
            }

            if (translated.length === i) {
                translated.push(n);
            }
        }

        translated = translated.join(' ');
        console.log('testing translate func translated ', translated);
        */
    }

}

module.exports = Translator;