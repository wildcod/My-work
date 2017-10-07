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


Node* create(Node* head,int arr[],int i){
	int flag = 0;
	Node* temp = NULL;
    Node* loop = head;
    while(loop){
	if(loop->data != -1){
		int d = loop->data;
		Node* tmp = new Node(d);
		tmp->next = temp;
		temp = tmp;
		flag = 1;
	}
	loop = loop->next;
}
if(flag){
   Node* my = temp;
   while(temp->next){
   	    temp = temp->next;
    }
   
   for(int j = i-1; j >= 0 ;j--){
   	    int cur = arr[j];
   	    Node* even = new Node(cur);
   	   	    temp->next = even;
   	   	    temp = temp->next;
   }

   temp = my;
}
else{
	 for(int j = 0; j < i ;j++){
   	    int cur = arr[j];
   	    Node* even = new Node(cur);
   	   	    even->next = temp;
   	   	    temp = even;
   }

}

   return temp;
}
int  shiftOddEle(Node*& head,int arr[]){
	int i = 0;
	Node* cur = head;
	while(cur){
		if(cur->data % 2 == 0){
			arr[i++] = cur->data;
			cur->data = -1;

		}
		cur = cur->next;
	}
	delete cur;
	return i;
}
Node*  LLoddeven(Node* head,int arr[]){
	if(head == NULL) return NULL ;

   int i = shiftOddEle(head,arr);

    Node* newhead = create(head,arr,i);

   return newhead;
}
int main()
{

	int t ;
	cin >> t;
	while(t--){
	Node* head = NULL;
	int arr[20] = {};

	head = createList();

	head = LLoddeven(head,arr);

	printLL(head);
}
}