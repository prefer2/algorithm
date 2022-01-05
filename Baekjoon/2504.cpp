#include <iostream>
#include <algorithm>
#include <string>
#include <stack>
#include <queue>
using namespace std;

stack <char> st;

int main() {
	string s;
	cin >> s;

	int answer = 0;
	int temp = 1;

	for (int i = 0; i < s.length(); i++) {
		if (s[i] == '(' || s[i] == '[') {
			if (s[i] == '(') temp *= 2;
			else temp *= 3;
			st.push(s[i]);
		}
		else {
			if (st.empty()) {
				cout << 0;
				return 0;
			}
			if (s[i] == ')' && st.top() == '(') {
				if(s[i-1]=='(') answer += temp;
				temp /= 2;
				st.pop();
			}
			else if (s[i] == ']' && st.top() == '[') {
				if(s[i-1]=='[') answer += temp;
				temp /= 3;
				st.pop();
			}
			else {
				cout << 0;
				return 0;
			}
		}
	}

	if (!st.empty()) cout << 0;
	else cout << answer;
	return 0;
}