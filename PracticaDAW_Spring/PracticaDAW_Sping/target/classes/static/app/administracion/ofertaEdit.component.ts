import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams, Router} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {Juego} from '../classes/juego.model.ts';
import {JuegosService} from '../service/juegos.service.ts';
import {OfertasService} from '../service/ofertas.service.ts';
import {MultipartItem} from '../imageUploader/multipart-item.ts';
import {MultipartUploader} from '../imageUploader/multipart-uploader.ts';

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

  private i = 0;


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
  }
	
  selectFoto($event){
  	this.file = $event.target.files[0];
  	console.debug("Selected file: " + this.file + " type:" + this.file.size + " size:" + this.file.size);		
    //this.colapsado=false;
  }
  
  upload(){
  	console.debug("Uploading file...");
	if (this.file == null){
		console.error("You have to select a file.");
		return;
	}		
	
	let formData = new FormData();
		
	formData.append("file",  this.file);
	formData.append("filename1", "oferta"+this.ofertaCopia.nombre+this.i);
	let multipartItem = new MultipartItem(new MultipartUploader({url: 'image/upload'}));
	
	multipartItem.formData = formData;
	
	multipartItem.callback = (data, status, headers) => {	
		if (status == 200){				
			console.debug("File has been uploaded");
			this.setFoto();		
		} else {
			console.error("Error uploading file");
		}
	};
	
	multipartItem.upload();
  }

  setFoto(){
	this.ofertaCopia.imagen = "img/oferta"+this.oferta.nombre+this.i+".jpg";
	this.i++;
    //this.imagen=imgs;
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
