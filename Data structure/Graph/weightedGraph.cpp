#include <iostream>
#include <utility>
#include <list>
using namespace std;
typedef pair<int,int> ll;
class Graph{
public:
	int nv;
	list<ll>* addlist;
public:

	Graph(int n){
		nv = n;
		addlist = new list<ll>[nv+1];
	}

	void addEdge(int u,int v,int wt){
		addlist[u].push_back(make_pair(v,wt));
	}

	void print(int dest){
      ll cur = addlist[dest];
       
        cout << cur << " " << curWt;

	}

  
};
int main()
{
        Graph g(3);

        g.addEdge(1,2,10);
        g.addEdge(1,3,20);

        g.print(1);
 }