import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {Juego} from '../classes/juego.model.ts';

@Component ({
  selector: 'ofertaNueva',
  templateUrl: 'app/administracion/ofertaNueva.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class OfertaNuevaComponent {

  //private oferta : Oferta;
  private nombre : string;
  private descripcion : string;
  private imagen : string;
  private juegosOferta: Juego[] = [];
  private descuento : number;
  private precioInicial : number;
  private precioOferta : number;

  private juegos : Juego[];

  private anadir = false;

  noesVacioImg(){
    return this.imagen !=null;
  }

  anadirFoto(){
    this.imagen='../../img/logo.png';
  }

  contieneJuego( juego: Juego){
    var ret;
    ret =  this.juegosOferta.indexOf(juego);
    if(ret==-1){
      return true;
    }else{
      return false;
    }
  }

  anadirJuego( i : number){
    var juego = this.juegos[i];
    this.juegosOferta.push(juego);
  }

  eliminarJuego( i : number){
    this.juegosOferta.splice(i,1);
  }

  guardar(){

  }
}
