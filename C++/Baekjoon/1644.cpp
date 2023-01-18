#include<iostream>
#include<cmath>
#include<vector>
using namespace std;

#define MAX 4000000

int n, sum;
bool check[MAX + 1]; 
vector<int> prime;


int main()
{
	cin >> n;

	// 에라토스테네스의 체 	 	
	for (int i = 2; i < sqrt(MAX); i++)
	{
		for (int j = 2 * i; j <= MAX; j += i)
			check[j] = true;
	}

	for (int i = 2; i <= n; i++) {
		if (!check[i]) prime.push_back(i);
	}

	// 투포인터 
	int ans, sum, left, right;
	sum = 0;
	ans = 0;
	left = 0;
	right = 0;

	while (1)
	{
		if (sum == n) ans++;

		if (sum >= n) {
			sum -= prime[left];
			left++;
		}
		else if (right == prime.size()) break;
		else {
			sum += prime[right];
			right++;
		}
	}

	cout << ans;

}