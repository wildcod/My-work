#include <iostream>
using namespace std;
int maxarea(int arr[],int n){
	int val = -100000;
	int ans = 0;

	for(int i = 0 ; i < n ; i++){
		  int m = i;
          for(int j = 1 ; m < n ; j++,m++){
          	if(arr[i+j] >= arr[i] || m+1==n  ){
                 ans = arr[i]*j;
             
              for(int k = i-1 ; k >=0 ;k--){
              	if(arr[k] >= arr[i+j]){
              	
              		ans = ans+arr[i];
              	}
              	else break;
              }
          	}
          	else{
          		ans = arr[i]*j;
          		break;
          	}
          }
          cout << ans << " ";
          if(val < ans) val = ans;
	}
	return val;
}
int main()
{
	int n,arr[20];
	cin >> n;
    
    for(int i=0 ; i < n ; i++) cin >> arr[i];

    	cout << maxarea(arr,n);

}