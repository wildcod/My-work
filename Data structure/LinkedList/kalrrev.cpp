#include <iostream>
using namespace std;
class Node{
public:

    int data;
    Node* next;
public:
    Node(int x){
        data = x;
        next  = NULL;
    }
};
Node* insertNode(Node* head,int d){
    Node* temp = new Node(d);
    if(head == NULL){
        head = temp;
        return temp;
    }

    temp->next = head;
    return temp;
}
Node* createNode(){
    Node* head = NULL;
    int n,d;
    cin >> n;
    while(n--){
        cin >> d;
        head = insertNode(head,d);
    }
    return head;
}

void print(Node* head){
    Node* cur = head;
    while(cur){
        cout << cur->data << "->";
        cur = cur->next;
    }
}
Node* reverse(Node* head){
    Node* cur = head;
    Node* prv = NULL;
    Node* ahead = head->next;

    while(cur && ahead){
       cur->next = prv;
        prv = cur;
        cur = ahead;
        ahead = ahead->next;
     }
     cur->next = prv;
     prv =cur;
     head = prv;
     return head;
}
Node* midpoint(Node* head){
	Node* slow = head;
	Node* fast = head;
	while(slow && fast && fast->next && slow->next && fast->next->next ){
		slow = slow->next;
		fast = fast->next->next;
	}

	return slow;
}
Node* kaltreverse(Node* head,int k){
    Node* cur = head;
    Node* prv = NULL;
    Node* ahead = NULL;
    int i = 0;

    while( cur!=NULL && i < k){
    	ahead = cur->next;
    	cur->next = prv;
    	prv = cur;
    	cur = ahead;
    	i++;
    }
    if(head != NULL){
    	head->next = cur;
    }
    i = 0;

    while( i < k-1 && cur!= NULL){
    	cur = cur->next;
    	i++;
    }

    if(cur != NULL){
    	cur->next = kaltreverse(cur->next,k);
    }

    return prv;
}
 int main()
{
  Node* head = NULL;

  head = createNode();

  head = reverse(head);
  
  int k ;
  cin >> k;
  head = kaltreverse(head,k);

  print(head);
}