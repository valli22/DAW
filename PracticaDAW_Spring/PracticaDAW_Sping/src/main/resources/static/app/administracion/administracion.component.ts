import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {Oferta} from '../classes/oferta.model.ts';
import {JuegoAdminComponent} from './juegoAdmin.component';
import {OfertaAdminComponent} from './ofertaAdmin.component';
import {JuegosService} from '../service/juegos.service.ts';
import {OfertasService} from '../service/ofertas.service.ts'

@Component({
  selector: 'administracion',
  templateUrl:'app/administracion/administracion.component.html',
  directives:[OfertaAdminComponent,JuegoAdminComponent,ROUTER_DIRECTIVES]
})

export class AdministracionComponent{

  private juegos :Juego[];
  private ofertas : Oferta[];
  private dataUp = false;

  constructor(private juegosService : JuegosService, private ofertasService : OfertasService){}

  ngOnInit(){
      this.juegosService.getJuegos().subscribe(
    	juegos => {
    				this.juegos = juegos;
    				this.dataUp = true;
    			},
    	error => console.log(error)
      );
      this.ofertas = this.ofertasService.getOfertas();
  }
  
  private refresh(){
  	this.juegosService.getJuegos().subscribe(
    	juegos => {
    				this.juegos = juegos;
    				this.dataUp = true;
    			},
    	error => console.log(error)
      );
  }
  
  removeJuego(juego : Juego){
      this.juegosService.deleteJuego(juego.nombre).subscribe(
	        result => this.refresh(),
	        error => this.refresh()
	    );
  }



}
