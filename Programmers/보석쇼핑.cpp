#include <string>
#include <vector>
#include <set>
#include <map>
#include <iostream>

using namespace std;

vector<int> solution(vector<string> gems) {
    vector<int> answer;
    set <string> kind(gems.begin(), gems.end());
    
    int start = 0;
    int end = 0;
    
    // 0번 인덱스로부터 모든 보석이 있는 구간 구하기
    map <string, int> cnt;
    while(end<gems.size()){
        cnt[gems[end]]++;
        if(cnt.size()==kind.size()) break;
        end++;
    }
    
    int minLen = end - start;
    answer.push_back(start+1);
    answer.push_back(end+1);
    
    // start, end를 이동해가며 구간 찾기
    while(end<gems.size() && start<end){
        cnt[gems[start]]--;        
        
        if(cnt[gems[start]]==0){
            while(1){
                end++;   
                if(end==gems.size()) break; 
                cnt[gems[end]]++;  
                if(gems[start]==gems[end]) break;
            }
        }
        
        start++;
        if(end-start<minLen){
            minLen = end - start;
            answer[0]=start+1; 
            answer[1]=end+1;
        }
    }
    
    
    return answer;
}