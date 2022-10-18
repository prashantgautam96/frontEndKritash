#include <iostream>
using namespace std;


class Node{
    int data;
    Node* prev;
    Node* next;
    Node* curr;

    Node(int val){
        data= val;
        prev=NULL;
        next=NULL;
        curr=NULL;
    }
}

Node* addPrev(Node* root){

    if(root==NULL){
        return nullptr;
    }

    Node* dummy = new Node(-1);
    Node* p= dummy;

  while(head->next!=NULL){
    head->prev=p;

    head=head->next;
    p=head;
    
  }


}


int main(){


    return 0;
}