import {Injectable} from 'angular2/core';
import {user} from '../classes/user.model';
import {Recomendacion} from '../classes/recomendacion.model';

@Injectable()
export class RecomendacionesService{

  recomendaciones: Recomendacion[] = [new Recomendacion(new user('../../img/perfil.png', 'Diego', 'diego@gmail.com','1234','1995-23-05','zigic','jimenez',"Gamer con ganas de jugar y aprender", 'Juegos variados y de muy buena calidad'), "El mejor roguelike", 15000, "Este juego es el mejor roguelike que ha salido nunca", "The binding of isaac: Afterbirth"),
  new Recomendacion(new user('../../img/perfil.png','Valli','valli@gmail.com', '1234', '1995-22-01','valli','valli22','Gamer con ganas de jugar y aprender', 'Si quieres juegos de todos los tipos yo soy tu mentor'), "Dificil y muy entretenido", 15000, "Vas a morir. Mucho","Dark Souls III"),
  new Recomendacion(new user('../../img/perfil.png','Peter','peter@gmail.com','1234','1995-23','peter','dropelega','Gamer con ganas de jugar y aprender', 'Juegos arcade y shooters variados'), "Genocida!", 15000, "Intenta asesinar a toda la humanidad, yo lo he conseguido","Plague Inc: Evolved"),
  new Recomendacion(new user('../../img/perfil.png','miguel','miguel@gmail.com','1234','1995-22-06','miguelr95','roldan','Gamer con ganas de jugar y aprender','Amante de los juegos de estrategia'), "La perfeccion hecha juego", 15000, "Esto es volver a mi infancia","Ratchet y clank"),
  new Recomendacion(new user('../../img/perfil.png','Alvaro','alvaro@gmail.com','1234','1995-20','alvaro','varo','Gamer con ganas de jugar y aprender', 'Estos juegos merecen la pena, que te lo digo yo'), "Bioshock sigue alucinando", 15000, "Historia increible, buenos graficos y muy muy entretenido","Bioshock Infinite"),
  new Recomendacion(new user('../../img/perfil.png','Juanma','juanma@gmail.com','1234','1995-19','juanma','roki','Gamer con ganas de jugar y aprender', 'Juegos online de todos los tipos'), "Muy buen juego", 15000, "Pedazo de juegazo que se han marcado","Halo 3"),
  new Recomendacion(new user('../../img/perfil.png','David','david@gmail.com','1234','1995-18','david','idavis','Gamer con ganas de jugar y aprender', 'Aqui podras encontrar juegos clasicos'), "Estrategia por turnos", 15000, "Muy recomendado a aquellos que hayan jugado al Final Fantasy VIII","Final Fantasy IX"),
  new Recomendacion(new user('../../img/perfil.png','Pedro','pedro@gmail.com','1234','1995-17','pedro','pete','Gamer con ganas de jugar y aprender', 'Los mejores juegos del mercado'), "11/10 IGN", 15000, "Unos graficazos y una jugabilidad increibles","Sombras de mordor"),
  new Recomendacion(new user('../../img/perfil.png','Juan','juan@gmail.com','1234','1995-16','juan','joan','Gamer con ganas de jugar y aprender', 'Las reviews de los peores juegos del mercado'), "No. No lo compres", 15000, "¿Sabes lo que es un bug? Aqui lo tienes en forma de juego","Assasin's Creed Unity"),
  new Recomendacion(new user('../../img/perfil.png','Jose','jose@gmail.com','1234','1995-15','jose','felipez','Gamer con ganas de jugar y aprender', 'Amante de la conduccion, arcade y coches'), "Para los amantes de los coches", 15000, "Muy buenos graficos. Y coches. Muchos coches. Para todos los gustos","Forza Motorsport 6"),
  new Recomendacion(new user('../../img/perfil.png','Pepe','pepe@gmail.com','1234','1995-14','pepe','pepon','Gamer con ganas de jugar y aprender', 'Terror, miedo y panico. Aqui encontraras todo esto'),"Best juego de miedo EUW", 15000, "Si despues de una pelicula de miedo no puedes dormir no juegues a este juego. Flipante","Outlast"),
  new Recomendacion(new user('../../img/perfil.png','Rodrigo','rodrigo@gmail.com','1234','1995-13','rodrigo','jugonGamer','Gamer con ganas de jugar y aprender', 'Juegos cooperativos multijugador'), "El cooperativo definitivo", 15000, "Matar zombies en familia siempre es un gustazo. Y mas con machete","Left 4 dead 2")];

  getRecomendacionesOf(){     //Recibe las recomendaciones de un usuario especifico
    return this.recomendaciones;
  }

  getRecomendacionesDeMentores(){   //Recibe las recomendaciones de los mentores que sigue el usuario
    return this.recomendaciones;
  }

  addRecomendacion (recom: Recomendacion){
    this.recomendaciones.push(recom);
  }

}
