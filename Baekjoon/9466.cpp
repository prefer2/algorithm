#include<iostream>
#include <cstring>
using namespace std;
int n;
int student[100001];
bool visited[100001];
bool done[100001];
int cnt;

void check(int from) {
	visited[from] = true;
	int to = student[from];
	if (!visited[to]) {
		check(to);
	}
	else if (!done[to]){
		//내부에 사이클이 있음
		for (int i = to; i != from; i = student[i]) {
			cnt++;
		}
		cnt++;
	}

	done[from] = true; // 다시 방문x
}

int main() {
	int t;
	cin >> t;

	for (int j = 0; j < t; j++) {
		cin >> n;
		cnt = 0;
		memset(visited, false, sizeof(visited));
		memset(done, false, sizeof(done));

		for (int i = 1; i <= n; i++) {
			int s;
			cin >> s;
			student[i] = s;
		}

		for (int i = 1; i <= n; i++) {
			if(!visited[i]) check(i);
		}
		
		cout << n-cnt << "\n";
	}
}