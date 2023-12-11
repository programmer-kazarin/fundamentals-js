export const concatStrings = (str1, str2) => str1 + str2;

export const isString = (str) => typeof str === 'string';
 
export const identifySign = (number) => {
    if (number === 0) {
        return 'Ноль';
    }
    if (number < 0) {
        return 'Отрицательное число';
    }
    if (number > 0) {
        return 'Положительное число';
    }
};

export const reverseWords = (text) => {
    const words = text.split(' ');
    let result = '';
    for (let i = words.length - 1; i >= 0; i -= 1) {
        result += words[i];
        if (i > 0) {
            result += ' ';
        }
    }
    return result;
};

export const wordsCount = (text) => {
    if (text.length === 0) {
        return 0;
    }
    return text.split(' ').length;
};
