import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {CarritoService} from '../service/carrito.service.ts';

@Component({
  selector:'juego2main',
  templateUrl:'app/main/juego2main.component.html',
  directives : [ROUTER_DIRECTIVES]
})

export class Juego2mainComponent{

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
