import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {CarritoService} from '../service/carrito.service.ts';
import {Juego} from '../classes/juego.model.ts';


@Component({
       selector: 'cartComponent',
       templateUrl: 'app/cart/cart.component.html',
       directives:[ROUTER_DIRECTIVES],
       providers:[CarritoService]
})
export class CartComponent  {
  private juegos : (Juego|Oferta)[];
  private codigos = ['VALLI22','EXCEN','ZIGIC','DROPELEGA'];
  private preciosTotales: number[] = [];
  private total = 0;
  constructor(private carritoService:CarritoService){
  
  }
  ngOnInit(){
    this.juegos = this.carritoService.getPedido();
    for(var juego of this.juegos){
      var precioJuego = parseFloat((juego.cantidad*juego.precio).toFixed(2));
      this.total+= precioJuego;
      this.preciosTotales.push(precioJuego);
    }
    this.total= parseFloat(this.total.toFixed(2));
  }
  refreshTotal(){
    this.total= 0;
    this.preciosTotales = []
    for(var juego of this.juegos){
      var precioJuego = parseFloat((juego.cantidad*juego.precio).toFixed(2));
      this.total+= precioJuego;
      this.preciosTotales.push(precioJuego);      
    }
    this.total= parseFloat(this.total.toFixed(2));
  }

  precioTotal(precio:number,cantidad:number){
    return precio*cantidad;
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
