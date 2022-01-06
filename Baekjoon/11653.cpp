#include <iostream>
#include <vector>
#include <cmath>

#define MAX 10000000

using namespace std;

bool visited[MAX+1];
vector<int> primeNum;

int main() {
	int n;
	cin >> n;

	for (int i = 2; i < sqrt(MAX); i++)
	{
		for (int j = 2 * i; j <= MAX; j += i)
			visited[j] = true;
	}
	for (int i = 2; i <= n; i++) {
		if (!visited[i]) primeNum.push_back(i);
	}

	while (n>1) {
		for (int i = 0; i < primeNum.size(); i++) {
			if (n % primeNum[i]==0) {
				cout << primeNum[i] << "\n";
				n /= primeNum[i];
				break;
			}
		}
	}
}