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
Node* myswap(Node* head,int n,int m ){
    Node* cur = head;
    Node* p = NULL;
    Node* q = NULL;
    Node* temp1 = NULL;
    Node* temp2 = NULL;

    while(cur){
       if(cur->data == n){
       temp1 = cur;
       break;
       }
       p = cur;
       cur = cur->next;
    }
    cur = head;
    while(cur){
       if(cur->data == m){
        temp2 = cur;
        break;
       }
       q = cur;
       cur = cur->next;
    }
    if(p != NULL){
        p->next = temp2;
    }
    else head = temp2;

    if(q != NULL){
       q->next  = temp1;
    }
    else head = temp1;


    Node* tmp = temp2->next;
    temp2->next = temp1->next;
    temp1->next = tmp;

    return head;
}
int main()
{
   Node* head = NULL;

   head = createNode();

   head = reverse(head);

   int k,l;
   cin >> k >> l;

   head = myswap(head,k,l);

   print(head);
}