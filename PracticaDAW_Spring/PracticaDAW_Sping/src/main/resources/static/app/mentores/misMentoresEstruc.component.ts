import {CurrentUserService} from "../service/currentUser.service";
import {UsersService} from "../service/users.service";
import {user} from "../classes/user.model";
import {Component, Input,Output,EventEmitter} from 'angular2/core';
import {Recomendacion} from '../classes/recomendacion.model';
import {Mentor3} from './mentor3mentores.component';

@Component({
  selector:'misMentores',
  templateUrl: 'app/mentores/misMentoresEstruc.component.html',
  directives:[Mentor3],
})
export class MisMentores{

  private mentores: user[];
  private recomendaciones: Recomendacion[] = [];
  private curUs: user;
  private dataUp = false;
  @Output()
  refrescar = new EventEmitter<boolean>();
  constructor(private userService: CurrentUserService, private service : UsersService){}

  ngOnInit(){
    this.curUs = this.userService.getCurrentUser();
    this.userService.getMentores().subscribe(
      response=>{
       this.mentores = response;
       for(var i = 0; i < this.mentores.length; i++){
       
       	this.service.getRecomendaciones(this.mentores[i].id).subscribe(
	    	response=> {let recomendaciones = response
	    				for (var rec of recomendaciones){
	    					this.recomendaciones.push(rec);
	    				}
	    				this.dataUp = true;
	    				},
	    	error=> console.error('Error: '+error)
	    );
       }
      },
      error => console.error('Error: '+error)
      
    );
  }
  refreshRecomendaciones(refrescar:boolean){
    if(refrescar){
    	this.dataUp=false;
      	this.userService.getMentores().subscribe(
	      response=>{
	       this.mentores = response;
	       for(var i = 0; i < this.mentores.length; i++){
	       
	       	this.service.getRecomendaciones(this.mentores[i].id).subscribe(
		    	response=> {let recomendaciones = response
		    				for (var rec of recomendaciones){
		    					this.recomendaciones.push(rec);
		    				}
		    				this.dataUp = true;
		    				},
		    	error=> console.log('Error: '+error)
		    );
		    
	       }
	      },
	      error => console.log('Error')
	      
	    );
	    this.refrescar.next(true);
    }
  }

}
