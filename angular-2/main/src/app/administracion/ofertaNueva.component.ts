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

  private oferta = new Oferta("","","",[new Juego("Eliminar","","",0,0,[""])],0,0,0);

  private juegos = [new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego1','descripcion del juego',24,6.9,['hola','mola']),new Juego('../../img/logo.png','titulojuego2','descripcion del juego',24,6.9,['hola','mola'])];

  private anadir = false;

  noesVacioImg(){
    return this.oferta.imagen !=null;
  }

  anadirFoto(){
    this.oferta.imagen='../../img/logo.png';
  }

  contieneJuego( juego: Juego){
    var ret;
    ret =  this.oferta.juegos.indexOf(juego);
    if(ret==-1){
      return true;
    }else{
      return false;
    }
  }

  anadirJuego( i : number){
    var juego = this.juegos[i];
    this.oferta.juegos.push(juego);
  }

  eliminarJuego( i : number){
    this.oferta.juegos.splice(i,1);
  }

  guardar(){

  }
}
