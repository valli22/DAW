import {Component,Input,Output,EventEmitter,View} from 'angular2/core';
@Component({
    selector: 'menuComponent',
    templateUrl: 'app/menu.component.html'
})
export class MenuComponent {
    @Input()
    private isActive = false;
    usuario = "";
    pass = "";

    @Output()
    myuser = new EventEmitter<string>();


    fireUser (){
      this.myuser.next(this.usuario);
    }
}
