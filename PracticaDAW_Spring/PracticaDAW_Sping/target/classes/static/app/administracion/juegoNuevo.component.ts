import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {Tag} from '../classes/tag.model.ts';
import {Plataforma} from '../classes/plataforma.model.ts';
import {JuegosService} from '../service/juegos.service.ts';

@Component ({
  selector: 'juegoNuevo',
  templateUrl: 'app/administracion/juegoNuevo.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class JuegoNuevoComponent {

  private imagen : string;
  private nombre : string;
  private descripcion : string;
  private precio : number;
  private valoracion : number;
  private tags : Tag[] = [];
  private plataforma : Plataforma[] = [];

  private colapsado= true;

  private anadir=false;
  private anadirPlataforma=false;

  constructor(private juegosService : JuegosService){}

  anadirFoto(){
      this.colapsado=false;
  }

  setFoto(imgs:string){
    this.imagen=imgs;
  }

  getStyles(){
    return {
      'display':this.colapsado? 'none':'block'
    }
  }

  anadirTag(valor : string){
  	console.log(valor);
    this.tags.push(new Tag(valor));
  }

  anadirPlataformaMethod(valor : string){
    this.plataforma.push(new Plataforma(valor));
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
      this.juegosService.addJuego(new Juego(this.imagen,this.nombre,this.descripcion,this.precio,this.valoracion,this.tags,this.plataforma)).subscribe(
      	juegoNuevo => console.log("Juego añadido con exito"),
      	error => console.log(error)
      );
  }

}
