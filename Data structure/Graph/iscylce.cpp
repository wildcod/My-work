#include <bits/stdc++.h>
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

	bool iscycleutil(int src,bool*visited,bool*recstack){
		visited[src] = true;
		recstack[src] = true;

       for(ll it = addlist[src].begin(); it != addlist[src].end() ; it++){
       	    if(visited[*it] == false){
                   iscycleutil(*it,visited,recstack);}
             
             else if(recstack[*it]) return true;
       }
       recstack[src] = false;
       return false;
	}

	bool iscycle(int src){
		  bool *visited = new bool[nv+1];
		  bool *recstack = new bool[nv+1];

		  fill(visited,visited+nv+1,0);
		  fill(recstack,recstack+nv+1,0);


		  for(int i = 0; i< nv; i++){

		  	if(iscycleutil(i,visited,recstack)){
		  		return true;
		  	}
		  }
		  return false;
	}
};
int main()
{
   Graph g(4);
    g.addEdge(0, 1);
    //g.addEdge(0, 2);
   // g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
   // g.addEdge(3, 3);
    cout << boolalpha << g.iscycle(0);
}