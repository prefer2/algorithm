#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
#include <math.h>

using namespace std;
int n, b, c;
vector <int> students;

int main() {
	cin >> n;
	long long answer = 0;
	for (int i = 0; i < n; i++) {
		int a;
		cin >> a;
		students.push_back(a);
	}
	cin >> b >> c;
	
	for (int i = 0; i < n; i++) {
		int check = students[i] - b;
		int sub = 0;
		if (check > 0) sub = ceil(double(check) / double(c));
		answer = answer + sub + 1;
	}

	cout << answer;
}