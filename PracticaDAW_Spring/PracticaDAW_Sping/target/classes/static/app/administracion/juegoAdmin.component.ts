import {Component, Input, Output, EventEmitter} from 'angular2/core';
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
	
  @Output()
  private remove = new EventEmitter<Juego>();

  constructor(private juegosService : JuegosService){}

  eliminarJuego(){
      this.remove.next(this.juego);
  }

}
