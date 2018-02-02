#include <iostream>
#include <list>
using namespace std;
int v;
class Graph{
	
    list<int> *addlist;
public:

    Graph(int n){
      v = n;
      addlist = new list<int>[v+1];
    }

    void addEdge(int u,int v,bool bidir=true){
    	addlist[u].push_back(v);
    	if(bidir) addlist[v].push_back(u);
    }

    void dfs(int src,bool* visited){
        visited[src] = true;

        cout << src << " ";

         
       for(int node:addlist[src]){
       	if(visited[node] == false)
       	   dfs(node,visited);
       }
   
    }
};
int main()
{
	Graph g(5);

	g.addEdge(1,2);
	g.addEdge(1,3);
	g.addEdge(1,4);
	g.addEdge(3,5);
	g.addEdge(2,4);
	g.addEdge(3,4);

	bool* visited = new bool[v+1];

	for(int i = 0 ; i<v;i++) visited[i] = false;

	g.dfs(1,visited);

}