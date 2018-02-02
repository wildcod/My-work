#include <iostream>
#include <string>
using namespace std;
int main()
{
	string s;
	cin >> s;

	string rem = s.substr(0,0) + s.substr(1); 


	cout << rem;
}