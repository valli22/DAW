import {Component, Input,Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {OfertasService} from '../service/ofertas.service.ts'

@Component({
  selector: 'ofertaAdmin',
  templateUrl:'app/administracion/ofertaAdmin.component.html',
  directives:[ROUTER_DIRECTIVES]
})

export class OfertaAdminComponent{

  constructor(private ofertaService : OfertasService){}

  @Input()
  private oferta : Oferta;
  @Output()
  private remove = new EventEmitter<Oferta>();
  removeOferta(){
		this.remove.next(this.oferta);
  }

}
