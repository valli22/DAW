import {Component, Input} from 'angular2/core';
import {Oferta} from '../classes/oferta.model.ts';
import {CarritoService} from '../service/carrito.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';  

@Component({
  selector:'ofertaEstruc',
  templateUrl: 'app/ofertas/ofertaEstruc.component.html',
  directives:[ROUTER_DIRECTIVES]
})

export class ofertaEstrucComponent {

  @Input()
  private oferta : Oferta;

  constructor(private carritoService : CarritoService ){}

  //llevar al carrito y añadir los juegos de la oferta al array de juegos que haya en el carrito
  comprarOferta(){
      this.carritoService.addOfertaPedido(this.oferta);
  }

}
