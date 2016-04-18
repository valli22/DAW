import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';

@Component ({
  selector: 'juegoNuevo',
  templateUrl: 'app/administracion/juegoNuevo.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class JuegoNuevoComponent {

  //private juego =new Juego("","","",0,0,[""]);
  private imagen : string;
  private nombre : string;
  private descripcion : string;
  private precio : number;
  private valoracion : number;
  private tags : string[] = [];
  private plataforma : string[] = [];

  private anadir=false;
  private anadirPlataforma=false;

  anadirFoto(){
      this.imagen='../../img/logo.png';
  }

  anadirTag(valor : string){
    this.tags.push(valor);
  }

  anadirPlataformaMethod(valor : string){
    this.plataforma.push(valor);
  }

  eliminarTag(index : number){
    this.tags.splice(index,1);
  }

  eliminarPlataforma(index : number){
    this.plataforma.splice(index,1);
  }

  noesVacioImg(){
    return this.imagen != "";
  }

  //introducir en array de service
  guardar(){
      return new Juego(this.imagen,this.nombre,this.descripcion,this.precio,this.valoracion,this.tags,this.plataforma);
  }

}
