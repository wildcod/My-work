#include <iostream>
#include "list.h"
using namespace std;

Node* addlist(Node* head1,Node* head2){

	Node* temp1 = head1;
	Node* temp2 = head2;

	int n1 = 0,n2 = 0;
    
	while(temp1){
        n1 = n1 * 10 + temp1->data;
        temp1 = temp1->next;
	}

	while(temp2){
        n2 = n2 * 10 + temp2->data;
        temp2 = temp2->next;
      
	}

	cout << n1 << " " << n2 << " ";

	int sum = n1+n2;
	temp1 = head1;

	while(sum != 0){
		int r = sum % 10;

		temp1->data = r;
		temp1 = temp1->next;

		sum = sum/10;
       
	}

	return head1;

}

int main()
{
	Node* head1 = NULL;
	Node* head2 = NULL;


	head1 = createNode();
	head2 = createNode();

	head1 =  addlist(head1,head2);
	print(head1);
}