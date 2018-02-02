#include <iostream>
#include <list>
#include <stack>
using namespace std;
class Graph{
	int nv;
	list<int> *addlist;
public:
	Graph(int v){
		nv = v;
		addlist = new list<int>[nv+1];
	}

	addEdge(int u,int v){
		addlist[u].push_back(v);
	}

	void topo(int src,bool* visited,stack<int> &S){
		visited[src] = true;

		for(int node:addlist[src]){
			if(visited[node] == false)
				topo(node,visited,S);
		}
		S.push(src);
	}

	void topological(int src){
		bool* visited = new bool[nv+1];

		fill(visited,visited+nv+1,0);

		stack<int> S;

		for(int i=src;i<=nv;i++){
			if(visited[i] == false)
				topo(i,visited,S);
		}

		while(S.empty() == false){
			cout << S.top() << " ";
			S.pop();
		}
	}
};
 int main()
 {
     Graph g(6);

     g.addEdge(5,2);
     g.addEdge(5,0);
     g.addEdge(2,3);
     g.addEdge(3,1);
     g.addEdge(4,0);
     g.addEdge(4,1);

     g.topological(0);
 }