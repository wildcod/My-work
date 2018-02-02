#include <iostream>
#include <cstring>
using namespace std;
int lps[100];
void kmp(char text[],int texlen,char pat[],int patlen){
	int i = 0;
	int j = 0;

	while(i < texlen){
		if(pat[j] == text[i]){
			i++;
			j++;
		}
		if(j == patlen){
			cout << "found at" << i-j;
			break;
		}
		 if(i < texlen &&  pat[i] != text[j]){
			if(j!=0)
				j = lps[j-1];
			else
				i++;
		}
	}
}
void prefix(char pat[],int n){
	int i = 1;
	int j = 0;

	lps[0] = 0;

	while(i < n){
          if(pat[j] == pat[i]){
          	  lps[i] = j+1;
          	  i++;
          	  j++;
          }

          else{
                 if(j!=0 ){
          	          j = lps[j-1];
          }
                   else{
          	          lps[i] = 0;
          	           i++;
          }
      } 

	}
}
int main()
{
	char text[] = "ABABDABACDABABCABAB";
	char pat[] = "ABABCABAB";

	int patlen = strlen(pat);
	int texlen = strlen(text);

	prefix(pat,patlen);

	kmp(text,texlen,pat,patlen);
	return 0;
}