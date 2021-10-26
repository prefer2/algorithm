#include <string>
#include <vector>
#include <queue>
#include <iostream>

using namespace std;

int solution(vector<int> scoville, int K) {
    int answer = 0;
    priority_queue <int> pq;
    for(int i=0; i<scoville.size(); i++) pq.push(-scoville[i]);
    
    while(pq.top()>-K && pq.size()>=2){
        int first = -pq.top();
        pq.pop();
        int second = -pq.top();
        pq.pop();
        int mixed = first + 2*second;
        pq.push(-mixed);
        answer++;
    }
    
    if(pq.top()>-K) return -1;
    
    return answer;
}