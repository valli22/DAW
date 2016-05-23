import {Component, Input} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Juego} from '../classes/juego.model.ts';
import {JuegosService} from '../service/juegos.service.ts';
import {MultipartItem} from '../imageUploader/multipart-item.ts';
import {MultipartUploader} from '../imageUploader/multipart-uploader.ts';

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
  private file;
  private i = 0;

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
		this.juegoCopia.imagen = "img/"+this.nombre+this.i+".jpg";
		this.juegoCopia.imagen = "img/darkSouls2.jpg";
		this.i++;
     	//this.juego.imagen=imgs;
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
    this.juego=this.juegoCopia;
    this._router.navigate(['Admin']);
  }
}
