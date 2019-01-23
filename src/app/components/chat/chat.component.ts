import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent  {

  mensaje: string = "";

  constructor(
    public _cs: ChatService
  ) {

    this._cs.cargarMensaje()
            .subscribe();

  }

  enviar_mensaje(){

    if( this.mensaje.length === 0){
      return;
    }

    this._cs.agregarMensaje( this.mensaje )
            .then( ()=>{
              console.log('Mensaje enviado');
              this.mensaje = "";
            })
            .catch( (err)=>console.error('Error al enviar mensaje', err) );

  }

}
