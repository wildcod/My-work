
#include <iostream>
#include <list>
using namespace std;
 

class Graph
{
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

bool DLS(int src, int target, int limit)
{
    if (src == target)
        return true;
 
    if (limit <= 0)
        return false;
 
    for (list<int> :: iterator i = addlist[src].begin(); i != addlist[src].end(); ++i)
       if (DLS(*i, target, limit-1) == true)
          return true;
 
     return false;
}
 
bool IDDFS(int src, int target, int max_depth)
{
   
    for (int i = 0; i <= max_depth; i++)
       if (DLS(src, target, i) == true)
          return true;
 
    return false;
}

};

int main()
{
     Graph g(7);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 5);
    g.addEdge(2, 6);

    cout << boolalpha << g.IDDFS(0,9,3);
}