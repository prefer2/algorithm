#include <iostream>
#include <string>
#include <deque>
#include <queue>
#include <cmath>

using namespace std;

int main(void)

{
    deque<int> dq[5];

    for (int i = 1; i < 5; i++){
        string s;
        cin >> s;
        for (int j = 0; j < s.length(); j++) {
            dq[i].push_back(s[j] - '0');
        }   
    }

    int K;
    cin >> K;
    for (int i = 0; i < K; i++){
        int num, dir;
        cin >> num >> dir;
        
        int idx = num;
        int tempDir = dir;
        queue<pair<int, int>> q;
        q.push({ idx, tempDir });

        //check right
        while (1){
            if (idx == 4) break;
            idx++;
            tempDir *= -1;
            if (dq[idx - 1][2] != dq[idx][6]) q.push({ idx, tempDir });
            else break;  
        }



        idx = num;
        tempDir = dir;
        //check left
        while (1){
            if (idx == 1) break;
            idx--;
            tempDir *= -1;
            if (dq[idx + 1][6] != dq[idx][2]) q.push({ idx, tempDir });
            else break;
        }



        //rotate the magnet
        while (!q.empty()){
            int cur = q.front().first;
            int rotate = q.front().second;
            q.pop();

            //clockwise
            if (rotate == 1)
            {
                int temp = dq[cur].back();
                dq[cur].pop_back();
                dq[cur].push_front(temp);
            }

            //anti clockwise
            else
            {
                int temp = dq[cur].front();
                dq[cur].pop_front();
                dq[cur].push_back(temp);
            }

        }
    }



    int result = 0;
    for (int i = 1; i < 5; i++) {
        if (dq[i].front() == 1) result += (int)pow(2, i - 1);    
    }

    cout << result;
}
