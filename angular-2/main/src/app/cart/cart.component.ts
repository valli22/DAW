import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../juego/juego.model.ts';
@Component({
       selector: 'cartComponent',
       templateUrl: 'app/cart/cart.component.html',
       directives:[ROUTER_DIRECTIVES]
})
export class CartComponent  {
  private juegos = [new Juego('../../img/logo.png','Prueba 1','10','1'),new Juego('../../img/logo.png','Prueba 2','34','1'),new Juego('../../img/logo.png','Prueba 3','59','1')];
  private codigos = ['VALLI22','EXCEN','ZIGIC','DROPELEGA'];
  private total = 0;
  constructor(){
    this.refreshTotal();
  }
  refreshTotal(){
    this.total= 0;
    for (var juego of this.juegos){
      this.total += juego.precioTotal;
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
