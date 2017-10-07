#include <iostream>
#include <queue>
using namespace std;
//  class comp{
//    public:
//     bool operator()(int A ,int B){
//         return A> B;
//     }
// };
 int main()
{
     priority_queue<int ,vector<int> > pq;
     pq.push(9);   
     pq.push(8); 
     pq.push(7); 
     pq.push(6);

     cout << pq.top();  
}