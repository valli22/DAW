import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';

@Component({
  selector: 'ofertaAdmin',
  templateUrl:'app/administracion/ofertaAdmin.component.html',
  directives:[ROUTER_DIRECTIVES]
})

export class OfertaAdminComponent{

  @Input()
  private oferta : Oferta;

}
