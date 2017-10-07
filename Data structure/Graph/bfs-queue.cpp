#include <iostream>
using namespace std;
class Graph{
	int nv;
	list<int> *adjlist;

	Graph(int n){
		nv = n;
		adjlist = new list<int>[nv+1];
	}

	void addEdge(int u,int v){
		adjlist[u].push_back(v);
		adjlist[v].push_back(u);
	}

	void dfs(int src,bool  *visited){
		visited[src] = true;

		for(list<int>:: iterator it = adjlist[src].begin(); it != adjlist[src].end() ; it++){
			int node = *it;
			if(visited[node] == false){
				dfs(node,visited);
			}
		} 
	}

	void topology(int src){
		int con[20] = {0};
		int a[20];
		bool *visited = new bool[nv+1];

		for(int i = 0 ; i < nv ; i++){
			cin >> a[i];
		}

		fill(visited,visited+nv+1,0);

		for(int i = 0 ; i < nv ; i++){
	     if(visited == false){
			 dfs(a[i],visited);
	     }
	     con[i]++;
		}

		for(int i = 0; i<nv ; i++){
			if(con[a[i]] == 0){
				q.push(a[i]);
			}
		}
	}
};
int main()
{
	Graph g(8);

	g.adjlist(7,8);
	g.adjlist(7,11);
	g.adjlist(5,11);
	g.adjlist(11,2);
	g.adjlist(11,9);
	g.adjlist(3,8);
	g.adjlist(3,10);
	g.adjlist(8,9);
	g.adjlist(11,10);

}