import {Injectable} from 'angular2/core';
import {user} from '../classes/user.model.ts';

@Injectable()
export class UsersService{
  private usuarios = [
      // fotoPerfil - nombre- correo-pass-fechaNacimiento -steam-bnet-descripcion-descripcionMentor--
      new user('../../img/perfil.png','miguel','miguel@gmail.com','1234','1995-02-06','miguelr95','roldan','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
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
      new user('../../img/perfil.png','admin','admin@gmail','admin','1990-06-22','admin','admin','soy el admin','soy el admin')
    ];
  getUsers(){
    return this.usuarios;
  }
  addUser(user:user){
    this.usuarios.push(user);
  }

}
// fotoPerfil - nombre- correo-pass-fechaNacimiento -steam-bnet-descripcion-descripcionMentor--
