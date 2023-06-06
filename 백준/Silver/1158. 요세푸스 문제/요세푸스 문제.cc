#include <bits/stdc++.h>
using namespace std;
#define MX 5000000

int dat[MX];
int pre[MX], nxt[MX];
int unused = 1;
int sz = 0;

void insert(int addr, int data) {
	dat[unused] = data;
	pre[unused] = addr;
	nxt[unused] = nxt[addr];
	if (nxt[addr] != -1) pre[nxt[addr]] = unused;
	nxt[addr] = unused;
	unused++;
	sz++;
}
void erase(int addr) {
	nxt[pre[addr]] = nxt[addr];
	if (nxt[addr] != -1) pre[nxt[addr]] = pre[addr];
	sz--;
}
void traverse() {
	int cur = nxt[0];
	while (cur != -1) {
		cout << dat[cur];
		cur = nxt[cur];
	}
}
int NextPosIdx(int cur) {
	if (nxt[cur] == -1) return nxt[0];
	return nxt[cur];
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	fill(pre, pre + MX, -1);
	fill(nxt, nxt + MX, -1);
	int n, k; cin >> n >> k;

	for (int i = 0; i != n; i++)
		insert(unused - 1, i + 1);

	int cur = 0;
	cout << '<';

	while (n--) {
		for (int i = 0; i != k; i++)
			cur = NextPosIdx(cur);
		cout << dat[cur];
		if (sz != 1) cout << ", ";
		erase(cur);
	}

	cout << ">\n";
}