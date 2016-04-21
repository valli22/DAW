import {Injectable} from 'angular2/core';
import {user} from '../classes/user.model';
import {Recomendacion} from '../classes/recomendacion.model';
import {Mentor} from '../classes/mentor.model';

@Injectable()
export class RecomendacionesService{
  getRecomendacionesOf(user: user){
    return [new Recomendacion(new Mentor("Diego", "diego.com", "/img/diegoUsr", "la descripcion", 18000, 20000), "El mejor roguelike", 15000, "Este juego es el mejor roguelike que ha salido nunca","The binding of Isaac: Afterbirth"),
    new Recomendacion(new Mentor("Valli", "valli.com", "/img/valliUsr", "la descripcion", 18000, 20000), "Dificil y muy entretenido", 15000, "Vas a morir. Mucho","Dark Souls III"),
    new Recomendacion(new Mentor("Peter", "peter.com", "/img/peterUsr", "la descripcion", 18000, 20000), "Genocida!", 15000, "Intenta asesinar a toda la humanidad, yo lo he conseguido","Plague Inc: Evolved"),
    new Recomendacion(new Mentor("Miguel", "miguel.com", "/img/miguelUsr", "la descripcion", 18000, 20000), "La perfeccion hecha juego", 15000, "Esto es volver a mi infancia","Ratchet y clank"),
    new Recomendacion(new Mentor("Alvaro", "alvaro.com", "/img/alvaroUsr", "la descripcion", 18000, 20000), "Bioshock sigue alucinando", 15000, "Historia increible, buenos graficos y muy muy entretenido","Bioshock Infinite"),
    new Recomendacion(new Mentor("Juanma", "juanma.com", "/img/juanmaUsr", "la descripcion", 18000, 20000), "Muy buen juego", 15000, "Pedazo de juegazo que se han marcado","Halo 3"),
    new Recomendacion(new Mentor("David", "david.com", "/img/davidUsr", "la descripcion", 18000, 20000), "Estrategia por turnos", 15000, "Muy recomendado a aquellos que hayan jugado al Final Fantasy VIII","Final Fantasy IX"),
    new Recomendacion(new Mentor("Pedro", "pedro.com", "/img/pedroUsr", "la descripcion", 18000, 20000), "11/10 IGN", 15000, "Unos graficazos y una jugabilidad increibles","Sombras de mordor"),
    new Recomendacion(new Mentor("Juan", "juan.com", "/img/juanUsr", "la descripcion", 18000, 20000), "No. No lo compres", 15000, "¿Sabes lo que es un bug? Aqui lo tienes en forma de juego","Assasin's Creed Unity"),
    new Recomendacion(new Mentor("Jose", "jose.com", "/img/joseUsr", "la descripcion", 18000, 20000), "Para los amantes de los coches", 15000, "Muy buenos graficos. Y coches. Muchos coches. Para todos los gustos","Forza Motorsport 6"),
    new Recomendacion(new Mentor("Pepe", "pepe.com", "/img/pepeUsr", "la descripcion", 18000, 20000),"Best juego de miedo EUW", 15000, "Si despues de una pelicula de miedo no puedes dormir no juegues a este juego. Flipante","Outlast"),
    new Recomendacion(new Mentor("Rodrigo", "rodrigo.com", "/img/rodrigoUsr", "la descripcion", 18000, 20000), "El cooperativo definitivo", 15000, "Matar zombies en familia siempre es un gustazo. Y mas con machete","Left 4 dead 2")];
  }

  getRecomendacionesDeMentores(user: user){
    return [new Recomendacion(new Mentor("Diego", "diego.com", "/img/diegoUsr", "la descripcion", 18000, 20000), "El mejor roguelike", 15000, "Este juego es el mejor roguelike que ha salido nunca","The binding of Isaac: Afterbirth"),
    new Recomendacion(new Mentor("Valli", "valli.com", "/img/valliUsr", "la descripcion", 18000, 20000), "Dificil y muy entretenido", 15000, "Vas a morir. Mucho","Dark Souls III"),
    new Recomendacion(new Mentor("Peter", "peter.com", "/img/peterUsr", "la descripcion", 18000, 20000), "Genocida!", 15000, "Intenta asesinar a toda la humanidad, yo lo he conseguido","Plague Inc: Evolved"),
    new Recomendacion(new Mentor("Miguel", "miguel.com", "/img/miguelUsr", "la descripcion", 18000, 20000), "La perfeccion hecha juego", 15000, "Esto es volver a mi infancia","Ratchet y clank"),
    new Recomendacion(new Mentor("Alvaro", "alvaro.com", "/img/alvaroUsr", "la descripcion", 18000, 20000), "Bioshock sigue alucinando", 15000, "Historia increible, buenos graficos y muy muy entretenido","Bioshock Infinite"),
    new Recomendacion(new Mentor("Juanma", "juanma.com", "/img/juanmaUsr", "la descripcion", 18000, 20000), "Muy buen juego", 15000, "Pedazo de juegazo que se han marcado","Halo 3"),
    new Recomendacion(new Mentor("David", "david.com", "/img/davidUsr", "la descripcion", 18000, 20000), "Estrategia por turnos", 15000, "Muy recomendado a aquellos que hayan jugado al Final Fantasy VIII","Final Fantasy IX"),
    new Recomendacion(new Mentor("Pedro", "pedro.com", "/img/pedroUsr", "la descripcion", 18000, 20000), "11/10 IGN", 15000, "Unos graficazos y una jugabilidad increibles","Sombras de mordor"),
    new Recomendacion(new Mentor("Juan", "juan.com", "/img/juanUsr", "la descripcion", 18000, 20000), "No. No lo compres", 15000, "¿Sabes lo que es un bug? Aqui lo tienes en forma de juego","Assasin's Creed Unity"),
    new Recomendacion(new Mentor("Jose", "jose.com", "/img/joseUsr", "la descripcion", 18000, 20000), "Para los amantes de los coches", 15000, "Muy buenos graficos. Y coches. Muchos coches. Para todos los gustos","Forza Motorsport 6"),
    new Recomendacion(new Mentor("Pepe", "pepe.com", "/img/pepeUsr", "la descripcion", 18000, 20000),"Best juego de miedo EUW", 15000, "Si despues de una pelicula de miedo no puedes dormir no juegues a este juego. Flipante","Outlast"),
    new Recomendacion(new Mentor("Rodrigo", "rodrigo.com", "/img/rodrigoUsr", "la descripcion", 18000, 20000), "El cooperativo definitivo", 15000, "Matar zombies en familia siempre es un gustazo. Y mas con machete","Left 4 dead 2")];
  }

}
