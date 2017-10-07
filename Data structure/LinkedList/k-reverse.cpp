#include <iostream>
using namespace std;
class Node {
public:
	int data;	//public because they need to accessed in multiple functions outside the class
	Node * next;
	Node(int d) {
		data = d;
		next = NULL;
	}
};

void printLL(Node* head) {
	Node * cur = head;
	while (cur != NULL) {
		cout << cur->data << " ";
		cur = cur->next;	//take cur to the next element
	}
	cout << endl;
}

Node* insert(Node* head, int d) {
	Node* tmp = new Node(d);

	if (head == NULL) {
		//empty list
		return tmp;
	}

	// (*tmp).next = head;
	tmp->next = head;
	return tmp;
}

Node* createList() {
	Node * head = NULL;
	int x,d;
	cin >> x;

	while (x--) {
		cin >> d;
		head = insert(head, d);
	}
	return head;
}

int lengthLL(Node * head) {
	int cnt = 0;
	while (head) {
		++cnt;
		head = head->next;
	}
	return cnt;
}
Node* reverse(Node* head){
    Node* prv = NULL;
    Node* cur = head;
    Node* ahead = head->next;
    while(ahead){
        cur->next = prv;
        prv = cur;
        cur = ahead;
        ahead = ahead->next;
    }
    cur->next = prv;
    prv = cur;
   return prv;
}

Node* Kreverse(Node* head){
	Node* temp = NULL;
	int r ;
	cin >> r;

	for(int i = 0 ; i < r;i++){
		if(temp == NULL) temp = head;
		else temp = temp->next;
	}
    Node* ahead = temp->next;
	temp->next = NULL;
	reverse(ahead);
	reverse(head);

	merge(head,ahead);

}
int main()
{
    Node* head = NULL;

    head = createList();

    head = reverse(head);

    printLL(head);
}