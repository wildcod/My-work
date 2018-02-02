#include <iostream>
#include <list>
using namespace std;

typedef list<int>:: iterator ll;

class Graph{
	int nv;
	list<int> *addlist;
public:

	Graph(int n){
		nv = n;
		addlist = new list<int>[nv+1];
	}

	void addEdge(int u,int v){
		addlist[u].push_back(v);
	}

	void Dfs(int src, bool *visited){
		visited[src] = true;

		for(ll it = addlist[src].begin(); it != addlist[src].end(); it++){
			int node = *it;
          if(visited[node] == false){
          	Dfs(node,visited);
          }
		}
	}

	int mothervertex(int src){
		bool *visited = new bool[nv+1];

		int mv = 0;
        
     fill(visited,visited+nv+1,0);

   for(int i = 0; i < nv ; i++){
   	if(visited[i] == false){
       Dfs(i,visited);
       mv = i;
     }
   }

       fill(visited,visited+nv+1,0);

       Dfs(mv,visited);

       for(int i = 0 ; i < nv ; i++){
       	   if(visited[i] == false) return -1;
       }

       return mv;
   }
};

int main()
{
	  Graph g(7);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(4, 1);
    g.addEdge(6, 4);
    g.addEdge(5, 6);
    g.addEdge(5, 2);
    g.addEdge(6, 0);

	  cout << g.mothervertex(1);

}