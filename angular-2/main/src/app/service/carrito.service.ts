import {Injectable} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts';
import {Oferta} from '../classes/oferta.model.ts';

@Injectable()
export class CarritoService {
    private pedido:(Juego|Oferta)[] = [(1,new Juego("../img/bioshock.jpg", "Bioshock", "BioShock es un shooter distinto a todos los que has jugado antes, lleno de armas y tacticas nunca vistas. Tendras un completo arsenal a tu disposicion: desde sencillos revolveres a lanzagranadas y lanzadores de productos quimicos, pero tambien estaras obligado a modificar tu ADN", 19.99, 7.9, ["FPS", "Accion", "Atmosferico", "Buena trama", "Terror"], ["PC", "PS3"])),
        (1,new Juego("../img/bioshock.jpg", "Bioshock", "BioShock es un shooter distinto a todos los que has jugado antes, lleno de armas y tacticas nunca vistas. Tendras un completo arsenal a tu disposicion: desde sencillos revolveres a lanzagranadas y lanzadores de productos quimicos, pero tambien estaras obligado a modificar tu ADN", 19.99, 7.9, ["FPS", "Accion", "Atmosferico", "Buena trama", "Terror"], ["PC", "PS3"])),(1,new Oferta("Dark Souls III", "Descuento del 10% en el juego de Dark Souls III", '../img/darkSouls.png', [new Juego("../img/darSouls.png", "Dark Souls III", "Dark Souls continua redefiniendo los limites con el nuevo y ambicioso capitulo de esta serie revolucionaria, tan aclamada por la critica. ¡Preparate para sumergirte en la oscuridad!", 40.99, 8, ['Dark Fantasy', 'Dificil', 'Atmosferico', 'Rol', 'PvP'], ['PC', 'PS4'])], 0.1, 40.99, 36.99)),
        (1,new Oferta("Pack: The Binding of Isaac", "Pack que contiene el juego The binding of Isaac:Rebirth y su dlc The binding of Isaac:Afterbirth", "../img/carritoService1.jpg", [new Juego("../img/tboi.jpg", "The binding of isaac: Rebirth", "The binding of Isaac: Rebirth es un action RPG shooter con unos fuertes elementos de Rogue-like. Seguiremos a Isaac en su viaje en los que lo jugadores encontraran bizarros tesoros que hara que Isaac tendra habilidades de super humano, que le posibilitaran volar, descubrir secretos...", 14.99, 10, ["Indie", "Replay Value", "Rogue-like", "Dificil", "Remake"], ["PC", "Nintendo DS"]), new Juego("../img/tboi.jpg", "The binding of isaac: Afterbirth", "The binding of Isaac: Afterbirth es la expansion del juego Rogue-like más vendido del año 2014. En esta actualizacion los jugadores podran encontrar tesoros bizarros que cambiaran la forma de Isaac dotandole de habilidades sobre humanas y que le permitiran luchar contra mistoriosas criaturas, descubrir secretos y luchar por su camino hacia la salvación", 10.99, 9.5, ["Indie", "Replay Value", "Rogue-like", "Dificil", "Remake"], ["PC", "Nintendo DS"])], 0.2, 25.99, 20.8))
    ];
    getPedido(){
        return this.pedido;
    }
    addOfertaPedido(oferta: Oferta) {
        var existe = false;
        for (var juego of this.pedido){
            if(juego.nombre==oferta.nombre){
                juego.cantidad+=1;
                existe = true;
                break;
            }
        }
        if(!existe){
            this.pedido.push(oferta);
        }
    }
    addJuegoPedido(juego1: Juego) {
        var existe = false;
        for (var juego of this.pedido){
            if(juego.nombre==juego1.nombre){
                juego.cantidad+=1;
                existe = true;
                break;
            }
        }
        if(!existe){
            this.pedido.push(juego1);
        }
    }

    eliminar(juego:Juego|Oferta){
        var i = 0;
        for(var juego1 of this.pedido){
            if(juego.nombre==juego1.nombre){
                this.pedido.splice(i,1);
            }
            i++;
        }
    }
    vaciar(){
        this.pedido = [];
    }

}
