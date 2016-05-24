import {Injectable, OnInit} from 'angular2/core';
import {user} from '../classes/user.model.ts';
import {Recomendacion} from '../classes/recomendacion.model';
import { Http, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class CurrentUserService{
	isLogged = false;
	isAdmin = false;
  	usuario:user;

  	constructor(private http: Http){
  		this.reqIsLogged();
  	}
  	reqIsLogged(){
		
		let headers = new Headers({
			'X-Requested-With': 'XMLHttpRequest'
		});
			
		let options = new RequestOptions({headers});		
		this.http.get('logIn', options).subscribe(
			response => this.processLogInResponse(response),
			error => {
				if(error.status != 401){
					console.error("Error when asking if logged: "+
						JSON.stringify(error));	
				}				
			}
		);
	}
	private processLogInResponse(response){
		this.isLogged = true;
		this.usuario = response.json();
		this.isAdmin = this.usuario.roles.indexOf("ROLE_ADMIN") !== -1;
	}
	
	logIn(user: string, pass: string) {
		
		let userPass = user + ":" + pass;
		
		let headers = new Headers({
			'Authorization': 'Basic '+ utf8_to_b64(userPass),
			'X-Requested-With': 'XMLHttpRequest'
		});
			
		let options = new RequestOptions({headers});		
		return this.http.get('logIn', options).map(
			response => {
				this.processLogInResponse(response);
				return this.usuario;
			}

		);		
	}
	
	logOut(){
		
		return this.http.get('logOut').map(
			response => {
				this.usuario=undefined;
				this.isLogged = false;
				this.isAdmin = false;
				return response;
			}
		);
	}	
  	setUser(cUser:user){

    	this.usuario=cUser;
    	if(this.usuario!=undefined){ 
  		}
  	}
  	getCurrentUser(){
    	return this.usuario;
  	}
  	getMentores(){
  		return this.http.get('users/mentores/'+this.usuario.id).map(
  			response => {
  				let mentores = response.json();
  				return mentores;
  			}
  		);
  	}
  	getRecomendaciones(){
  		return this.http.get('users/recomendaciones/'+this.usuario.id).map(
  			response => {
  				let recomendaciones = response.json();
  				return recomendaciones;
  			}
  		);
  	}
}
function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}
