#include <iostream>
#include <list>
#include <stack>
using namespace std;
typedef list<int> :: iterator ll;
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

	void dfsit(int src){
		bool *visited = new bool[nv+1];
  
       fill(visited,visited+nv+1,0);

	   visited[src] = true;

	   stack<int> s;

	   s.push(src);

	   while(s.empty() == false){
	   	int cur = s.top();
	   	cout << cur << " ";
	   	s.pop();

	   	  for(ll it = addlist[cur].begin(); it != addlist[cur].end();it++){
             if(visited[*it] == false){
             	visited[*it] = true;
             	s.push(*it);
             }

	   	  }
	   	}



	   
	}
};
 int main()
 {
 	 Graph g(5); 
    g.addEdge(1, 0);
    g.addEdge(0, 2);
    g.addEdge(2, 1);
    g.addEdge(0, 3);
    g.addEdge(1, 4);

    g.dfsit(0);
 }