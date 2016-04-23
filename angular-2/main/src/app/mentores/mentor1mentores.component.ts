import {CurrentUserService} from "../service/currentUser.service";
import {user} from "../classes/user.model";
import {Component, Input} from 'angular2/core';

@Component({
  selector:'mentor1mentores',
  templateUrl: 'app/mentores/mentor1mentores.component.html'
})
export class Mentor1{

  @Input()
  private mentor: user;
  private curUs: user;
  private follow: boolean = false;

  constructor(private curUsService: CurrentUserService){}

  ngOnInit(){
    this.curUs = this.curUsService.getCurrentUser();
    var mentores = this.curUs.mentoresSiguiendo;
    var i = 0;
    while (!this.follow && i < mentores.length){
      this.follow = mentores[i] == this.mentor;
      i++;
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

}
