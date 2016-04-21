import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {Oferta} from '../classes/oferta.model.ts';
import {CarritoService} from '../service/carrito.service.ts';

@Component({
       selector: 'cartComponent',
       templateUrl: 'app/cart/cart.component.html',
       directives:[ROUTER_DIRECTIVES],
       providers:[CarritoService]
})
export class CartComponent  {
  private juegos : Juego[];
  private ofertas : Oferta[];
  private codigos = ['VALLI22','EXCEN','ZIGIC','DROPELEGA'];
  private total = 0;
  constructor(private carritoService:CarritoService){
    this.refreshTotal();
  }
  ngOnInit(){
    this.juegos = this.carritoService.pedidoJuegos;
    this.ofertas = this.carritoService.pedidoOfertas;
  }
  refreshTotal(){
    this.total= 0;
    for (var juego of this.juegos){
      this.total += juego.precio * juego.cantidad;
    }
  }
  aplicarCodigo(codigo:string){
    var aplicable=false;
    for(var micodigo of this.codigos){
      if (micodigo==codigo) {
        this.total = this.total - this.total*0.05;
        aplicable = !aplicable;
        break;
      }
    }
  }
}
