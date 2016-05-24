import {user} from "../classes/user.model";
import {CurrentUserService} from "../service/currentUser.service";
import {UsersService} from "../service/users.service";
import {Component, Input,Output,EventEmitter} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector:'mentor3mentores',
  templateUrl: 'app/mentores/mentor3mentores.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class Mentor3{

  @Input()
  private recomendacion: Recomendacion;

  @Output()
  refrescar = new EventEmitter<boolean>();

  disabled: boolean = false;
  private curUs: user;
  private dataUp = false;

  constructor(private curUsService: CurrentUserService, private userService: UsersService){}

  ngOnInit(){
    this.curUs = this.curUsService.getCurrentUser();
    this.existeRecomendacionMeGusta();
  }

  dejarSeguir(){
    this.userService.dejarDeSeguir(this.curUs.id,this.recomendacion.mentor).subscribe(
    	response => {
    		this.refrescar.next(true);
    		console.log("Usuario dejado de seguir");
    		},
    	error => {
    		this.refrescar.next(true);
    		console.log('Error');
    	}
    );
    
  }

  meGusta(){
    this.recomendacion.meGusta += 1;
    
    this.userService.addRecomendacionMeGusta(this.recomendacion,this.curUs.id,this.recomendacion.mentor.id).subscribe(
    	response => {console.log("Recomendacion me gusta añadida");
    				this.existeRecomendacionMeGusta();
    				console.log(this.disabled);
    				},
    	error => console.error(error)
    );
  }

  noMeGusta(){
    this.recomendacion.meGusta -= 1;
    this.userService.deleteRecomendacionMeGusta(this.recomendacion,this.curUs.id,this.recomendacion.mentor.id).subscribe(
    	response => {console.log("Recomendacion me gusta añadida");
    				this.existeRecomendacionMeGusta();
    				console.log(this.disabled);},
    	error => console.error(error)
    );
   }

	existeRecomendacionMeGusta(){
		
		this.dataUp=false;
		var arRec : Recomendacion[];
		this.userService.getRecomendacionesMeGusta(this.curUs.id).subscribe(
		    	response => { 
		    			var encontrado = false;
		    			console.log(response);
					    arRec = response;
					    for(var rec of arRec){
					    	if(rec.id==this.recomendacion.id){
					    		console.log("ENCONTRADO ")
					    		encontrado=true;
					    	}
					    }
					    console.log("NO ENCONTRADO ");
					    this.disabled=encontrado;
					    this.dataUp=true;
					    },
				error => console.log(error)
		    );
		}

  }

}
