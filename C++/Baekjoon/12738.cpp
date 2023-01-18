#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int N, cnt;
int arr[1000001], dp[1000001];
vector<int> v, ans;

int main()
{
	cin >> N;

	for (int i = 1; i <= N; i++)
		cin >> arr[i];

	v.push_back(arr[1]);

	for (int i = 2; i <= N; i++)
	{
		if (v[cnt] < arr[i])
		{
			v.push_back(arr[i]);
			cnt++;
		}
		else
		{
			// 같거나 작은 위치를 lower_bound로 찾음
			int pos = lower_bound(v.begin(), v.end(), arr[i]) - v.begin();
			v[pos] = arr[i];
		}
	}

	cout << v.size();
}