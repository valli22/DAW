import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Oferta} from '../classes/oferta.model.ts';
import {Juego} from '../classes/juego.model.ts';
import {OfertasService} from '../service/ofertas.service.ts'
import {JuegosService} from '../service/juegos.service.ts';
import {MultipartItem} from '../imageUploader/multipart-item.ts';
import {MultipartUploader} from '../imageUploader/multipart-uploader.ts';

@Component ({
  selector: 'ofertaNueva',
  templateUrl: 'app/administracion/ofertaNueva.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class OfertaNuevaComponent {

  //private oferta : Oferta;
  private nombre : string;
  private descripcion : string;
  private imagen : string;
  private juegosOferta: Juego[] = [];
  private descuento : number;
  private precioInicial : number;
  private precio : number;
  private colapsado= true;
  private dataUpdate= false;
  private juegos : Juego[];

  private anadir = false;

  constructor(private _router:Router, private ofertasService : OfertasService, private juegosService : JuegosService){
 	
  }
  ngOnInit(){
  	this.juegosService.getJuegos().subscribe(
    	juegos => {
    				this.juegos = juegos;
    				console.log(this.juegos);
    				this.dataUpdate = true;
    			},
    	error => console.log(error)
    );
  }

  noesVacioImg(){
    return this.imagen !=null;
  }

  anadirFoto(){
    this.colapsado=false;
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
	formData.append("filename1", "oferta"+this.nombre+this.i);
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
	this.imagen = "img/oferta"+this.nombre+this.i+".jpg";
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
    ret =  this.juegosOferta.indexOf(juego);
    if(ret==-1){
      return true;
    }else{
      return false;
    }
  }

  anadirJuego( i : number){
    var juego = this.juegos[i];
    this.juegosOferta.push(juego);
  }

  eliminarJuego( i : number){
    this.juegosOferta.splice(i,1);
  }

  guardar(){
      this.ofertasService.addOferta(new Oferta(this.nombre,this.descripcion,this.imagen,this.juegosOferta,this.descuento,this.precioInicial,this.precio)).subscribe(
      	response=>{	
      				this.ofertasService.guardarJuegos(this.nombre, this.juegosOferta).subscribe(
	      				result=>console.log("funciona"),
	      				error=>console.log(error));
      				this._router.navigate(['Admin']);
      	error=>console.log(error);
      ;
      this._router.navigate(['Admin']);
  }
}
