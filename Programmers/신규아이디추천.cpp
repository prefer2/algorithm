#include <iostream>
#include <string>
#include <vector>

using namespace std;

string solution(string new_id) {
    string answer = "";
    
    // step 1: 대문자 -> 소문자 & step 2
    for(int i = 0; i<new_id.length(); i++) {
        if(new_id[i] >= 'A' && new_id[i] <= 'Z' )  {
            answer += new_id[i] + 32;
            continue;
        }
        if(new_id[i] >= 'a' && new_id[i] <= 'z') {
            answer += new_id[i];
            continue;
        }
        
        if(new_id[i] >= '0' && new_id[i] <= '9'){
            answer += new_id[i];
            continue;
        }
        
        if(new_id[i] == '-' || new_id[i] == '_' || new_id[i] == '.'){
             answer += new_id[i];
            continue;
        }
    }
    
    new_id = answer;
    answer = "";
    
    for(int i = 0; i< new_id.length(); i++){
        while(new_id[i] == '.' && new_id[i+1] == '.'){
            i++;
        }
        answer += new_id[i];
    }
    
    new_id = answer;
    answer = "";
    
    for(int i=0; i<new_id.length(); i++) {
        if(i == 0 && new_id[i] == '.') continue;
        if(i == new_id.length()-1 && new_id[i] == '.') continue;
        answer += new_id[i];
    }
    
    new_id = answer;
    answer = "";
    
    int len = new_id.length();
    if(len == 0) answer += 'a';
    else {
        if(len > 15) len = 15;
        for(int i=0; i<len; i++) {
            if(i == 14 && new_id[i] == '.') continue;
            answer += new_id[i];
        }
    }

    while(answer.length() < 3){
        answer += answer[answer.length() - 1];
    }
    
    return answer;
}
