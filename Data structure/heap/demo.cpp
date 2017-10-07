#include <iostream>
#include <queue>
using namespace std;
class compare {
public:
	int operator()(int a,int b){
		return a>b;
	}
};
int main()
{
	priority_queue<int, vector<int>, compare > q;

	int n;
	cin >> n;


	while(n--){
		int d;
		cin >> d;
		q.push(d);
	}

	
		cout << q.top() ;
	
}