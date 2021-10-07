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
			dp[i] = cnt;
		}
		else
		{
			// 같거나 작은 위치를 lower_bound로 찾음
			int pos = lower_bound(v.begin(), v.end(), arr[i]) - v.begin();
			v[pos] = arr[i];
			dp[i] = pos;
		}
	}


	// 값 복원
	int LIS = cnt;

	for (int i = N; i >= 0; i--)
	{
		if (dp[i] == LIS)
		{
			ans.push_back(arr[i]);
			LIS--;
		}
	}

	int size = ans.size();
	cout << size << '\n';
	for (int i = 0; i < size; i++)
	{
		cout << ans.back() << " ";
		ans.pop_back();
	}

}