import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';

@Component ({
  selector: 'juegoNuevo',
  templateUrl: 'app/administracion/juegoNuevo.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class JuegoNuevoComponent {

  private juego =new Juego("","","",0,0,[""]);

  anadirFoto(){
      this.juego.imagen='../../img/logo.png';
  }

  anadirTag(valor : string){
    this.juego.tags.push(valor);
  }

  eliminarTag(index : number){
    console.log(index);
    this.juego.tags.splice(index,1);
  }

  noesVacioImg(){
    return this.juego.imagen != "";
  }

  //introducir en array de service
  guardar(){

  }

}
