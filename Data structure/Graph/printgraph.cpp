#include <iostream>
#include <list>
using namespace std;
class Graph{
	int n;
	list<int>* adlist;
public:
	Graph(int V){
		n = V;
		adlist = new list<int>[n];
	}

	void addEdge(int u,int v){
		adlist[u].push_back(v);
		adlist[v].push_back(u);
	}
	void printgraph(){
		for(int i = 1 ; i <= n ; i++){
			cout << i << "->";

			for(int node:adlist[i]){
				cout << node<<"->";
			}
			cout << "endl";
		}
	}
};
int main()
{
  Graph g(5);

  g.addEdge(1,2);
  g.addEdge(2,3);
  g.addEdge(3,4);
  g.addEdge(4,5);

  g.printgraph();
}
