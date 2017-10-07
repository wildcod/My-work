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
Node* realmerge(Node* link1,Node* link2){
	Node* link = NULL;

	while(link1 && link2){
		Node* temp = NULL;
		if(link1->data >= link2->data){
              temp = new Node(link2->data);
              link2 = link2->next;
		}
		else{
			temp = new Node(link1->data);
			link1 = link1->next;
		}
		temp->next = link;
		link = temp;
	}
	while(link1 != NULL){
		Node* temp = NULL;
		  temp = new Node(link1->data);
		  temp->next = link;
		  link = temp;
		  link1 = link1->next;
	}
	while(link2 != NULL){
		Node* temp = NULL;
		  temp = new Node(link2->data);
		  temp->next = link;
		  link = temp;
		  link2 = link2->next;
	}
   
	return link;
}
Node* mergesort(Node* head){
	if( head->next == NULL){
		return head;
	}
	Node* mid = midpoint(head);
	Node* left = head;
	Node* right = mid->next;
	mid->next = NULL;

	left = mergesort(left);
	right = mergesort(right);
	return realmerge(left,right);
}
int main()
{
   Node* head = NULL;
   Node* ahead = NULL;
   Node* temp  =NULL;

   head = createNode();
   ahead = createNode();

   head = reverse(head);
   ahead = reverse(ahead);



   temp = realmerge(ahead,head);

   temp = reverse(temp);

   print(temp);
}