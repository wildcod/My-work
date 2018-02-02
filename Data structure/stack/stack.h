#ifndef _STACK_H
#define _STACK_H

class Stack{
	long int top;
	long int* arr;

public:
	Stack()
	{
		top = -1;
		arr = new long int[100];
	}
	~Stack(){
		delete []arr;
	}
	void Push(int x){
		if(top < 100){
			top++;
		arr[top] = x;
	}
	else return ;

	}

	void Pop(){
		if(top == -1) return ;
         top--;
	}
	int getfront(){
		if(top == -1) return -1;
		else return arr[top];
	}
	int maxelement(){
		long int dummy = top;
		long int mymax = -100000000;
		while(dummy != -1){
			if(arr[dummy] > mymax) mymax =arr[dummy];
			dummy--;
		}
		return mymax;
	}
};
#endif