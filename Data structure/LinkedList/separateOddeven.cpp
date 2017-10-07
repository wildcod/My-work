#include <iostream>
#include "list.h"

using namespace std;

Node* arrange(Node* head){
    Node* temp = head;
    Node* cur = head;

    while(temp->next){
        temp = temp->next;
    }

    Node* ahead = temp;

    while(cur != temp){
         
         if(cur->data % 2 != 0){
            Node* tmp = cur->next;
            ahead->next = cur;
            cur->next = NULL;
            ahead = ahead->next;
            cur = tmp;
         }
         else
           cur = cur->next;
    }
    return ahead;
}

int main()
{
   Node* head = NULL;

   head = createNode();

   head = reverse(head);

   head = arrange(head);

   print(head);
}