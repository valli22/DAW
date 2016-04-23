import {Injectable} from 'angular2/core';
import {user} from '../classes/user.model.ts';

@Injectable()
export class MentoresService{

  mentores: user[] = [new user('../../img/perfil.png', 'Diego', 'diego@gmail.com','1234','1995-23-05','zigic','jimenez',"Gamer con ganas de jugar y aprender", 'Juegos variados y de muy buena calidad'),
  new user('../../img/perfil.png','Valli','valli@gmail.com', '1234', '1995-22-01','valli','valli22','Gamer con ganas de jugar y aprender', 'Si quieres juegos de todos los tipos yo soy tu mentor'),
  new user('../../img/perfil.png','Peter','peter@gmail.com','1234','1995-23','peter','dropelega','Gamer con ganas de jugar y aprender', 'Juegos arcade y shooters variados'),
  new user('../../img/perfil.png','miguel','miguel@gmail.com','1234','1995-22-06','miguelr95','roldan','Gamer con ganas de jugar y aprender','Amante de los juegos de estrategia'),
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
  new user('../../img/perfil.png','Daniel','daniel@gmail.com','1234','1995-9','dani','daniYeah','Gamer con ganas de jugar y aprender', 'Todos los juegos de star wars estan aqui')];

  getMentoresSiguiendo(){
    return this.mentores;
  }

  getMentoresAleatorios(){
    return this.mentores;
  }

  addMentor(us: user){
    this.mentores.push(us);
  }

}
