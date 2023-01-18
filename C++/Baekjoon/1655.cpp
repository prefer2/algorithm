#include <iostream>
#include <vector>
#include <queue>

using namespace std;

priority_queue <int> maxPq;
priority_queue <int, vector<int>, greater<int>> minPq;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(0);
	int n;
	cin >> n;
	for (int i = 0; i < n; i++) {
		int a;
		cin >> a;
		if (minPq.size() == maxPq.size()) {
			maxPq.push(a);
		}
		else {
			minPq.push(a);
		}
		if (maxPq.size() != 0 && minPq.size() != 0 && maxPq.top() > minPq.top()) {
			int maxvalue = maxPq.top();
			int minvalue = minPq.top();
			maxPq.pop();
			minPq.pop();
			maxPq.push(minvalue);
			minPq.push(maxvalue);
		}
		cout << maxPq.top() << "\n";
	}

	return 0;
}