import {Component,Output,EventEmitter,View} from 'angular2/core';
@Component({
    selector: 'menuComponent',
    templateUrl: 'app/menu.component.html'
})
export class MenuComponent {

    usuario = "pepito";
    pass = "1234";
    @Output()
    myuser = new EventEmitter<string>();


    fireUser (){
      console.log(this.usuario)
      this.myuser.next(this.usuario);
    }
}
