#include <string>
#include <vector>
#include <algorithm>

using namespace std;

long long solution(int n, vector<int> times) {
    long long answer = 0;
    sort(times.begin(), times.end());
    
    long long start = 1;
    long long end = (long long)times[times.size()-1] * n;
    
    while(start<=end){
        long long cnt = 0;
        long long mid = (start+end)/2;
        for(int i=0; i<times.size(); i++){
            cnt += mid/times[i];  
        }
        
        if(cnt<n){
            start = mid + 1;
        }
        else {
            end = mid - 1;
            answer = mid;
        }
    }
    
    return answer;
}