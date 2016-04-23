import {Component, Input} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {JuegosService} from '../service/juegos.service.ts';

@Component ({
  selector: 'juegoEdit',
  templateUrl: 'app/administracion/juegoEdit.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class JuegoEditComponent{

  private juego : Juego;
  private juegoCopia : Juego;
  private anadir = false;

  constructor(private _router:Router, routeParams:RouteParams, service: JuegosService){
      let nombre = routeParams.get('nombre');
      this.juego = service.getJuego(nombre);
      this.juegoCopia = this.juego;
  }

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
    this._router.navigate(['Admin']);
  }
}
