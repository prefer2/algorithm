#include <string>
#include <vector>
#include <algorithm>
#include <iostream>
#include <queue>

using namespace std;
int runner[500001]; 
int answer[500001];
long long tree[1111111];
priority_queue<pair<int, int>> pq;

void update(int idx) {
    while (idx >= 1) {
        tree[idx] += 1;
        idx /= 2;
    }
}

long long find(int left, int right) {
    long long value = 0;

    while (left <= right) {
        if (left % 2 == 1) {
            value += tree[left];
            left++;
        }
        if (right % 2 == 0) {
            value += tree[right];
            right--;
        }
        left /= 2;
        right /= 2;
    }

    return value;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        int p;
        cin >> p;
        pq.push({ p, i + 1 });
    }

    int startIdx = 1;
    while (startIdx <= n) {
        startIdx *= 2;
    }

    while (!pq.empty()) {
        int w = pq.top().first;
        int idx = pq.top().second;
        pq.pop();
        answer[idx] = find(startIdx, idx + startIdx - 1) + 1;
        update(idx + startIdx - 1);
    }

    for (int i = 1; i <= n; i++) {
        cout << answer[i] << "\n";
    }
    return 0;
}