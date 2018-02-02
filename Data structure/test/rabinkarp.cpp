#include <iostream>
#include <cstring>
#include <cstdlib>
using namespace std;
int hashFunction(char s[]) {
	int m = strlen(s);
		int ans = 0;
		int mul = 1;

		//ans = s[0] * 37^0 + s[1]*37^1 + s[2]*37[2] + ...
		for (int i = 0; i < m; ++i) {
			ans = (ans + (s[i] * mul) % 3) % 3;
			mul = (mul * 37) ;
		}

		int idx = ans % 3;
		return idx;
	}
int main()
{
	char text[] = "iamnotafraidafraidafraid";
	char par[] = "afraid";

	

	int n = strlen(text);
	int m = strlen(par);
	char tmp[m];
	int flag = 1;
	int  cnt;

	int val = hashFunction(par);
	cout << val << endl;

	for(int i=0 ; i < n ; i++){
		int k = 0;
		for(int j = i ; j < i + 6;j++){
               tmp[k] = text[j];
               k++;
		}
		
		 cnt = hashFunction(tmp);
		  if(val == cnt)
		   { 
		  	for(int p = 0; par[p] !='\0' ; p++)
		  	{  
		  		  if(tmp[p] != par[p]){
		  		  	    flag = 0; 
		  		  	    break;
		  		  }
		  		  else
		  		  	 flag = 2;
		    }
	    }
	    if(flag == 2) break;
}
	cout << cnt << endl;
	if(flag == 2)
     cout << true;
 else
 	cout << false;
}