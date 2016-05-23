import {CurrentUserService} from "../service/currentUser.service";
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

  constructor(private curUsService: CurrentUserService){}

  ngOnInit(){
    this.curUs = this.curUsService.getCurrentUser();
    var mentores = this.curUs.mentoresSiguiendo;
    if (this.curUs == this.mentor){
      this.follow = true;
      this.us = true;
    }
    var i = 0;
    if(mentores){
	    while (!this.follow && i < mentores.length){
	      this.follow = mentores[i] == this.mentor;
	      i++;
	    }
    }
  }

  seguirMentor(){
    this.curUs.addMentor(this.mentor);
    this.mentor.addSeguidor();
    this.follow = true;
  }

  dejarSeguirMentor(){
    this.curUs.delMentor(this.mentor);
    this.mentor.seguidores--;
    this.follow = false;
  }

  siguiendo(){
    return this.follow;
  }

  oculto(){
    return !this.us;
  }

}
