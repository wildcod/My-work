#include <iostream>
#include <cstring>
using namespace std;

void search(char text[],char patt[],int z[]){
	char newtext[100];
	int d = strlen(patt);
	int i,j=0;

	for( i = 0;i < d;i++){
		newtext[i] = patt[i];
	}
	newtext[i++] = '$';
    int size = strlen(text);

    while(size >= 0){
        newtext[i] = text[j];
        j++;
        i++;
        size--;
    }
    cout << newtext;
    int cnt = 1;
    z[0] = 0;
   int m = strlen(newtext);
   int s = m;
   int p =0;
   int q=1;
   while(m >= 0){
   	if(newtext[p] == newtext[q]){
   		int x = p+1;
   		int y = q+1;
   		while(newtext[x] == newtext[y]){
   			cnt++;
   			x++; y++;
   		}
   	}
   	if(cnt > 1){
   		z[q] = cnt;
   		p = 0;
   		q++;
   		cnt = 1;
   	}
   	else if(cnt == 1){
   		z[q] = 0;
       q++;
   	}
   	m--;
   }
   
  
for(int k = 1; k < s ; k++){
	if(z[k] == d){
		cout << k-(d+1) <<" ";
	}
}


}

int main()
{
	char text[] = "abcabcabcabcabc";
	char patt[] = "abc";

	int z[100];

	search(text,patt,z); 
}