function solution(s) {
    const str = s.split(' ').sort((a,b) => +a - +b)
    return `${str[0]} ${str[str.length - 1]}`
}
