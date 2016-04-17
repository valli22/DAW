import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';

@Component({
  selector: 'juegoAdmin',
  templateUrl:'app/administracion/juegoAdmin.component.html',
  directives:[ROUTER_DIRECTIVES]
})

export class JuegoAdminComponent {

  @Input()
  private juego: Juego;

}
