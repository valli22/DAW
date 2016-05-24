import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams, Router} from 'angular2/router';
import {user} from '../classes/user.model.ts';
import {UsersService} from '../service/users.service.ts';
import {MultipartItem} from '../imageUploader/multipart-item.ts';
import {MultipartUploader} from '../imageUploader/multipart-uploader.ts';

@Component({
  selector:'user',
  templateUrl:'app/user/user.component.html',
  directives:[ROUTER_DIRECTIVES]
})

export class UserComponent {

  private usuario : user;

  constructor(private _router:Router, routeParams:RouteParams, service: UsersService){
      let nombre = routeParams.get('nombre');
      this.usuario = service.getUser(nombre);
  }
  
  selectFoto($event){
  	this.file = $event.target.files[0];
  	console.debug("Selected file: " + this.file + " size:" + this.file.size);		
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
	formData.append("filename1", "user"+this.user.nombre+this.i);
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
	this.usuario.imagen = "img/user"+this.usuario.nombre+this.i+".jpg";
	this.i++;
    //this.imagen=imgs;
  }

}
