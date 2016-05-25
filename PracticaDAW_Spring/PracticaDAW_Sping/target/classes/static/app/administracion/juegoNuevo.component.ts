import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {Tag} from '../classes/tag.model.ts';
import {Plataforma} from '../classes/plataforma.model.ts';
import {JuegosService} from '../service/juegos.service.ts';
import {MultipartItem} from '../imageUploader/multipart-item.ts';
import {MultipartUploader} from '../imageUploader/multipart-uploader.ts';

@Component ({
  selector: 'juegoNuevo',
  templateUrl: 'app/administracion/juegoNuevo.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class JuegoNuevoComponent {

  private imagen : string;
  private nombre : string;
  private descripcion : string;
  private precio : number;
  private valoracion : number;
  private tags : Tag[] = [];
  private plataforma : Plataforma[] = [];

  private colapsado= true;

  private anadir=false;
  private anadirPlataforma=false;
  private i = 0;

  constructor(private juegosService : JuegosService){}
  
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
	formData.append("filename1", this.nombre+this.i);
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
	this.imagen = "img/"+this.nombre+this.i+".jpg";
	this.i++;
    //this.imagen=this.juegoCopia.imagen;
  }

  getStyles(){
    return {
      'display':this.colapsado? 'none':'block'
    }
  }

  anadirTag(valor : string){
  	console.log(valor);
    this.tags.push(new Tag(valor));
  }

  anadirPlataformaMethod(valor : string){
    this.plataforma.push(new Plataforma(valor));
  }

  eliminarTag(index : number){
    this.tags.splice(index,1);
  }

  eliminarPlataforma(index : number){
    this.plataforma.splice(index,1);
  }

  noesVacioImg(){
    return this.imagen != "";
  }

  //introducir en array de service
  guardar(){
      this.juegosService.addJuego(new Juego(this.imagen,this.nombre,this.descripcion,this.precio,this.valoracion,this.tags,this.plataforma)).subscribe(
      	juegoNuevo => console.log("Juego añadido con exito"),
      	error => console.log(error)
      );
  }

}
