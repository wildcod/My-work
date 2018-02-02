#include <iostream>
#include <list>
#include <utility>
#include <queue>
using namespace std;
typedef pair<int ,int> ll;
class Graph{
	int v;
	list<ll> *addlist;
   class comp{
   public:
	bool operator()(const ll& A ,const ll& B){
		return A.second > B.second;
	}
};
public:
	Graph(int n){
        v = n ;
        addlist = new list<ll>[v+1];
	}

	void addEdge(int u,int v,int wt){
		addlist[u].push_back(make_pair(v,wt));
	}

	int dijkstar(int src,int dest){
		priority_queue<ll, vector<ll> > pq;
		int *dist = new int[v+1];

		const int inf = 1000000;

		fill(dist,dist+v+1,inf);

		dist[src] = 0;
		pq.push(make_pair(src,0));

		while(pq.empty() == false){
			ll cur = pq.top();
			pq.pop();

			int curver = cur.first;
			int curwt = cur.second;

			if(dist[curver] < curwt) continue;

			dist[curver] = curwt;

			for(ll neighbour:addlist[curver]){
                   int wtfsrc = dist[curver] + neighbour.second;

                   if(dist[neighbour.first] < wtfsrc) continue;

                   	pq.push(make_pair(neighbour.first,wtfsrc));
			} 
		}
	   int ans = dist[dest];
	   delete[] dist;
	   return ans;
	}
};
int main()
{
	Graph g(5);
    g.addEdge(1,2,4);
    g.addEdge(1,3,1);
    g.addEdge(3,2,2);
    g.addEdge(2,5,4);
    g.addEdge(3,4,4);
    g.addEdge(4,5,4);

    cout << g.dijkstar(1,4);

}