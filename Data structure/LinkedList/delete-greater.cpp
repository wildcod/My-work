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
int countlist(Node* head){
    Node* cur = head;
    int i =0;
    while(cur){
        cur = cur->next;
        i++;
    }

    return i;
}
Node* deleteGreater(Node* head){
    Node* cur = head;
    Node* prv = NULL;
    Node* ahead = head->next;

    while(cur && ahead && cur->next && ahead->next && ahead->next->next ){

     if(ahead->data > cur->data){
        if(prv == NULL){
            head = head->next;
            Node* temp = cur;
            prv = ahead;
            cur = ahead->next;
            ahead = ahead->next->next;
            delete temp;
        }
        else{
            Node* temp = cur;
            prv->next = ahead;
            prv = ahead;
            cur = ahead->next;
            ahead = ahead->next->next;
            delete temp;
        }
     }
     else{
        prv = cur;
        cur = ahead;
        ahead = ahead->next;
     }
    }

    return head;
}
int main()
{
    Node* head = NULL;

    head = createNode();

    head = reverse(head);

    head = deleteGreater(head);

    print(head);
}