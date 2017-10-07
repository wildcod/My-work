#include <iostream>
#include <string>
using namespace std;

void stringper(string s,string dec){
	if(s.size()==0){
		cout << dec << endl;
	}

	for(int i=0;i<s.size();i++){
		string rem = s.substr(0,i)+s.substr(i+1);
		string md = dec + s[i];
		stringper(rem,md);
	}
}
int main()
{
	string str;
	cin >> str;

	stringper(str,"");
}