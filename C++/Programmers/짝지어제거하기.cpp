#include <iostream>
#include <string>
#include <stack>
using namespace std;

int solution(string s)
{
    if(s.length()%2==1) return 0;
    stack <char> st;
    
    for(int i=0; i<s.length(); i++){
        if(!st.empty() && st.top() == s[i]) st.pop();
        else st.push(s[i]);
    }

    if(st.empty()) return 1;
    else return 0;
}