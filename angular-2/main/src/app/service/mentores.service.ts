import {Injectable} from 'angular2/core';
import {user} from '../profile/user.model';
import {Mentor} from '../classes/mentor.model';

@Injectable()
export class MentoresService{

  getMentoresSiguiendo(user: user){
    return [new Mentor("Diego", "diego.com", "/img/diegoUsr", "la descripcion", 18000, 20000),
    new Mentor("Valli", "valli.com", "/img/valliUsr", "la descripcion", 18000, 20000),
    new Mentor("Peter", "peter.com", "/img/peterUsr", "la descripcion", 18000, 20000),
    new Mentor("Miguel", "miguel.com", "/img/miguelUsr", "la descripcion", 18000, 20000),
    new Mentor("Alvaro", "alvaro.com", "/img/alvaroUsr", "la descripcion", 18000, 20000),
    new Mentor("Juanma", "juanma.com", "/img/juanmaUsr", "la descripcion", 18000, 20000),
    new Mentor("David", "david.com", "/img/davidUsr", "la descripcion", 18000, 20000),
    new Mentor("Pedro", "pedro.com", "/img/pedroUsr", "la descripcion", 18000, 20000),
    new Mentor("Juan", "juan.com", "/img/juanUsr", "la descripcion", 18000, 20000),
    new Mentor("Jose", "jose.com", "/img/joseUsr", "la descripcion", 18000, 20000),
    new Mentor("Pepe", "pepe.com", "/img/pepeUsr", "la descripcion", 18000, 20000),
    new Mentor("Rodrigo", "rodrigo.com", "/img/rodrigoUsr", "la descripcion", 18000, 20000),
    new Mentor("Francisco", "francisco.com", "/img/franciscoUsr", "la descripcion", 18000, 20000),
    new Mentor("Paco", "paco.com", "/img/pacoUsr", "la descripcion", 18000, 20000),
    new Mentor("Raul", "raul.com", "/img/raulUsr", "la descripcion", 18000, 20000),
    new Mentor("Daniel", "daniel.com", "/img/danielUsr", "la descripcion", 18000, 20000)];
  }

  getMentoresAleatorios(){
    return [new Mentor("Diego", "diego.com", "/img/diegoUsr", "la descripcion", 18000, 20000),
    new Mentor("Valli", "valli.com", "/img/valliUsr", "la descripcion", 18000, 20000),
    new Mentor("Peter", "peter.com", "/img/peterUsr", "la descripcion", 18000, 20000),
    new Mentor("Miguel", "miguel.com", "/img/miguelUsr", "la descripcion", 18000, 20000),
    new Mentor("Alvaro", "alvaro.com", "/img/alvaroUsr", "la descripcion", 18000, 20000),
    new Mentor("Juanma", "juanma.com", "/img/juanmaUsr", "la descripcion", 18000, 20000),
    new Mentor("David", "david.com", "/img/davidUsr", "la descripcion", 18000, 20000),
    new Mentor("Pedro", "pedro.com", "/img/pedroUsr", "la descripcion", 18000, 20000),
    new Mentor("Juan", "juan.com", "/img/juanUsr", "la descripcion", 18000, 20000),
    new Mentor("Jose", "jose.com", "/img/joseUsr", "la descripcion", 18000, 20000),
    new Mentor("Pepe", "pepe.com", "/img/pepeUsr", "la descripcion", 18000, 20000),
    new Mentor("Rodrigo", "rodrigo.com", "/img/rodrigoUsr", "la descripcion", 18000, 20000),
    new Mentor("Francisco", "francisco.com", "/img/franciscoUsr", "la descripcion", 18000, 20000),
    new Mentor("Paco", "paco.com", "/img/pacoUsr", "la descripcion", 18000, 20000),
    new Mentor("Raul", "raul.com", "/img/raulUsr", "la descripcion", 18000, 20000),
    new Mentor("Daniel", "daniel.com", "/img/danielUsr", "la descripcion", 18000, 20000)];
  }

  getNombreMentoresSig(user: user){
    return ["Diego","Valli","Peter","Miguel","Alvaro","Juanma","David","Pedro","Juan","Jose","Pepe","Rodrigo","Fracisco","Paco","Raul","Daniel"];
  }

}
