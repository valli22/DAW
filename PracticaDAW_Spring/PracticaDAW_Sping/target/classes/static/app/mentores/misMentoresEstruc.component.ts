import {CurrentUserService} from "../service/currentUser.service";
import {user} from "../classes/user.model";
import {Component} from 'angular2/core';
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

  constructor(private userService: CurrentUserService){}

  ngOnInit(){
    this.curUs = this.userService.getCurrentUser();
    this.userService.getMentores().subscribe(
      response=>{
       this.mentores = response;
       for(var i = 0; i < this.mentores.length; i++){
        if (this.mentores[i].recomendaciones != undefined){
          for (var j = 0; j < this.mentores[i].recomendaciones.length; j++){
            this.recomendaciones.push(this.mentores[i].recomendaciones[j]);
          }
        }
       }
      },
      error => console.error('Error: '+error)
    );
    
  }
  refreshRecomendaciones(refrescar:boolean){
    if(refrescar){
      this.mentores=this.curUs.mentoresSiguiendo;
      this.recomendaciones=[];
      for(var mentor of this.mentores){
        for(var recomendacion of mentor.recomendaciones){
          this.recomendaciones.push(recomendacion)
        }
      }
    }
  }

}
