const result = {
    'R': 0,
    'T': 0,
    'C': 0,
    'F': 0,
    'J': 0,
    'M': 0,
    'A': 0,
    'N': 0
}

function solution(survey, choices) {
    for(let i = 0; i<survey.length; i++) {
        if(choices[i] < 4){
            result[survey[i][0]] += 4 - choices[i];
        }
        else {
            result[survey[i][1]] += (choices[i] - 4);
        }
    }
    
    let answer = '';
    result['R']>=result['T'] ? answer+='R' : answer+='T';
    result['C']>=result['F'] ? answer+='C': answer+='F';
    result['J']>=result['M'] ? answer+='J': answer+='M';
    result['A']>=result['N'] ? answer+='A': answer+='N';
    
    return answer;
}
