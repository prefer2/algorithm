#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;
struct Node
{
    int x, y, num;
};

int n, m;
vector<vector<int>> office(8, vector<int>(8));
vector<Node> cctv;
int ans = 100; // 사각지대의 최소 개수

int blindSpotCount(vector<vector<int>> v)
{
    int cnt = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (v[i][j] == 0)
                cnt++;
        }
    }
    return cnt;
}

// cctv위치 : x,y  cctv 방향: dir
vector<vector<int>> setWatchSpots(vector<vector<int>> temp, int dir, int x, int y)
{
    // ⬆
    if (dir == 0)
    {
        for (int i = x; i >= 0; i--)
        {
            if (temp[i][y] == 6)
                break;
            else if (temp[i][y] == 0)
            {
                temp[i][y] = -1; // 감시 가능한 영역을 -1로 표시
            }
        }
    }
    // ➡
    if (dir == 1)
    {
        for (int i = y; i < m; i++)
        {
            if (temp[x][i] == 6)
                break;
            else if (temp[x][i] == 0)
            {
                temp[x][i] = -1;
            }
        }
    }
    // ⬇
    if (dir == 2)
    {
        for (int i = x; i < n; i++)
        {
            if (temp[i][y] == 6)
                break;
            else if (temp[i][y] == 0)
            {
                temp[i][y] = -1;
            }
        }
    }
    // ⬅
    if (dir == 3)
    {
        for (int i = y; i >= 0; i--)
        {
            if (temp[x][i] == 6)
                break;
            else if (temp[x][i] == 0)
            {
                temp[x][i] = -1;
            }
        }
    }
    return temp;
}


void dfs(int cnt, vector<vector<int>> office)
{
    if (cnt == cctv.size())
    {
        ans = min(ans, blindSpotCount(office));
        return;
    }

    vector<vector<int>> temp;

    // cctv 1 
    if (cctv[cnt].num == 1)
    {
        for (int i = 0; i < 4; i++)
            dfs(cnt + 1, setWatchSpots(office, i, cctv[cnt].x, cctv[cnt].y));
    }
    // cctv 2 
    else if (cctv[cnt].num == 2)
    {
        temp = setWatchSpots(office, 0, cctv[cnt].x, cctv[cnt].y);
        temp = setWatchSpots(temp, 2, cctv[cnt].x, cctv[cnt].y);
        dfs(cnt + 1, temp);
        temp = setWatchSpots(office, 1, cctv[cnt].x, cctv[cnt].y);
        temp = setWatchSpots(temp, 3, cctv[cnt].x, cctv[cnt].y);
        dfs(cnt + 1, temp);
    }
    // cctv 3 
    else if (cctv[cnt].num == 3)
    {
        for (int i = 0; i < 4; i++)
        {
            temp = office;
            if (i == 3)
            {
                temp = setWatchSpots(temp, 0, cctv[cnt].x, cctv[cnt].y);
                temp = setWatchSpots(temp, 3, cctv[cnt].x, cctv[cnt].y);
                dfs(cnt + 1, temp);
            }
            else
            {
                temp = setWatchSpots(temp, i, cctv[cnt].x, cctv[cnt].y);
                temp = setWatchSpots(temp, i + 1, cctv[cnt].x, cctv[cnt].y);
                dfs(cnt + 1, temp);
            }
        }
    }
    // cctv 4
    else if (cctv[cnt].num == 4)
    {
        for (int i = 0; i < 4; i++)
        {
            temp = office;
            for (int j = 0; j < 4; j++)
            {
                if (i == j)
                    continue;
                temp = setWatchSpots(temp, j, cctv[cnt].x, cctv[cnt].y);
            }
            dfs(cnt + 1, temp);
        }
    }
    // cctv 5
    else if (cctv[cnt].num == 5)
    {
        temp = office;
        for (int i = 0; i < 4; i++)
            temp = setWatchSpots(temp, i, cctv[cnt].x, cctv[cnt].y);
        dfs(cnt + 1, temp);
    }
}


int main()
{
    cin >> n >> m;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin >> office[i][j];
            if (office[i][j] >= 1 && office[i][j] <= 5)
                cctv.push_back({ i, j, office[i][j] });
        }
    }
    dfs(0, office);
    cout << ans;

    return 0;
}