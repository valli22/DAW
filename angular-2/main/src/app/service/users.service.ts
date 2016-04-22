import {Injectable} from 'angular2/core';
import {user} from '../classes/user.model.ts';

@Injectable()
export class UsersService{
  private usuarios = [
      // fotoPerfil - nombre- correo-pass-fechaNacimiento -steam-bnet-descripcion-descripcionMentor--
      new user('../../img/perfil.png','miguel','miguel@gmail.com','1234','1995-22-06','miguelr95','roldan','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','valli','valli@gmail.com','1234','1995-18-02','valli22','valli22','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','pedro','pedro@gmail.com','1234','1995-20-05','dropelega','dropelega','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','diego','diego@gmail.com','1234','1995-19-05','zigic','zigic','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfilmujer.png','nazaret','nazaret@gmail.com','1234','1995-10-04','nazius','nazius','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfilmujer.png','andrea','andrea@gmail.com','1234','1995-29-01','andrewii','andrewii','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','luisca','luisca@gmail.com','1234','1995-08-06','luisqui','jimlu','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','mario','mario@gmail.com','1234','1991-10-03','tomate','tomate','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','sergio','sergio@gmail.com','1234','1994-07-12','Capitan Platano','Capitan Platano','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','alberto','alberto@gmail.com','1234','1992-22-06','melchor','baekarlash','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfilmujer.png','victoria','miguel@gmail.com','1234','1994-26-05','Wellesandra','Wellesandra','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','chiky','chiky@gmail.com','1234','1996-22-06','chikybob','chiky','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),
      new user('../../img/perfil.png','micael','micael@gmail.com','1234','1985-22-06','micadaw','micadawc','Gamer con ganas de jugar y aprender','Te enseñare todo lo que se de videojuegos'),

    ];
  getUsers(){
    return this.usuarios;
  }
  addUser(user:user){
    this.usuarios.push(user);
  }

}
// fotoPerfil - nombre- correo-pass-fechaNacimiento -steam-bnet-descripcion-descripcionMentor--
