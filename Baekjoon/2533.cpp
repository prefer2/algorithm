#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int n, parent;
vector<int> tree[1000001];
int dp[1000001][2]; //0: 얼리 어답터, 1: 얼리 어답터x
bool visited[1000001];

void find(int x) {
    visited[x] = true;
    dp[x][0] = 1;
    for (int i = 0; i < tree[x].size(); i++) {
        int child = tree[x][i];
        if (visited[child]) continue;
        find(child);
        dp[x][1] += dp[child][0];
        dp[x][0] += min(dp[child][1], dp[child][0]);
    }

}
int main(void) {
    cin >> n;
    int u, v;
    for (int i = 0; i < n - 1; i++) {
        cin >> u >> v;
        tree[u].push_back(v);
        tree[v].push_back(u);
    }
    find(1);
    cout << min(dp[1][0], dp[1][1]);

    return 0;
}