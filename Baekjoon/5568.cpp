#include <iostream>
#include <string>
#include <set>

using namespace std;
int n, k;
string num[11];
bool visited[11];
set <int> setNum;

void makeSet(int k, int cnt, string s) {
	if (cnt == k) {
		setNum.insert(stoi(s));
		return;
	}

	for (int i = 0; i < n; i++) {
		if (!visited[i]) {
			visited[i] = true;
			makeSet(k, cnt + 1, s + num[i]);
			visited[i] = false;
		}
	}
}

int main() {
	cin >> n >> k;
	for (int i = 0; i < n; i++) {
		cin >> num[i];
	}

	makeSet(k, 0, "");
	cout << setNum.size();
}