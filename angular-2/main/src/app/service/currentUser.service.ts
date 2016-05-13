import {Injectable} from 'angular2/core';
import {user} from '../classes/user.model.ts';
import {Recomendacion} from '../classes/recomendacion.model';

@Injectable()
export class CurrentUserService{

  private usuario:user;

  setUser(cUser:user){

    this.usuario=cUser;
    if(this.usuario!=undefined){
	    /*this.usuario.addRecomendacion(new Recomendacion(this.usuario, "El mejor roguelike", 15000, "Este juego es el mejor roguelike que ha salido nunca", "The binding of isaac: Rebirth"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario, "Dificil y muy entretenido", 15000, "Vas a morir. Mucho","Dark Souls III"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario, "Genocida!", 15000, "Intenta asesinar a toda la humanidad, yo lo he conseguido","Plague Inc: Evolved"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario, "La perfeccion hecha juego", 15000, "Esto es volver a mi infancia","Ratchet y clank"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario, "Bioshock sigue alucinando", 15000, "Historia increible, buenos graficos y muy muy entretenido","Bioshock Infinite"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario, "Muy buen juego", 15000, "Pedazo de juegazo que se han marcado","Halo 3"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario, "Estrategia por turnos", 15000, "Muy recomendado a aquellos que hayan jugado al Final Fantasy VIII","Final Fantasy IX"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario, "11/10 IGN", 15000, "Unos graficazos y una jugabilidad increibles","Sombras de mordor"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario, "No. No lo compres", 15000, "¿Sabes lo que es un bug? Aqui lo tienes en forma de juego","Assasin's Creed Unity"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario, "Para los amantes de los coches", 15000, "Muy buenos graficos. Y coches. Muchos coches. Para todos los gustos","Forza Motorsport 6"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario,"Best juego de miedo EUW", 15000, "Si despues de una pelicula de miedo no puedes dormir no juegues a este juego. Flipante","Outlast"));
	    this.usuario.addRecomendacion(new Recomendacion(this.usuario, "El cooperativo definitivo", 15000, "Matar zombies en familia siempre es un gustazo. Y mas con machete","Left 4 dead 2"));
	    this.usuario.addMentor(new user('../../img/perfil.png', 'Diego', 'diego@gmail.com','1234','1995-23-05','zigic','jimenez',"Gamer con ganas de jugar y aprender", 'Juegos variados y de muy buena calidad'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Valli','valli@gmail.com', '1234', '1995-22-01','valli','valli22','Gamer con ganas de jugar y aprender', 'Si quieres juegos de todos los tipos yo soy tu mentor'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Peter','peter@gmail.com','1234','1995-23','peter','dropelega','Gamer con ganas de jugar y aprender', 'Juegos arcade y shooters variados'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Miguel','miguel@gmail.com','1234','1995-22-06','miguelr95','roldan','Gamer con ganas de jugar y aprender','Amante de los juegos de estrategia'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Alvaro','alvaro@gmail.com','1234','1995-20','alvaro','varo','Gamer con ganas de jugar y aprender', 'Estos juegos merecen la pena, que te lo digo yo'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Juanma','juanma@gmail.com','1234','1995-19','juanma','roki','Gamer con ganas de jugar y aprender', 'Juegos online de todos los tipos'));
	    this.usuario.addMentor(new user('../../img/perfil.png','David','david@gmail.com','1234','1995-18','david','idavis','Gamer con ganas de jugar y aprender', 'Aqui podras encontrar juegos clasicos'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Pedro','pedro@gmail.com','1234','1995-17','pedro','pete','Gamer con ganas de jugar y aprender', 'Los mejores juegos del mercado'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Juan','juan@gmail.com','1234','1995-16','juan','joan','Gamer con ganas de jugar y aprender', 'Las reviews de los peores juegos del mercado'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Jose','jose@gmail.com','1234','1995-15','jose','felipez','Gamer con ganas de jugar y aprender', 'Amante de la conduccion, arcade y coches'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Pepe','pepe@gmail.com','1234','1995-14','pepe','pepon','Gamer con ganas de jugar y aprender', 'Terror, miedo y panico. Aqui encontraras todo esto'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Rodrigo','rodrigo@gmail.com','1234','1995-13','rodrigo','jugonGamer','Gamer con ganas de jugar y aprender', 'Juegos cooperativos multijugador'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Francisco','francisco@gmail.com','1234','1995-12','francisco','fran','Gamer con ganas de jugar y aprender', 'Mobas online de todos los tipos'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Paco','paco@gmail.com','1234','1995-11','paco','pacopaquito','Gamer con ganas de jugar y aprender', 'Los mejores mmorpg del mercado los puedes encontrar aqui'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Raul','raul@gmail.com','1234','1995-10','raul','raulDeFutbol','Gamer con ganas de jugar y aprender', 'Me encantan los juegos tipo roguelike, a ti no?'));
	    this.usuario.addMentor(new user('../../img/perfil.png','Daniel','daniel@gmail.com','1234','1995-9','dani','daniYeah','Gamer con ganas de jugar y aprender', 'Todos los juegos de star wars estan aqui'));
	    this.usuario.mentoresSiguiendo[1].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[1], "El mejor roguelike", 15000, "Este juego es el mejor roguelike que ha salido nunca", "The binding of isaac: Rebirth"));
	    this.usuario.mentoresSiguiendo[1].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[1], "Dificil y muy entretenido", 15000, "Vas a morir. Mucho","Dark Souls III"));
	    this.usuario.mentoresSiguiendo[1].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[1], "Genocida!", 15000, "Intenta asesinar a toda la humanidad, yo lo he conseguido","Plague Inc: Evolved"));
	    this.usuario.mentoresSiguiendo[2].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[2], "La perfeccion hecha juego", 15000, "Esto es volver a mi infancia","Ratchet y clank"));
	    this.usuario.mentoresSiguiendo[2].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[2], "Bioshock sigue alucinando", 15000, "Historia increible, buenos graficos y muy muy entretenido","Bioshock Infinite"));
	    this.usuario.mentoresSiguiendo[2].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[2], "Muy buen juego", 15000, "Pedazo de juegazo que se han marcado","Halo 3"));
	    this.usuario.mentoresSiguiendo[3].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[3], "Estrategia por turnos", 15000, "Muy recomendado a aquellos que hayan jugado al Final Fantasy VIII","Final Fantasy IX"));
	    this.usuario.mentoresSiguiendo[3].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[3], "11/10 IGN", 15000, "Unos graficazos y una jugabilidad increibles","Sombras de mordor"));
	    this.usuario.mentoresSiguiendo[3].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[3], "No. No lo compres", 15000, "¿Sabes lo que es un bug? Aqui lo tienes en forma de juego","Assasin's Creed Unity"));
	    this.usuario.mentoresSiguiendo[4].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[4], "Para los amantes de los coches", 15000, "Muy buenos graficos. Y coches. Muchos coches. Para todos los gustos","Forza Motorsport 6"));
	    this.usuario.mentoresSiguiendo[4].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[4],"Best juego de miedo EUW", 15000, "Si despues de una pelicula de miedo no puedes dormir no juegues a este juego. Flipante","Outlast"));
	    this.usuario.mentoresSiguiendo[4].addRecomendacion(new Recomendacion(this.usuario.mentoresSiguiendo[4], "El cooperativo definitivo", 15000, "Matar zombies en familia siempre es un gustazo. Y mas con machete","Left 4 dead 2"));*/
  	}
  }
  getCurrentUser(){
    return this.usuario;

  }
}
