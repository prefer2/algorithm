#include <iostream>
using namespace std;

int N, M;
int number[10001];

int main() {
	cin >> N >> M;
	for (int i = 0; i < N; i++) {
		cin >> number[i];
	}

	int s, e, sum, cnt;
	s = 0; e = 1;
	sum = number[0]; 
	cnt = 0;
	while (s < N && e <= N) {
		if (sum == M) {
			sum -= number[s];
			s++;
			cnt++;
		}
		else if (sum > M) {
			sum -= number[s];
			s++;
		}
		else {
			sum += number[e];
			e++;
		}
	}

	cout << cnt;
}