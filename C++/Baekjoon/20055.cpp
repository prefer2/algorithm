#include <deque>
#include <iostream>
#include <vector>

using namespace std;

deque<int> durability;
deque<bool> conveyer;

int N, K, step;

void rotate()
{
    conveyer.push_front(conveyer.back());
    conveyer.pop_back();

    durability.push_front(durability.back());
    durability.pop_back();
    conveyer[N - 1] = false;
}

void move()
{
    for (int i = N - 2; i >= 0; i--) {
        if ((!conveyer[i + 1]) && (durability[i + 1] > 0) && (conveyer[i])) {
            conveyer[i] = false;
            conveyer[i + 1] = true;
            durability[i + 1]--;
        }
    }
    conveyer[N - 1] = false;
}

void put_robot()
{
    if (!conveyer[0] && durability[0] > 0) {
        conveyer[0] = true;
        durability[0]--;
    }
}

int check()
{
    int count = 0;
    for (int i = 0; i < 2 * N; i++) {
        if (durability[i] == 0)
            count++;
    }
    return count;
}

int main()
{
    step = 1;

    cin >> N >> K;
    for (int i = 0; i < 2 * N; i++) {
        int in;
        cin >> in;
        durability.push_back(in);
        conveyer.push_back(false);
    }

    while (true) {
        rotate();
        move();
        put_robot();

        int c = check();
        if (c >= K) {
            cout << step;
            return 0;
        }
        step++;
    }

    return 0;
}