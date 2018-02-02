#include <iostream>
#include "stack.h"
using namespace std;
int main()
{
	Stack s;

	long long int t,d;
	cin >> t;
	while(t-- && t > 0){
		int q;
		cin >> q;
		if(q == 1){
           cin >> d;
           s.Push(d);
		}
		else if(q == 2){
			s.Pop();
		}
		else cout << s.maxelement() << endl;
	}
}