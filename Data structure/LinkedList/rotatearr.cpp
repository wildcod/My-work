#include <iostream>
using namespace std;
void rotate(int arr[],int n){
	int d,temp;
	cin >> d;
    int x =d;
	int i = 0;
	while(i < (n-2)){
		d=x;
    temp = arr[i+d];
      while(d > 0){
      	arr[i+d] = arr[i+d-1];
      	d--;
      }
      arr[i] = temp;
      i++;
}

for(int i =0;i<n;i++){
	cout << arr[i] << " ";
}
}
int main()
{
	int arr[] = {1,2,3,4};


	rotate(arr,4);
}