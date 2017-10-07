#ifndef _GRAPH_H
#define _GRAPH_H
#include <iostream>
#include <list>
#include <queue>
using namespace std;
typedef   list<int> :: const_iterator ll;
class Graph{
   list<int> *adjlist;
   int nV;
public:
     Graph(int n)
     {
        nV = n;
        adjlist = new list<int>[nV+1];
     }
     void addEdge(int v1,int v2){
	adjlist[v1].push_back(v2);
	adjlist[v2].push_back(v1);
}

void printGraph()
{
	for(int i=1; i<=nV;i++){
		cout << i << ":";
		const list<int>& l = adjlist[i];
	for(  ll it = l.begin() ; it != l.end(); ++it ){
		int curver = *it;
		cout << curver << "-->";
	}
	cout << endl;
	}
}

void dfs(int src,bool* visited){

	visited[src] = true;
	cout << src << " ";

	for(ll it = adjlist[src].begin(); it!= adjlist[src].end();++it){
		int curVer = *it;
		if(visited[curVer] == false){
			dfs(curVer,visited);
		}
	}
}
void bfs(int src){
	bool* visited = new bool[nV+1];

	for(int i = 0; i < nV+1 ; i++) visited[i] = 0;

		queue<int> q;
	   visited[src] = true;
	   q.push(src);
	   while(q.empty() == false){
	   	     int cur = q.front();
	   	     q.pop();
	   	     cout << cur << " ";
	   	     for(list<int> :: iterator it = adjlist[cur].begin() ; it!= adjlist[cur].end();++it ){
	   	     	int curvar = *it;
	   	     	if(visited[curvar] == false){
	   	     		visited[curvar] = true;
	   	     		q.push(curvar);
	   	     	}
	   	     }
	   }
	   delete [] visited;
}

bool isconnected(int src){

	bool* visited = new bool[nV+1];
	for(int i=0;i<nV+1;i++) visited[i] = 0;

		int cnt = 0;

		for(list<int> :: iterator it = adjlist[src].begin() ; it!= adjlist[src].end();++it ){
                      int val = *it;
                      if(visited[val] == false){
                      	  dfs(src,visited);
                      	  cnt++;
                      }
		}

       delete [] visited;
		if(cnt >= 2){
			return true;
		}
		else return false;

}
bool iscycle(int src,bool* visited,int parent){
	visited[src] = true;
	//cout << src << " ";

	for(ll it = adjlist[src].begin(); it!= adjlist[src].end();++it){
		int curVer = *it;
		if(visited[curVer] == false){
			if(iscycle(curVer,visited,src)) 
				return true;
			

		}
		else if(curVer != parent) return true;
	}
	return false;
	
}
int shortestDistance(int src, int dest) {
		int* dist = new int[nV + 1];
		bool *visited = new bool[nV + 1];

		//setting the initials
		fill(dist, dist + nV + 1, 0);
		fill(visited, visited + nV + 1, false);

		queue<int> q;
		q.push(src);
		visited[src] = true;
		dist[src] = 0;

		while (q.empty() == false) {
			int curVer = q.front();
			q.pop();

			for (list<int> :: iterator it = adjlist[curVer].begin(); it != adjlist[curVer].end(); ++it) {
				int curNeighbor = *it;
				if (visited[curNeighbor] == false) {
					visited[curNeighbor] = true;
					dist[curNeighbor] = 1 + dist[curVer];	//setting the distance
					q.push(curNeighbor);
				}
			}
		}

		int ans = dist[dest];
		
		return ans;
	}
};
#endif