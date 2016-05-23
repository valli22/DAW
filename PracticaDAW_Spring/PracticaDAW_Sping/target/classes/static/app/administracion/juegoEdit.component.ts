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
  private nombre : string;
  private dataUp = false;

  private colapsado = true;

  constructor(private _router:Router, routeParams:RouteParams, private service: JuegosService){
      this.nombre = routeParams.get('nombre');
  }

  ngOnInit(){
  
  this.service.getJuego(this.nombre).subscribe(
    	juego => {
    				this.juego = juego;
    				this.juegoCopia = this.juego;
    				this.dataUp = true;
    			},
    	error => console.log(error)
    );
  
  }

  cambiarFoto(){
    this.colapsado=false;
  }


    setFoto(imgs:string){
      this.juego.imagen=imgs;
    }

    getStyles(){
      return {
        'display':this.colapsado? 'none':'block'
      }
    }


  anadirTag(valor : string){
    this.juegoCopia.tags.push(valor);
  }

  eliminarTag(index : number){
    this.juegoCopia.tags.splice(index,1);
  }

  guardar(){
    this.service.updateJuego(this.juegoCopia).subscribe(
    	result => this._router.navigate(['Admin']),
    	error => console.log(error)
    );
  }
}
