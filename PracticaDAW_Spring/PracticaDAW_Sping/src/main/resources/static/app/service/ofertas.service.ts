import {Injectable} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts';
import {Oferta} from '../classes/oferta.model.ts'
import { Http, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class OfertasService{

  private ofertas = [
    new Oferta('Doble deportive doble diversion','En este pack de juegos tenemos dos de los mejores juegos deportivos que han salido este año. Gracias a esta oferta podra disfrutar de Forza 6 y Fifa 16 con un gran descuento del 20%.','../img/ofertaDeportiva.png',[new Juego("../img/fifa.png","Fifa 16","Uno de los mejores juegos deportivos de soccer. Esta nueva entrega contiene una mejora en aspectos graficos y una mayor realidad.",4,29.40,["Deporte","Soccer","Futbol","2016"],["PS4","XBOX ONE"]),new Juego("../img/forza.jpg","Forza Motorsport 6", "Forza Motorsport 6 es la accion incesante a velocidad de simulacion en el juego de carreras mas hermoso y completo de esta generacion. Colecciona, personaliza y pilota mas de 450 coches ForzaVista con cabinas funcionales y daños realisas. Compite en carreras epicas para 24 jugadores en 26 emplazamientos de fama mundial.",7.5,69.99,["Deportes","Coches","Realista"],["XBOX ONE"])],20,99.46,79.56),
    new Oferta('Oferta de salida Dark Souls III','Vas a poder disfrutar de este juego en su reciente salida gracias a esta gran oferta. El tercer juego de la saga conocida por su dificultad.','../img/darkSouls.png',[new Juego("../img/darSouls.png","Dark Souls III","Dark Souls continua redefiniendo los limites con el nuevo y ambicioso capitulo de esta serie revolucionaria, tan aclamada por la critica. ¡Preparate para sumergirte en la oscuridad!",40.99,8,['Dark Fantasy','Dificil','Atmosferico','Rol','PvP'],['PC','PS4'])],10,40.99,36.89),
    new Oferta('El mejor juego online ya en oferta','Disfrutaras del mejor juego online gracias a esta oferta. Hello Kitty online estara al precio de cualquiera que tenga ganas de jugar esto.','../img/helloKitty.jpg',[new Juego("../img/helloKitty.jpg","Hello kitty online","Esta obra de arte del mundo contemporaneo os hara creer que el mundo es maravilloso sin necesidad de tomar drogas. No hay mas que añadir",0,99.99,["Drogas","Accion","Sangre"],["PS4","Nintendo DS","WII","XBOX ONE"])],99.99,99,0.99),
    new Oferta('LEGENDARIOS','Quieres disfrutar de juegos unos de los juegos mas legendarios que se han creado? Con esta oferta podras disfrutar de ellos si es que todavia no lo habias hecho.','../img/legendarios.png',[new Juego("../img/RatchetyClank.jpg","Ratchet y clank","Esta divertida saga vuelve mas fuerte que nunca. Preparate para las mejores aventuras junto con nuestros queridos amigos Ratchet y Clank.",9,40.99,["Un jugador","Divertido","Historia"],["PS4"]),new Juego("../img/bioshock.jpg","Bioshock","BioShock es un shooter distinto a todos los que has jugado antes, lleno de armas y tacticas nunca vistas. Tendras un completo arsenal a tu disposicion: desde sencillos revolveres a lanzagranadas y lanzadores de productos quimicos, pero tambien estaras obligado a modificar tu ADN",19.99,7.9,["FPS","Accion","Atmosferico","Buena trama","Terror"],["PC","PS3"]),new Juego("../img/ffIX.jpg","Final Fantasy IX","FINAL FANTASY IX, uno de los juegos de rol japoneses mas aclamados, fue lanzado al mercado en el año 2000 y se convirtio en un exito con mas de 5,5 millones de copias vendidas en el mundo",8,20.99,["JRPG","Clasico","Gran banda sonora","Buena trama"],["PC","PS4"])],50,81.97,40.97),
    new Oferta('Es la hora del miedo Outlast','Quieres tener miedo? Estar en tension? Tener la adrenalina por las nubes? Esta es tu oportunidad de conseguir uno de los mejores juegos de miedo que se han creado: Outlast','../img/outlast.jpg',[new Juego("../img/outlast.jpg", "Outlast","El infierno es un experimento en el cual no podras sobrevivir en Outlast, un juego en primera persona survival horror desarrollado por veteranos de las mejores franquicias de videojuegos en la historia.",9.2,19.99,["Terror","Atmosferico","Primera Persona","Aventura"],["PC","PS4"])],10,19.99,17.99),
    new Oferta('Plan XBOX','En esta oferta tendras los mejores juegos exclusivos de xbox hasta el momento. Te arrepentiras de no comprarla.','../img/exclusivos.png',[new Juego("../img/halo.jpg","Halo 3","El juego es el tercer titulo de una serie que empezo con Halo: Combat Evolved y siguio con Halo 2. Este juego se centra en la guerra interestelar entre la humanidad del siglo XXVI, y una agruacion de razas alienigenas conocida como el Covenant",9.99, 6.7,["Shooter","Historia","Exclusivo"],["XBOX 360"]),new Juego("../img/forza.jpg","Forza Motorsport 6", "Forza Motorsport 6 es la accion incesante a velocidad de simulacion en el juego de carreras mas hermoso y completo de esta generacion. Colecciona, personaliza y pilota mas de 450 coches ForzaVista con cabinas funcionales y daños realisas. Compite en carreras epicas para 24 jugadores en 26 emplazamientos de fama mundial.",7.5,69.99,["Deportes","Coches","Realista"],["XBOX ONE"])],25,79.98,59.98),
    new Oferta('Best roguelike in history','Disfruta del mejor juego del estilo rogue-like que se ha creado jamas. En este rework del juego se podra disfrutar de mejores graficos y mayor cantidad de objetos disponibles en el tambien probablemente mejor juego indie de la historia.','../img/tboi.jpg',[new Juego("../img/tboi.jpg","The binding of isaac: Rebirth","The binding of Isaac: Rebirth es un action RPG shooter con unos fuertes elementos de Rogue-like. Seguiremos a Isaac en su viaje en los que lo jugadores encontraran bizarros tesoros que hara que Isaac tendra habilidades de super humano, que le posibilitaran volar, descubrir secretos...",14.99,10,["Indie","Replay Value","Rogue-like","Dificil","Remake"],["PC","Nintendo DS"])],6,14.99,140.9),
    new Oferta('Imposible is nothing','while(jugar){morir();revivir();} Quieres intentar pasarte dos de los juegos mas dificiles creados hasta el momento? Si tu intencion es conseguir el 100% de estos juegos tardaras horas y horas jugando y divirtiendote para conseguirlo.','../img/imposible.png',[new Juego("../img/tboi.jpg","The binding of isaac: Rebirth","The binding of Isaac: Rebirth es un action RPG shooter con unos fuertes elementos de Rogue-like. Seguiremos a Isaac en su viaje en los que lo jugadores encontraran bizarros tesoros que hara que Isaac tendra habilidades de super humano, que le posibilitaran volar, descubrir secretos...",14.99,10,["Indie","Replay Value","Rogue-like","Dificil","Remake"],["PC","Nintendo DS"]),new Juego("../img/darSouls.png","Dark Souls III","Dark Souls continua redefiniendo los limites con el nuevo y ambicioso capitulo de esta serie revolucionaria, tan aclamada por la critica. ¡Preparate para sumergirte en la oscuridad!",40.99,8,['Dark Fantasy','Dificil','Atmosferico','Rol','PvP'],['PC','PS4'])],30,55.98,39.18),
    new Oferta('Ubisoft regala juego','En esta oferta podras obtener el ultimo juego de la saga Assesins Creed de ubisoft. Disfruta de la etapa medieval-moderna en francia gracias a este fantastico juego.','../img/unity.jpg',[new Juego("../img/unity.jpg","Assasin's Creed Unity","Presentamos Assassins Creed Unity, la evolucion para la nueva generacion de la serie de juegos superventas, ahora con la potencia del renovado motor grafico Anvil. Revive a Revolucion Francesa como nunca ants lo habias hecho, desde el asalto y toma de la Bastilla hasta la ejecucion del rey Luis XVI, y ayuda al pueblo frances a forjar su nuevo destino.",6,59.95,["Historia"],["PC","PS4","XBOX ONE"])],60,59.95,23.98),
    new Oferta('Minecraft','Disfruta de miles de horas de juego, supervivencia, crafteos, construccion, lucha... y un largo numero de caracteristicas que hacen a este juego uno de los inolvidables de esta epoca.','../img/minecraft.jpg',[new Juego("../img/minecraft.jpg","Minecraft","Minecraft es un juego en mundo abierto, basado en los graficos pixelados. En este mundo intentaras sobrevivir empezando sin nada y consiguiendo items a partir del entorno que te rodea gracias a la mecanica de crafteos.",7.9,20,["Mundo abierto","Crafteos","Survival"],["PC","PS4"])],5,20,19)
  ];
	constructor(private http:Http){ }
  getOfertas(){
    //return this.ofertas;
    return this.http.get('AllOfertas')
      .map(response => return response.json())
      .catch(error => this.handleError(error));
  }

  addOferta(oferta : Oferta){
    let body = JSON.stringify(oferta);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post('addOferta', body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));    }

    getOferta(nombre : string){
      for (let i = 0; i < this.ofertas.length; i++) {
          if(this.ofertas[i].nombre==nombre){return this.ofertas[i]};
      }
    }
    private handleError(error:any){
    	console.error(error);
    	return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}
