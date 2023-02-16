/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
    s = s.trim();

    let isMinus = false;
    let start = 0;
    if(s[0] === '-' || s[0] === '+'){
        start = 1;
        isMinus = s[0] === '-';
    }

    let num = '';
    while(s[start] >= '0' && s[start] <= '9'){
        num += s[start];
        start++;
    }

    if(isMinus && +num >= Math.pow(2, 31)) return -1 * Math.pow(2, 31);
    if(+num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    return isMinus ? +num * -1 : +num;
};
