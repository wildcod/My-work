#include <iostream>
#include <list>
#include <queue>
#include <utility>
using namespace std;
typedef pair<int,int> ll;
class Graph{
	int nv;
	list<ll> *adjlist;

public:

	Graph(int n){
		nv = n;
		adjlist = new list<ll>[nv+1];
	}

	class comp{
	public:
		bool operator()(const ll& a,const ll & b){
			return a.second>b.second;
		}
	};

	void addEdge(int u,int v,int wt){
		adjlist[u].push_back(make_pair(v,wt));
	}

	void dijkstar(int src){
		
		 int *dist = new int[nv+1];
      
		 priority_queue<ll, vector<ll> ,comp> pq;

         const int inf = -100000;
		
		 fill(dist,dist+nv+1,inf);
		

	
		 dist[src] = 0;
		
		 pq.push(make_pair(src,0));

		 while(pq.empty() == false){
		 	ll cur = pq.top();
		 	pq.pop();
		 	int curver = cur.first;
		 	int curwt = cur.second;

		 	for(list<ll> :: iterator it = adjlist[curver].begin() ; it != adjlist[curver].end(); it++){
		 		ll node = *it;
		 		if( dist[node.first] < node.second){//
		 			dist[node.first] = dist[curver] + node.second;
		 			pq.push(make_pair(node.first,dist[node.first]));
		 		}
		 	}
		 }

        cout << "shortest distance " << dist[5];

	}
};

int main()
{
   Graph g(5);

   // g.addEdge(1,2,2);
   // g.addEdge(1,3,1);
   // g.addEdge(1,4,5);
   // g.addEdge(2,3,3);
   // g.addEdge(3,5,4);
   // g.addEdge(4,5,9);


   g.addEdge(1,2,-1);
   g.addEdge(1,3,-4);
   g.addEdge(1,4,-4);
   g.addEdge(2,3,-1);
   g.addEdge(3,5,-2);
   g.addEdge(4,5,-3);
   
   g.dijkstar(1);
}