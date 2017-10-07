#include <bits/stdc++.h>
using namespace std;
int main()
{    int flag = 0;
   string str;
    cin >> str;
    
    for(int i = 0; i < str.size();i++){
        if(str[i] == 'P') { flag = 1; break;}
    }
    if(flag && (str[0] !='1' || str[1] !='2')){
    for(int  i = 0 ; i < str.size(); i++){
       
          if(str[i] == '1' && str[i] != ':'){
            int n = str[i]-'0';
            n= n+12;
                int r = n % 10;
                n = n/10 ;
            str[i] = char(r+'0');
            str[i-1] = char((n+1) +'0');
        }
       else if(str[i] == '0' ){
            continue;
        }
        else if(str[i] !='0' && str[i] != ':'){
            int n = str[i]-'0';
            n= n+12;
                int r = n % 10;
                n = n/10;
            str[i] = char(r+'0');
            str[i-1] = char(n+'0');
            
        }
        else{
            break;
        }
    }
    }
    else if(flag != 1){
        if(str[0] == '1' && str[1] == '2'){
             for(int i = 0; i< str.size();i++){
                if(str[i] == ':' ) break;
                    str[i] = '0';
             }
        }
    }
   for(int i = 0; i < str.size();i++){
       if(str[i] == 'P' || str[i] == 'A') break;
       cout << str[i];
   }
}