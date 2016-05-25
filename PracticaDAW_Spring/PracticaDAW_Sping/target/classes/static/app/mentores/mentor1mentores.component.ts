import {CurrentUserService} from "../service/currentUser.service";
import {UsersService} from "../service/users.service";
import {user} from "../classes/user.model";
import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector:'mentor1mentores',
  templateUrl: 'app/mentores/mentor1mentores.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class Mentor1{

  @Input()
  private mentor: user;
  private curUs: user;
  private follow: boolean = false;
  private us: boolean = false;

  constructor(private curUsService: CurrentUserService, private userService : UsersService){}

  ngOnInit(){
    this.curUs = this.curUsService.getCurrentUser();
    this.curUsService.getMentores().subscribe(
    
      response=> {
        var mentores = response;
        if (this.curUs.id == this.mentor.id){
          this.follow = true;
          this.us = true;
        }
        
        for( var mentor of mentores){
        	if(mentor.id == this.mentor.id){
        		this.follow=true;
        		break;
        	}
        }
      },
      error=> console.log('Error: '+error)
      
    );
  }

  seguirMentor(){
  
  	this.userService.seguir(this.curUs.id,this.mentor).subscribe(
	    	response => {
	    		console.log("Usuario seguido");
	    		this.mentor.seguidores+=1;
	    		this.follow = true;
	    		},
	    	error => {
	    		this.follow = true;
	    		this.mentor.seguidores+=1;
	    		console.log('Usuario seguido');
	    	}
	    );
 
  }

  dejarSeguirMentor(){
  
  
	  this.userService.dejarDeSeguir(this.curUs.id,this.mentor).subscribe(
	    	response => {
	    		console.log("Usuario dejado de seguir");
	    		this.mentor.seguidores-=1;
	    		this.follow = false;
	    		},
	    	error => {
	    		this.follow = false;
	    		this.mentor.seguidores-=1;
	    		console.log('Usuario dejado de seguir');
	    	}
	    );
  }

  siguiendo(){
    return this.follow;
  }

  oculto(){
    return !this.us;
  }

}
