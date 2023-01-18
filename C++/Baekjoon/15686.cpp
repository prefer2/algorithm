#include <iostream>
#include <string>
#include <algorithm>
#include <queue>
#include <cmath>

using namespace std;

const int CITY_SIZE = 50;
int n,m;
vector<pair<int, int>> house;
vector<pair<int, int>>chicken;
vector<int> selectedChicken;
bool check[CITY_SIZE* CITY_SIZE+1];
int answer = CITY_SIZE*2*14;

int findDistance() {
	int sum = 0;
	for (int i = 0; i < house.size(); i++) {
		int hx = house[i].first;
		int hy = house[i].second;
		int distance = CITY_SIZE*2+1;

		for (int j = 0; j < selectedChicken.size(); j++) {
			int idx = selectedChicken[j];
			int cx = chicken[idx].first;
			int cy = chicken[idx].second;
			int tmpDis = abs(hx - cx) + abs(hy - cy);
			if (tmpDis < distance) distance = tmpDis;
		}

		sum += distance;
	}

	return sum;
}

void selectChicken(int idx, int cnt) {
	if (cnt == m) {
		answer = min(findDistance(), answer);
	}

	for (int i = idx; i < chicken.size(); i++) {
		if (check[i]) continue;
		check[i] = true;
		selectedChicken.push_back(i);
		selectChicken(i, cnt + 1);
		check[i] = false;
		selectedChicken.pop_back();
	}
}

int main() {
	cin >> n >> m;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			int k;
			cin >> k;
			if (k == 1) house.push_back({ i,j });
			if (k == 2) chicken.push_back({ i,j });
		}
	}

	selectChicken(0,0);
	cout << answer;
}