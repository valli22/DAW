import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts';
import {CarritoService} from '../service/carrito.service.ts';

@Component({
  selector:'juego1main',
  templateUrl:'app/main/juego1main.component.html',
  providers : [CarritoService]
})

export class Juego1mainComponent{

  @Input()
  private juego : Juego;

  @Input()
  private posicion : string;

  constructor(private carritoService : CarritoService){}

  //llevar al carrito y añadir al array de juegos que haya en el carrito
  comprarJuego(){
      this.carritoService.addJuegoPedido(this.juego);
  }
}
