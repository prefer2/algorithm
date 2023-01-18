#include <iostream>
#include <vector>

using namespace std;
int tile[60001];

int solution(int n) {
    tile[1]=1;
    tile[2]=2;
    for(int i=3; i<=n; i++){
        tile[i]=(tile[i-1]+tile[i-2])%1000000007;
    }
    return tile[n];
}