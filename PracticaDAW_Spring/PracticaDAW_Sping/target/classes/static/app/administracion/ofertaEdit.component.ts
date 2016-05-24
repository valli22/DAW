import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams, Router} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {Juego} from '../classes/juego.model.ts';
import {JuegosService} from '../service/juegos.service.ts';
import {OfertasService} from '../service/ofertas.service.ts';

@Component ({
  selector: 'ofertaEdit',
  templateUrl: 'app/administracion/ofertaEdit.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class OfertaEditComponent{

  private oferta : Oferta;
  private ofertaCopia :Oferta;

  //este es el array de todos los juegos disponibles en la tienda
  private juegos : Juego[];
  
  private colapsado = true;

  private anadir = false;
  private dataUp=false;
  private nombre : string;

  constructor(private _router:Router, routeParams:RouteParams, private serviceJuegos: JuegosService,private serviceOfertas : OfertasService){
      this.nombre = routeParams.get('nombre');
  }

  ngOnInit(){
  	this.serviceOfertas.getOferta(this.nombre).subscribe(
    			oferta=>{
    				this.oferta=oferta;
    				this.ofertaCopia=this.oferta;
    				this.serviceJuegos.getJuegos().subscribe(
    					juegos=>{
    						this.juegos=juegos;
    						this.dataUp=true;
    						this.serviceOfertas.getJuegosOferta(this.nombre).subscribe(
    							juegosO=>{
    								this.ofertaCopia.juegos=juegosO;
    								this.upData=true;
    								console.log("juegos cargados");
    								},
    							error=>console.log()
    						);
    						},
    					error=>console.log(error)
    					);
    				},
    	error=>console.log(error)
    	);
 		}

  setFoto(imgs:string){
    this.oferta.imagen=imgs;
  }

  getStyles(){
    return {
      'display':this.colapsado? 'none':'block'
    }
  }

  contieneJuego( juego: Juego){
    var ret;
    ret =  this.ofertaCopia.juegos.indexOf(juego);
    if(ret==-1){
      return true;
    }else{
      return false;
    }
  }

  anadirJuego( i : number){
    var juego = this.juegos[i];
    this.ofertaCopia.juegos.push(juego);
    console.log(this.ofertaCopia.juegos);
  }

  eliminarJuego( i : number){
    var game= this.ofertaCopia.juegos[i];
    this.ofertaCopia.juegos.splice(i,1);
    console.log(game)
    this.serviceOfertas.borrarJuego(game.nombre,this.oferta.nombre).subscribe(
    	result=>console.log('se borra'),
    	error=>console.log(error));
  }

  cambiarFoto(){
    this.colapsado=false;
  }

  guardar(){
   this.serviceOfertas.updateOferta(this.ofertaCopia).subscribe(
     	result =>{
     		 {this._router.navigate(['Admin']);
     		 this.serviceOfertas.guardarJuegos(this.nombre, this.ofertaCopia.juegos).subscribe(
	      				result=>console.log("funciona"),
	      				error=>console.log(error));
     		 },
     	error => console.log(error)
     );
  }

}
