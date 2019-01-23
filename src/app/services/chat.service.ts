import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(
    private afs: AngularFirestore
  ) { }

  cargarMensaje(){

    this.itemsCollection = this.afs.collection<any>('chat');

    return this.itemsCollection.valueChanges();

  }

}
