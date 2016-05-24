import {CurrentUserService} from "../service/currentUser.service";
import {user} from "../classes/user.model";
import {JuegosService} from "../service/juegos.service";
import {UsersService} from "../service/users.service";
import {Component, Output,EventEmitter} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {Mentor2} from './mentor2mentores.component';
import {Juego} from '../classes/juego.model';

@Component({
  selector:'recomendaciones',
  templateUrl: 'app/mentores/recomendacionesEstruc.component.html',
  directives:[Mentor2],
})
export class Recomendaciones{

  private recomendaciones: Recomendacion[];
  private juegos : Juego[];
  private curUs: user;
  titulo = '';
  descripcion = '';
  tituloJuego: string;


  @Output()
  editRec = new EventEmitter<Recomendacion>();

  constructor(private juegosService: JuegosService, private curUserSer: CurrentUserService, private usrService : UsersService){}

  ngOnInit(){
    this.juegosService.getJuegos().subscribe(
       response=> this.juegos = response,
       error=> console.error('Error: '+error)
      );
    this.curUs = this.curUserSer.getCurrentUser();
    this.curUserSer.getRecomendaciones().subscribe(
    	response=> this.recomendaciones = response,
    	error=> console.error('Error: '+error)
    );
  }

  editarRecomendacion(recomend: Recomendacion){
    this.editRec.next(recomend);
  }

  addRecomendacion(){
    this.juegosService.getJuego(this.tituloJuego).subscribe(
    	result => {
    				var ju:Juego = result;
            var juego = new Juego(ju.imagen,ju.nombre,ju.descripcion,ju.precio,ju.valoracion,ju.tags,ju.plataforma);
            juego.id = ju.id;
            
    				var recom = new Recomendacion(this.curUs,this.titulo,0,this.descripcion,juego);
				    this.titulo = '';
				    this.descripcion = '';
				    
				    this.curUserSer.addRecomendacion(recom).subscribe(
		              response=>{console.log('Usuario actualizado');
					             this.curUserSer.getRecomendaciones().subscribe(
							    	response=> this.recomendaciones = response,
							    	error=> console.error('Error: '+error)
							    );
				    },
		              error=> {console.log("Usuario no actualizado")}
		            );
				    this.juegosService.addRecomendacion(recom,juego.nombre).subscribe(
				    	result => console.log("Update complete"),
				    	error => console.error(error)
				    );	    
    	},
    	error => console.error(error);
    );
  }

}
