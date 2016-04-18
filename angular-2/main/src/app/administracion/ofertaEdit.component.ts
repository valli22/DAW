import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {Juego} from '../classes/juego.model.ts';

@Component ({
  selector: 'ofertaEdit',
  templateUrl: 'app/administracion/ofertaEdit.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class OfertaEditComponent{

  @Input()
  private oferta : Oferta;

  //este es el array de todos los juegos disponibles en la tienda
  @Input()
  private juegos : Juego[];

  private ofertaCopia = this.oferta;
  private anadir = false;

  contieneJuego( juego: Juego){
    var ret;
    ret =  this.ofertaCopia.juegos.indexOf(juego);
    if(ret==-1){
      return true;
    }else{
      return false;
    }
  }

  anadirJuego( i : number){
    var juego = this.juegos[i];
    this.ofertaCopia.juegos.push(juego);
  }

  eliminarJuego( i : number){
    this.ofertaCopia.juegos.splice(i,1);
  }

  cambiarFoto(){

  }

  guardar(){
    this.oferta = this.ofertaCopia;
  }

}
