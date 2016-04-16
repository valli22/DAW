import {Component,View} from 'angular2/core';
import {CabeceraComponent} from './cabecera.component.ts';
import {MenuComponent} from './menu.component.ts';
import {MainComponent} from './main/main.component.ts';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FooterComponent} from './footer.component.ts';
import {CartComponent} from './cart/cart.component.ts';
import {OfertasComponent} from './ofertas/ofertas.component';


@Component({
       selector: 'app',
       templateUrl: 'app/app.component.html',
			 directives: [CabeceraComponent,MenuComponent,FooterComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/home', name:'Main',component:MainComponent,useAsDefault:true},
    {path:'/cart',name:'Cart', component:CartComponent},
    {path:'/ofertas', name:'Ofertas', component:OfertasComponent},
  /*  {path:'/catalogo', name:'Catalogo', component:CatalogoComponent},
    {path:'/mentores', name:'Mentores', component:MentoresComponent},
    {path:'/login-signup', name:'LoginSignup', component:LoginSignupComponent},
    {path:'/perfil', name:'Perfil', component:UsuarioComponent},

    {path:'/juego/:id', name:'JuegoDetalles', component:JuegoDetallesComponent}*/
])

export class AppComponent {
	private usuario = "";
  private esUsuario = false;

	usuarioActivo(myuser:string){
		this.usuario = myuser;
    this.esUsuario = !this.esUsuario;
	}
}
