import {Injectable} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const BASE_URL = 'https://127.0.0.1:8443';

@Injectable()
export class JuegosService{

  private juegos = [
    new Juego("../img/darkSouls.png","Dark Souls III","Dark Souls continua redefiniendo los limites con el nuevo y ambicioso capitulo de esta serie revolucionaria, tan aclamada por la critica. ¡Preparate para sumergirte en la oscuridad!",40.99,8,['Dark Fantasy','Dificil','Atmosferico','Rol','PvP'],['PC','PS4']),
    new Juego("../img/plagueInc.jpg","Plague Inc: Evolved","Plague Inc: Evolved es una mezcla unica entre profunda estrategia y simulacion tremendamente realista. Tu patogeno solo ha infectado a un paciente cero - ahora debes poner fin a la humanidad haciendo evolucionar una plaga mortal y global mientras la humanidad hace lo que puede para salvarse.",14.99,6.6,["Estrategia","Simuladores","Indie","Un jugador","2D"],["PC"]),
    new Juego("../img/tboi.jpg","The binding of isaac: Rebirth","The binding of Isaac: Rebirth es un action RPG shooter con unos fuertes elementos de Rogue-like. Seguiremos a Isaac en su viaje en los que lo jugadores encontraran bizarros tesoros que hara que Isaac tendra habilidades de super humano, que le posibilitaran volar, descubrir secretos...",14.99,10,["Indie","Replay Value","Rogue-like","Dificil","Remake"],["PC","Nintendo DS"]),
    new Juego("../img/RatchetyClank.jpg","Ratchet y clank","Esta divertida saga vuelve mas fuerte que nunca. Preparate para las mejores aventuras junto con nuestros queridos amigos Ratchet y Clank.",40.99,9,["Un jugador","Divertido","Historia"],["PS4"]),
    new Juego("../img/bioshock.jpg","Bioshock","BioShock es un shooter distinto a todos los que has jugado antes, lleno de armas y tacticas nunca vistas. Tendras un completo arsenal a tu disposicion: desde sencillos revolveres a lanzagranadas y lanzadores de productos quimicos, pero tambien estaras obligado a modificar tu ADN",19.99,7.9,["FPS","Accion","Atmosferico","Buena trama","Terror"],["PC","PS3"]),
    new Juego("../img/halo.jpg","Halo 3","El juego es el tercer titulo de una serie que empezo con Halo: Combat Evolved y siguio con Halo 2. Este juego se centra en la guerra interestelar entre la humanidad del siglo XXVI, y una agruacion de razas alienigenas conocida como el Covenant",9.99, 6.7,["Shooter","Historia","Exclusivo"],["XBOX 360"]),
    new Juego("../img/fifa.jpg","Fifa 16","Uno de los mejores juegos deportivos de soccer. Esta nueva entrega contiene una mejora en aspectos graficos y una mayor realidad.",4,29.40,["Deporte","Soccer","Futbol","2016"],["PS4","XBOX ONE"]),
    new Juego("../img/l4d2.jpg","Left 4 dead 2","Ambientado en el apocalipsis zombie, Left 4 Dead 2 es la secuela largamente esperada del galardonado Left 4 Dead, el juego co-op numero 1 de 2008. Este FPS cooperativo de accion y horror os llevara a ti y a tu amigos por as ciudades, pantanos y cementerios del Sur Profundo.",19.99,8.5,["Zombies","Cooperativo","FPS","Multijugador","Accion"],["PC"]),
    new Juego("../img/helloKitty.jpg","Hello kitty online","Esta obra de arte del mundo contemporaneo os hara creer que el mundo es maravilloso sin necesidad de tomar drogas. No hay mas que añadir",0,99.99,["Drogas","Accion","Sangre"],["PS4","Nintendo DS","WII","XBOX ONE"]),
    new Juego("../img/outlast.jpg", "Outlast","El infierno es un experimento en el cual no podras sobrevivir en Outlast, un juego en primera persona survival horror desarrollado por veteranos de las mejores franquicias de videojuegos en la historia.",9.2,19.99,["Terror","Atmosferico","Primera Persona","Aventura"],["PC","PS4"]),
    new Juego("../img/ffIX.jpg","Final Fantasy IX","FINAL FANTASY IX, uno de los juegos de rol japoneses mas aclamados, fue lanzado al mercado en el año 2000 y se convirtio en un exito con mas de 5,5 millones de copias vendidas en el mundo",8,20.99,["JRPG","Clasico","Gran banda sonora","Buena trama"],["PC","PS4"]),
    new Juego("../img/minecraft.jpg","Minecraft","Minecraft es un juego en mundo abierto, basado en los graficos pixelados. En este mundo intentaras sobrevivir empezando sin nada y consiguiendo items a partir del entorno que te rodea gracias a la mecanica de crafteos.",7.9,20,["Mundo abierto","Crafteos","Survival"],["PC","PS4"]),
    new Juego("../img/som.jpg","Sombras de mordor","Lucha en Mordor, descubre la verdad del espiritu que te fuerza, el origen de los Anillos de Poder, erige tu leyenda y enfrentate a Sauron en esta nueva cronica de la Tierra-Media",8.2,49.99,["Accion","Mundo abierto","Aventura","Fantasia","Rol"],["PS4","PC"]),
    new Juego("../img/unity.jpg","Assasin's Creed Unity","Presentamos Assassins Creed Unity, la evolucion para la nueva generacion de la serie de juegos superventas, ahora con la potencia del renovado motor grafico Anvil. Revive a Revolucion Francesa como nunca ants lo habias hecho, desde el asalto y toma de la Bastilla hasta la ejecucion del rey Luis XVI, y ayuda al pueblo frances a forjar su nuevo destino.",6,59.95,["Historia"],["PC","PS4","XBOX ONE"]),
    new Juego("../img/forza.jpg","Forza Motorsport 6", "Forza Motorsport 6 es la accion incesante a velocidad de simulacion en el juego de carreras mas hermoso y completo de esta generacion. Colecciona, personaliza y pilota mas de 450 coches ForzaVista con cabinas funcionales y daños realisas. Compite en carreras epicas para 24 jugadores en 26 emplazamientos de fama mundial.",7.5,69.99,["Deportes","Coches","Realista"],["XBOX ONE"])
  ];
  
  //constructor(private http: Http){}

  getJuegos(){
  	/*return this.http.get(BASE_URL + '/allJuegos')
  	.map(response => response.json())
  	.catch(error => this.handleError(error));*/
    return this.juegos;
  }

  addJuego(juego : Juego){
  	/*let body = JSON.stringify(juego);
  	let headers = new Headers({
  		'Content-type': 'application/json'
  	});
  	let options = new RequestOptions({ headers });
  	
  	return this.http.post(BASE_ULR+'/addJuego', body, options)
  		.map(response => response.json())
  		.catch(error => this.handleError(error));*/
    this.juegos.push(juego);
  }

  getJuego(nombre : string){
  	/*return this.http.get(BASE_URL+'/getJuego/'+nombre)
  		.map(response => response.json())
  		.catch(error => this.handleError(error));*/
    for (let i = 0; i < this.juegos.length; i++) {
        if(this.juegos[i].nombre==nombre){return this.juegos[i]};
    }
  }
  
 /* deleteJuego(nombre: string){
  	return this.http.delete(BASE_URL+'/deleteJuego/'+nombre)
  		.map(response => response.json())
  		.catch(error => this.handleError(error));
  }*/

}
