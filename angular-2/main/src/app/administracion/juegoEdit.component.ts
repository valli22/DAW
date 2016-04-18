import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';

@Component ({
  selector: 'juegoEdit',
  templateUrl: 'app/administracion/juegoEdit.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class JuegoEditComponent{

  @Input()
  private juego=new Juego('../../img/logo.png','titulojuego','descripcion del juego',24,6.9,['hola','mola']);

  private juegoCopia = this.juego;
  private anadir = false;

  cambiarFoto(){

  }

  anadirTag(valor : string){
    this.juegoCopia.tags.push(valor);
  }

  eliminarTag(index : number){
    console.log(index);
    this.juegoCopia.tags.splice(index,1);
  }

  guardar(){
    this.juego=this.juegoCopia;
  }
}
