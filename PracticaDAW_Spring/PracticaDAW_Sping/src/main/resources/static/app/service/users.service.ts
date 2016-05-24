import {Injectable} from 'angular2/core';
import {user} from '../classes/user.model.ts';
import { Http, RequestOptions, Headers } from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UsersService{

  private usuarios:user[];
      // fotoPerfil - nombre- correo-pass-fechaNacimiento -steam-bnet-descripcion-descripcionMentor--
      /*new user('../../img/perfil.png','miguel','miguel@gmail.com','1234','1995-02-06','miguelr95','roldan','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','valli','valli@gmail.com','1234','1995-06-18','valli22','valli22','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','pedro','pedro@gmail.com','1234','1995-01-05','dropelega','dropelega','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','diego','diego@gmail.com','1234','1995-12-05','zigic','zigic','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfilmujer.png','nazaret','nazaret@gmail.com','1234','1995-10-04','nazius','nazius','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfilmujer.png','andrea','andrea@gmail.com','1234','1995-11-01','andrewii','andrewii','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','luisca','luisca@gmail.com','1234','1995-08-06','luisqui','jimlu','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','mario','mario@gmail.com','1234','1991-10-03','tomate','tomate','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','sergio','sergio@gmail.com','1234','1994-07-12','Capitan Platano','Capitan Platano','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','alberto','alberto@gmail.com','1234','1992-01-06','melchor','baekarlash','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfilmujer.png','victoria','miguel@gmail.com','1234','1994-02-05','Wellesandra','Wellesandra','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','chiky','chiky@gmail.com','1234','1996-06-22','chikybob','chiky','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','micael','micael@gmail.com','1234','1985-06-22','micadaw','micadawc','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','admin','admin@gmail','admin','1990-06-22','admin','admin','soy el admin','soy el admin'),
      new user('../../img/perfil.png', 'Diego', 'diego@gmail.com','1234','1995-23-05','zigic','jimenez',"Gamer con ganas de jugar y aprender", 'Juegos variados y de muy buena calidad'),
      new user('../../img/perfil.png','Valli','valli@gmail.com', '1234', '1995-22-01','valli','valli22','Gamer con ganas de jugar y aprender', 'Si quieres juegos de todos los tipos yo soy tu mentor'),
      new user('../../img/perfil.png','Peter','peter@gmail.com','1234','1995-23','peter','dropelega','Gamer con ganas de jugar y aprender', 'Juegos arcade y shooters variados'),
      new user('../../img/perfil.png','Miguel','miguel@gmail.com','1234','1995-22-06','miguelr95','roldan','Gamer con ganas de jugar y aprender','Amante de los juegos de estrategia'),
      new user('../../img/perfil.png','Alvaro','alvaro@gmail.com','1234','1995-20','alvaro','varo','Gamer con ganas de jugar y aprender', 'Estos juegos merecen la pena, que te lo digo yo'),
      new user('../../img/perfil.png','Juanma','juanma@gmail.com','1234','1995-19','juanma','roki','Gamer con ganas de jugar y aprender', 'Juegos online de todos los tipos'),
      new user('../../img/perfil.png','David','david@gmail.com','1234','1995-18','david','idavis','Gamer con ganas de jugar y aprender', 'Aqui podras encontrar juegos clasicos'),
      new user('../../img/perfil.png','Pedro','pedro@gmail.com','1234','1995-17','pedro','pete','Gamer con ganas de jugar y aprender', 'Los mejores juegos del mercado'),
      new user('../../img/perfil.png','Juan','juan@gmail.com','1234','1995-16','juan','joan','Gamer con ganas de jugar y aprender', 'Las reviews de los peores juegos del mercado'),
      new user('../../img/perfil.png','Jose','jose@gmail.com','1234','1995-15','jose','felipez','Gamer con ganas de jugar y aprender', 'Amante de la conduccion, arcade y coches'),
      new user('../../img/perfil.png','Pepe','pepe@gmail.com','1234','1995-14','pepe','pepon','Gamer con ganas de jugar y aprender', 'Terror, miedo y panico. Aqui encontraras todo esto'),
      new user('../../img/perfil.png','Rodrigo','rodrigo@gmail.com','1234','1995-13','rodrigo','jugonGamer','Gamer con ganas de jugar y aprender', 'Juegos cooperativos multijugador'),
      new user('../../img/perfil.png','Francisco','francisco@gmail.com','1234','1995-12','francisco','fran','Gamer con ganas de jugar y aprender', 'Mobas online de todos los tipos'),
      new user('../../img/perfil.png','Paco','paco@gmail.com','1234','1995-11','paco','pacopaquito','Gamer con ganas de jugar y aprender', 'Los mejores mmorpg del mercado los puedes encontrar aqui'),
      new user('../../img/perfil.png','Raul','raul@gmail.com','1234','1995-10','raul','raulDeFutbol','Gamer con ganas de jugar y aprender', 'Me encantan los juegos tipo roguelike, a ti no?'),
      new user('../../img/perfil.png','Daniel','daniel@gmail.com','1234','1995-9','dani','daniYeah','Gamer con ganas de jugar y aprender', 'Todos los juegos de star wars estan aqui'),
    */
  constructor(private http: Http){
 
  }

  getUsers(){
    return this.http.get('users').map(
    	response=>{
    		this.usuarios = response.json();
    		return this.usuarios;
    	}
    ).catch(error => this.handleError(error));
  }
  addUser(user:user){
    let body = JSON.stringify(user);
    console.log('Nuevo user:'+body);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    return this.http.post('users', body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  updateUser(user:user){
  	let body = JSON.stringify(user);
    console.log('User actualizado: '+body);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    return this.http.put('users/'+user.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  getUser(nombre : string){
    for (let i = 0; i < this.usuarios.length; i++) {
        if(this.usuarios[i].nombre==nombre){return this.usuarios[i]};
    }
  }
  
  getRecomendaciones(id : number){
  		return this.http.get('users/recomendaciones/'+id).map(
  			response => {
  				let recomendaciones = response.json();
  				return recomendaciones;
  			}
  		);
  }
  
  addRecomendacionMeGusta(recomendacion : Recomendacion, id : number, idMentor: number){
    let body = JSON.stringify(recomendacion);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    return this.http.put('users/recomendaciones/meGusta/'+id+'/'+idMentor, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  deleteRecomendacionMeGusta(recomendacion : Recomendacion, id : number, idMentor: number){
    let body = JSON.stringify(recomendacion);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    return this.http.put('users/deleteRecomendaciones/meGusta/'+id+'/'+idMentor, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  getRecomendacionesMeGusta(id : number){
  		return this.http.get('users/recomendaciones/meGusta/'+id).map(
  			response => {
  				let recomendaciones = response.json();
  				return recomendaciones;
  			}
  		);
  }
  
  deleteRecomendacion(recomendacion: Recomendacion, id : number){
  	
  	let body = JSON.stringify(recomendacion);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    return this.http.put('users/recomendaciones/meGusta/remove/'+id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  dejarDeSeguir(id: number, user : User){
  	
  	let body = JSON.stringify(user);
  	
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    return this.http.put('users/deleteMentores/'+id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  actualizarRecomendacion(id : number, recomendacion : Recomendacion){
  
  	let body = JSON.stringify(recomendacion);
  	
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });
    return this.http.put('users/updateRecomendaciones/'+id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  
  }
  
  private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}
// fotoPerfil - nombre- correo-pass-fechaNacimiento -steam-bnet-descripcion-descripcionMentor--
