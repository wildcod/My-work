#include <iostream>
#include "stack.h"
using namespace std;
int main()
{
	Stack s;

	while(true){
		int d;
		cin >> d;
		if(d != -1){
              s.Push(d);
		}
		else break;
	}

	// cout << s.getfront() << endl;
	// s.Pop();
	// cout << s.getfront();

	cout << s.maxelement();
}