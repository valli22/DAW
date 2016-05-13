import {Injectable} from 'angular2/core';
import {Juego} from '../classes/juego.model.ts';
import {Oferta} from '../classes/oferta.model.ts';

@Injectable()
export class CarritoService {
    private pedido:(Juego|Oferta)[] = [];
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
