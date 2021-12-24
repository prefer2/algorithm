#include <iostream>
#include <math.h>
using namespace std;
double x[10000], y[10000];

double ccw(int a, int b, int c) {
	double aa[2] = { y[b] - y[a],x[b] - x[a] };
	double bb[2] = { y[c] - y[a],x[c] - x[a] };
	double temp = aa[0] * bb[1] - aa[1] * bb[0];
	return temp / 2;
}

int main() {
	int n;
	double result = 0;
	cin >> n;
	for (int i = 0; i < n; i++)
		cin >> x[i] >> y[i];
	for (int i = 1; i < n - 1; i++) {
		result += ccw(0, i, i + 1);
	}
	cout.precision(1);
	cout << fixed;
	cout << abs(result);
	return 0;
}