#include <iostream>
#include "graph.h"
using namespace std;
int main()
{
	Graph g(5);

	g.addEdge(1,0);
	g.addEdge(2,1);
	g.addEdge(2,0);
    g.addEdge(0,3);
	g.addEdge(3,4);
//	g.addEdge(4,5);
	// g.addEdge(3,5);

	 bool* visited = new bool[5+1];

	 for(int j =0 ;j< 5;j++) visited[j] = 0;



      cout << boolalpha << g.iscycle(1,visited,-1);
}