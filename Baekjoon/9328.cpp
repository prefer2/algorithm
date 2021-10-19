#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
#include <queue>
#include<cstring>

using namespace std;
char docMap[102][102];
bool visited[102][102];
bool alphaKeys[26];
int dx[4] = { 1, -1, 0, 0 };
int dy[4] = { 0,0,1,-1 };
int H, W;
int ans = 0;
// .:empty, *: wall, $: document

void init() {
	memset(alphaKeys, false, sizeof(alphaKeys));
	for (int i = 0; i <= 101; i++) {
		memset(docMap[i], '.', sizeof(docMap[i]));
		memset(visited[i], false, sizeof(visited[i]));
	}
}

void openDoor(char c) {
	for (int j = 1; j <= H; j++) {
		for (int k = 1; k <= W; k++) {
			if (docMap[j][k] == 'A' + c - 'a') docMap[j][k] = '.';
		}
	}
}

void find(int y, int x) {
    queue<pair<int, int>> q;

    q.push(make_pair(y, x));



    while (!q.empty())

    {
        int curY = q.front().first;
        int curX = q.front().second;
        q.pop();


        //범위 확인
        if (curY < 0 || curY > H + 1 || curX < 0 || curX > W + 1)
            continue;

        //이미 방문한 지점이거나, 벽이거나, 잠긴 문
        if (visited[curY][curX] || docMap[curY][curX] == '*' || ('A' <= docMap[curY][curX] && docMap[curY][curX] <= 'Z'))
            continue;

        visited[curY][curX] = true;

        //문서
        if (docMap[curY][curX] == '$')
        {
            ans++;
            docMap[curY][curX] = '.';
        }

        //열쇠

        if ('a' <= docMap[curY][curX] && docMap[curY][curX] <= 'z')
        {
            char key = docMap[curY][curX];
            docMap[curY][curX] = '.';

            if (alphaKeys[key-'a'] == false)
            {
                alphaKeys[key - 'a'] = true;
                openDoor(key);

                //모든 경로를 다시 확인
                memset(visited, false, sizeof(visited));
                while (!q.empty())
                    q.pop();
                q.push(make_pair(curY, curX));
                continue;
            }
        }

        // 이동
        for (int i = 0; i < 4; i++)
        {
            int ny = curY + dy[i];
            int nx = curX + dx[i];
            q.push(make_pair(ny, nx));
        }

    }
}

int main() {
	int t;
	cin >> t;
	for (int i = 0; i < t; i++) {
		cin >> H >> W;
		init();
		for (int j = 1; j <= H; j++) {
			for (int k = 1; k <= W; k++) {
				cin >> docMap[j][k];
			}
		}

		string s;
		cin >> s;
		if (s[0] != '0') {
			for (int j = 0; j < s.length(); j++) {
				alphaKeys[s[j] - 'a'] = true;
				openDoor(s[j]);
			}
		}
		
		find(0,0);
		
		cout << ans << "\n";
		ans = 0;
	}
}