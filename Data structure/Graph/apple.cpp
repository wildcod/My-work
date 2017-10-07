#include<iostream>
using namespace std;

int R,C;

void print(char mat[][50]){
	for(int i=0;i<R;i++){
		for(int j=0;j<C;j++){
			cout<<mat[i][j];
		}
		cout<<endl;
	}
	cout<<endl;
}

//Recursion - DFS
void floodFill(char mat[][50],int i,int j,char ch,char color){
	if(i<0||j<0||i>=R||j>=C||mat[i][j]!=ch){
		return;
	}

	mat[i][j] = color;
	print(mat);

	//Call to fill the color on neighbouring cells
	floodFill(mat,i+1,j,ch,color);
	floodFill(mat,i,j+1,ch,color);
	floodFill(mat,i-1,j,ch,color);
	floodFill(mat,i,j-1,ch,color);

}


int main(){
	char mat[50][50];
	cin>>R>>C;


	for(int i=0;i<R;i++){
		for(int j=0;j<C;j++){
			cin>>mat[i][j];
		}
	}

	print(mat);

	floodFill(mat,8,13,'.','R');

	print(mat);


}