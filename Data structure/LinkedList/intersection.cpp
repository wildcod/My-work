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
int finalcheck(int d,Node* head1,Node* head2){

      Node* cur1 = head1;
      Node* cur2 = head2;

      for(int i = 0 ; i < d ; i++){
           cur1 = cur1->next;
      }

      while( cur1 && cur2){

        if(cur1 == cur2){
            return cur1->data;
        }
        cur1 = cur1->next;
        cur2 = cur2->next;
      }
      return -1;
}
int  checkintersection(Node* list1,Node* list2){
     int d;
    int c1 = countlist(list1);
    int c2 = countlist(list2);

    if( c1 > c2){
        d = c1 - c2;
        return finalcheck(d,list1,list2);
    }
    else{
        d = c2 - c1;
        return finalcheck(d,list2,list1);
    }
}
int main()
{
    Node* list1 = NULL;
    Node* list2 = NULL;

    list1 = createNode();
    list2 = createNode();

    list1 = reverse(list1);
    list2 = reverse(list2);

    Node* temp = list1;
    while(temp->next != NULL){
        temp = temp->next;
    }
        
    temp->next = list2->next;

    print(list1);

    cout  << " "  <<  checkintersection(list1,list2);

}
