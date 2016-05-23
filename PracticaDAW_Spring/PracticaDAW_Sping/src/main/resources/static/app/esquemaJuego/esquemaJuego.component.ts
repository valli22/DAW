import {Component, Input} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {Recomendacion} from '../classes/recomendacion.model.ts';
import {JuegosService} from '../service/juegos.service.ts';
import {CarritoService} from '../service/carrito.service.ts';

@Component({
  selector:  'esquemaJuego',
  templateUrl: 'app/esquemaJuego/esquemaJuego.component.html',
   directives:[ROUTER_DIRECTIVES]
})

export class EsquemaJuegoComponent {

  private juego : Juego;
  private nombre : string;
  private dataUp = false;

  constructor(private _router:Router, routeParams:RouteParams, private service: JuegosService, private carritoService : CarritoService){
      this.nombre = routeParams.get('nombre');   
  }
  
  ngOnInit(){
  	this.juego = this.service.getJuego(this.nombre).subscribe(
    	juego => {
    				this.juego = juego;
    				this.dataUp = true;
    			},
    	error => console.log(error)
    );
  }

  comprarJuego(){
      this.carritoService.addJuegoPedido(this.juego);
  }

  recomendacionesVacia(){
    return this.juego.recomendacion.length!=0;
  }

}
