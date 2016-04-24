import {Component,Input} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import{CarritoService} from '../service/carrito.service.ts'

@Component({
  selector:'juegoCatalogo',
  templateUrl: 'app/catalogo/juegoCatalogo.component.html',
  directives:[ROUTER_DIRECTIVES]
})
export class JuegoCatalogo{
  @Input()
  private juego : Juego;

  constructor(private carritoService : CarritoService ){}

  //llevar al carrito y añadir los juegos de la oferta al array de juegos que haya en el carrito
  comprarJuego(){
      this.carritoService.addJuegoPedido(this.juego);
  }
}
