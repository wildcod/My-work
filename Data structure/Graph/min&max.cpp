#include <iostream>
#include <map>
using namespace std;
int main()
{
	int arr[100005],n;
    long minsum = 0;
    long maxsum = 0;
	cin >> n;
   map<int,bool> m;
	for(int i = 0; i < n;i++) cin >> arr[i];

	for(int i=0;i<n;i++)
	{
		m[arr[i]]=true;
	}
   int j=0;
	for(map<int,bool>:: iterator it = m.begin(); it != m.end(); it++)
	{
		arr[j++] = it->first;
	}
    // min sum
	for(int j=0;j<n-1;j++) {
        minsum = minsum + arr[j];
	}
	// max sum

	for(int j = 1;j<n;j++){
		maxsum = maxsum + arr[j];
	}

	cout << minsum << " " << maxsum;
    
}