#include <iostream>
using namespace std;
const int inf = 100000000;
int memo[100];
int change(int coins[],int n,int val ){
	if(val < 0) return inf;

	if(val == 0) return 0;

	if(memo[val]!=0) return memo[val];

	int best = inf;
	for(int i=0;i < n ;i++){
		int curcoin = coins[i];
		if(curcoin > val) continue;
		int curans = 1+change(coins,n,val-curcoin);
		best = min(best,curans);
	}
	return memo[val] = best;
}
int main()
{
	int coins[] = {1,3,5,6,20};
	int n = 5;

	int val;6
	cin >> val;



	cout << change(coins,n,val);
	cout << "\n";

	for(int i=0;i<val;i++){
		if(memo[i]!=0) cout  << memo[i] << " ";
	}
}