#include <iostream>
#include <list>
#include <map>
#include <cstring>
using namespace std;
template<typename T>
class Graph{
     map<T , list<T> > addlist; // map of pair fisrt: key and second: cities
public:
    Graph(){

    }

   void addedge(T u,T v, bool rev = true ){
   	   addlist[u].push_back(v);
   	   if(rev){
   	   	addlist[v].push_back(u);
   	   }
   }

   void printgraph(){
   	 for(pair<T, list<T> > row:addlist){
   	 	T key = row.first;
   	 	cout << key << "->";
   	 	for(T element:row.second){
   	 		cout << element << ",";
   	 	}
   	 	cout << endl;
   	 }
   	}
};
int main()
{
  Graph<string> g;

  g.addedge("delhi","mumbai");
  g.addedge("delhi","kolkata");
  g.addedge("kolkata","jaipur");
  g.addedge("jaipur","delhi");

  g.printgraph();

}
