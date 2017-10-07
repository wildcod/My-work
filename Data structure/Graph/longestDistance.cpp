#include <iostream>
#include <list>
#include <stack>
using namespace std;
typedef pair<int ,int> ll;
class Graph{
	int nv;
	list<ll> *addlist;
public:
	Graph(int v){
		nv = v;
		addlist = new list<ll>[nv+1];
	}

	addEdge(int u,int v,int wt){
		addlist[u].push_back(make_pair(v,wt));
	}

	void topo(int src,bool* visited,stack<int> &S){
		visited[src] = true;

		for(ll node:addlist[src]){
			if(visited[node.first] == false)
				topo(node.first,visited,S);
		}
		S.push(src);
	}

	void topological(int src){
		bool* visited = new bool[nv+1];
		int *dist = new int[nv+1];

		fill(visited,visited+nv+1,0);

		stack<int> S;

		for(int i=src;i<=nv;i++){
			if(visited[i] == false)
				topo(i,visited,S);
		}

		// while(S.empty() == false){
		// 	cout << S.top() << " ";
		// 	S.pop();
		// }
		int NINF = -10000;
		for (int i = 0; i < nv; i++)
                dist[i] = NINF;
            dist[src] = 0;


    while (S.empty() == false)
    {

        int u = S.top();
        S.pop();

        if (dist[u] != NINF)
        {
          for (ll cur:addlist[u])
             if (dist[cur.first] < dist[u] + cur.second)
                dist[cur.first] = dist[u] +  cur.second;
        }
    }
     for (int i = 0; i < nv; i++){
        (dist[i] == NINF)? cout << "INF ": cout << dist[i] << " ";
    }

}
};
 int main()
 {
     Graph g(6);

     g.addEdge(5,2,2);
     g.addEdge(5,0,4);
     g.addEdge(2,3,5);
     g.addEdge(3,1,4);
     g.addEdge(4,0,9);
     g.addEdge(4,1,10);

     g.topological(0);
 }

