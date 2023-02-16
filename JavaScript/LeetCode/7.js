/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    const isMinus = x < 0;
    if(isMinus) x *= -1;
    const reversed = x.toString().split('').reverse();
    if(+reversed.join('') > Math.pow(2, 31)) return 0;
    return isMinus ? +reversed.join('') * -1 : +reversed.join('');
};
