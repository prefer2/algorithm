#include <iostream>

using namespace std;

int gcd(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}

int main() {
	int a, b;
	int c, d;

	cin >> a >> b >> c >> d;

	int top = a * d + c * b;
	int bottom = b * d;
    int g = gcd(top, bottom);
    cout << top / g << " " << bottom / g;

    return 0;
}