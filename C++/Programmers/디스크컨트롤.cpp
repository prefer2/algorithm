#include <queue>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int solution(vector<vector<int>> jobs) {
    int answer = 0;
    priority_queue<pair<int, int>> pq;
    sort(jobs.begin(), jobs.end());
    
    int t = 0;
    int i = 0;
    while(i<jobs.size() || !pq.empty()){
        if(i < jobs.size() && t>=jobs[i][0]){
            pq.push({-jobs[i][1], jobs[i][0]});
            i++;
            continue;
        }
        if(!pq.empty()){
            t-=pq.top().first;
            answer+=t-pq.top().second;
            pq.pop();
        }
        else t=jobs[i][0];
    }
    return answer/jobs.size();
}