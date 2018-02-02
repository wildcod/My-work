#include <iostream>
#include "stack.h"
using namespace std;

int main()
{
  Stack s;
  int n;
  cin >> n;

  while(n--){
  	int d;
  	cin >> d;
  	s.Push(d);
  }
  cout << s.getfront();
}