#include <iostream>
#include <list>
#include <utility>
using namespace std;

typedef pair<int,int> p;

class Graph{
	int nv;
	list<p> *addlist;

	Graph(int n){
		nv = n;
		addlist = new list<p>[nv+1];
	}

	void addEdge(int u,int v,int wt){
		addlist[u].push_back(make_pair(v,wt));
	}

	void dfs(int src,bool* visited){
        visited[src] = true;

        cout << src << " ";

         
       for(int node:addlist[src]){
       	if(visited[node] == false)
       	   dfs(node,visited);
       }
   
    }

    int mincost(int src){
            const int inf = 10000000;

        bool *visited = new bool[nv+1];

        fill(visited,visited+nv+1,0);

        for(int i = src;i<=nv;i++){
        	dfs(i,visited);
        }
    }
};
int main()
{
   Graph g(3);

   g.addEdge(1,2,1);
   g.addEdge(2,3,1);
   g.addEdge(1,3,1);

   cout << g.mincost(1);
}