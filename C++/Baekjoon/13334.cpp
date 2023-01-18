#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

int n, d;
vector <pair<int, int>> people;
priority_queue <int> pq;
int answer = 0;

bool cmp(pair<int, int> a, pair<int, int> b) {
	if (a.second == b.second) {
		return a.first < b.first;
	}

	return a.second < b.second;
}

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		int h, o;
		cin >> h >> o;
		if (o < h) { people.push_back({ o,h }); }
		else { people.push_back({ h,o }); }
	}
	cin >> d;

	sort(people.begin(), people.end(), cmp);

	for (int i = 0; i < n; i++) {
		int house = people[i].first;
		int office = people[i].second;

		if (office - house > d) continue;
		pq.push(-house);

		
		while (!pq.empty()) {
			if (-pq.top() + d >= office) {
				break;
			}

			pq.pop();
		}

		answer = max(answer, (int)pq.size());
	}

	cout << answer;
}