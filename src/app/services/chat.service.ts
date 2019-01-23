import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Mensaje } from '../interface/mensaje';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];

  constructor(
    private afs: AngularFirestore
  ) { }

  cargarMensaje(){

    this.itemsCollection = this.afs.collection<Mensaje>('chat');

    return this.itemsCollection.valueChanges()
                               .map( ( mensajes: Mensaje[] ) => {
                                 this.chats = mensajes;
                               })

  }

  agregarMensaje( texto:string ){

    let mensaje: Mensaje = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    }

    return this.itemsCollection.add( mensaje );

  }

}
