#include <stdio.h>
#include <malloc.h>
// DEFINICION DE LISTA
typedef struct _SNodo{
  int dato;
  struct _SNodo* sig;
}SNodo;

typedef SNodo* Slist;

Slist slist_crear() {
  return NULL;
}

Slist slist_agregar_final(Slist l,int dato){
  SNodo *nuevo=malloc(sizeof(SNodo));
  nuevo->dato=dato;
  nuevo->sig=NULL;
  if(l==NULL){
    return nuevo;
  }
  SNodo* temp=l;
  for(;temp->sig!= NULL;temp=temp->sig);
  temp->sig=nuevo;
  return l;
}

int slist_logitud(Slist l){
  int longitud;
  for(;l!=NULL;l=l->sig,longitud++);
  return longitud;
}
void slist_mostrar(Slist l){
  for(;l!=NULL;l=l->sig){
    printf("%d->",l->dato);
  }
  printf("null\n");
}



Slist merge(Slist l1,Slist l2){
  //caso base
  Slist listaOrd;
  if(l1->dato<l2->dato){
    listaOrd=l1;
    l1=l1->sig;
  }
  else{
    listaOrd=l2;
    l2=l2->sig;
  }

Slist temp=listaOrd;
  for(;l1 != NULL && l2 != NULL;){
    if(l1->dato<l2->dato){
      temp->sig=l1;
      l1=l1->sig;
    }
    else{
      temp->sig=l2;
      l2=l2->sig;
    }
    temp=temp->sig;
  }
  if(l1 == NULL){
    temp->sig=l2;
  }
  else{
    temp->sig=l1;
  }

  return listaOrd;
}



void partir(Slist lista,Slist* l1,Slist* l2,int m){
  *l1=lista;
  for(int i=1;i < m;i++,lista=lista->sig);
  *l2=lista->sig;
  lista->sig=NULL;
}

Slist mergeSort(Slist lista,int l){
  if(l>1){
    printf("\n\n");
    // slist_mostrar(lista);

    Slist l1,l2;
    int m = l/2;

    partir(lista,&l1,&l2,m);

    // printf("l1: ");slist_mostrar(l1);printf(" .. %d\n",m);
    // printf("l2: ");slist_mostrar(l2);printf(" .. %d\n",l-m);

    l1 = mergeSort(l1,m);
    l2 = mergeSort(l2,l-m);

    lista = merge(l1,l2);
    return lista;
  }
  return lista;
}
int main() {
  Slist lista1=slist_crear();
  lista1=slist_agregar_final(lista1,12);
  lista1=slist_agregar_final(lista1,10);
  lista1=slist_agregar_final(lista1,11);
  lista1=slist_agregar_final(lista1,5);
  lista1=slist_agregar_final(lista1,-1);
  lista1=slist_agregar_final(lista1,3);
  lista1=slist_agregar_final(lista1,3);
  lista1=slist_agregar_final(lista1,3);
  lista1=slist_agregar_final(lista1,3);
  lista1=slist_agregar_final(lista1,30);

  int list_size = slist_logitud(lista1);
  // printf("%d\n",list_size);
  printf("Given array is \n");
  slist_mostrar(lista1);

  lista1 = mergeSort(lista1,list_size);

  printf("\nSorted array is \n");
  slist_mostrar(lista1);

  return 0;
}
