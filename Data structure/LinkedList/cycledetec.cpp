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
bool cycledetect(Node* head){
    Node* slow = head;
    Node* fast = head;

    while(slow && fast && slow->next && fast->next && fast->next->next){
        slow = slow->next;
        fast = fast->next->next;
        if(slow == fast) return true;
    }
    return false;
}
int main()
{
    Node* head = NULL;

    head = createNode();

    head = reverse(head);


   cout << boolalpha << cycledetect(head);
}