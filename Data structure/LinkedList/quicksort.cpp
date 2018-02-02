#include <iostream>
#include "list.h"
using namespace std;

Node* pindex(Node* head,Node* end,Node* newhead,Node* newend){
	Node* cur = head;
	Node* prv = NULL;
	Node* tail = newend;
	

}

Node* quicksort(Node* head,Node* end){
    Node* newhead = NULL;
    Node* newend = NULL;
	if(!head || head == end) return head;
	Node* pivot = pindex(head,end,newhead,newend);

	Node* temp = head;

	while(temp->next != pivot){
		temp = temp->next;
	}
	temp->next = NULL;
	quicksort(head,temp);
	quicksort(pivot->next,end);
}

int main()
{
   Node* head = NULL;

   head = createNode();

   head = reverse(head);

   Node* temp = head;
   while(temp->next){
   	temp = temp->next;
   }

   head = quicksort(head,temp);
}