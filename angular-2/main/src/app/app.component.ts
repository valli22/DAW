import {Component,View} from 'angular2/core';
import {CabeceraComponent} from './cabecera.component.ts';
import {MenuComponent} from './menu.component.ts';
import {MainComponent} from './main/main.component.ts';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FooterComponent} from './footer.component.ts';
import {CartComponent} from './cart/cart.component.ts';
import {OfertasComponent} from './ofertas/ofertas.component';
import {EsquemaJuegoComponent} from './esquemaJuego/esquemaJuego.component.ts';
import {LoginSignupComponent} from './login-signup/loginSignup.component.ts';
import {CatalogoComponent} from './catalogo/catalogo.component.ts';
import {AdministracionComponent} from './administracion/administracion.component.ts';
import {ProfileComponent} from './profile/profile.component.ts';
import {MentoresComponent} from './mentores/mentores.component.ts';


@Component({
       selector: 'app',
       templateUrl: 'app/app.component.html',
			 directives: [MentoresComponent,ProfileComponent,AdministracionComponent,CatalogoComponent,EsquemaJuegoComponent,CabeceraComponent,MenuComponent,FooterComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/home', name:'Main',component:MainComponent,useAsDefault:true},
    {path:'/cart',name:'Cart', component:CartComponent},
    {path:'/ofertas', name:'Ofertas', component:OfertasComponent},
    {path:'/juego', name:'EsquemaJuego', component:EsquemaJuegoComponent},
    {path:'/login-signup', name:'LoginSignup', component:LoginSignupComponent},
    {path: '/catalogo', name: 'Catalogo', component:CatalogoComponent},
    {path: '/admin', name: 'Admin', component:AdministracionComponent},
    {path:'/perfil', name:'Perfil', component:ProfileComponent},
    {path:'/mentores', name:'Mentores', component:MentoresComponent}
])

export class AppComponent {
	private usuario = "";
  private esUsuario = false;

	usuarioActivo(myuser:string){
		this.usuario = myuser;
    this.esUsuario = !this.esUsuario;
	}
}
