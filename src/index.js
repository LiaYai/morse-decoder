const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const words = expr.split('**********');
    let phrase = [];
    for (let i = 0; i < words.length; i++) {
      let letters = [];
      let n = words[i].length / 10;
      for (let j = 0; j < n; j += 1) {
        letters[j] = words[i].slice(j * 10, j * 10 + 10);
        while (letters[j].startsWith('00')) {
          letters[j] = letters[j].slice(2);
        };
        letters[j] = letters[j].replaceAll('10', '.').replaceAll('11','-');
        letters[j] = MORSE_TABLE[letters[j]];
      };
      letters = letters.join('');
      phrase.push(letters);
    };
    return phrase.join(' ');
  };

module.exports = {
    decode
}