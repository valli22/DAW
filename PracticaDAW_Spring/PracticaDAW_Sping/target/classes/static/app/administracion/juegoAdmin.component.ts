import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {JuegosService} from '../service/juegos.service.ts';

@Component({
  selector: 'juegoAdmin',
  templateUrl:'app/administracion/juegoAdmin.component.html',
  directives:[ROUTER_DIRECTIVES]
})

export class JuegoAdminComponent {

  @Input()
  private juego: Juego;

  constructor(private juegosService : JuegosService){}

  eliminarJuego(){
      var juegosAux = this.juegosService.getJuegos();
      var index = juegosAux.indexOf(this.juego);
      this.juegosService.getJuegos().splice(index,1);
  }

}
