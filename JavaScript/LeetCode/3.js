/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let end = 0;

    let answer = 0;
    let word = [];

    while(end < s.length){
        word.push(s[end]);
        console.log(word)
        if(new Set(word).size === word.length){
            if(word.length > answer) answer = word.length;
        } else {
            while(new Set(word).size !== word.length){
                word.shift();
            }
        }
        end++;
    }

    return answer;
};
