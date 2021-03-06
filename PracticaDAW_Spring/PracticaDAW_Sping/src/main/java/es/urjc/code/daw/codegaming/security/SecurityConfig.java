package es.urjc.code.daw.codegaming.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Security configuration. In this class can be configured several aspects
 * related to security:
 * <ul>
 * <li>Security behavior: Login method, session management, CSRF, etc..</li>
 * <li>Authentication provider: Responsible to authenticate users. In this
 * example, we use an instance of UserRepositoryAuthProvider, that authenticate
 * users stored in a Spring Data database.</li>
 * <li>URL Access Authorization: Access to http URLs depending on Authenticated
 * vs anonymous users and also based on user role.</li>
 * </ul>
 * 
 * NOTE: The only part of this class intended for app developer customization is
 * the method <code>configureUrlAuthorization</code>. App developer should
 * decide what URLs are accessible by what user role.
 */
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	public UserRepositoryAuthProvider userRepoAuthProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		configureUrlAuthorization(http);

		// Disable CSRF protection (it is difficult to implement with ng2)
		http.csrf().disable();

		// Use Http Basic Authentication
		http.httpBasic();

		// Do not redirect when logout
		http.logout().logoutSuccessHandler((rq, rs, a) -> {
		});
	}
	//metodo donde podemos decir que tipo de usuario tiene X metodo, esto es lo que tenemos que cambiar
	//para nuestra pagina
	private void configureUrlAuthorization(HttpSecurity http) throws Exception {

		// APP: This rules have to be changed by app developer

		// URLs that need authentication to access to it
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/juego/recomendaciones/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/actualizarJuego/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/deleteJuego/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/addJuego").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/addOferta").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/addJuegoOferta/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/deleteJuegoOferta/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/editarOferta/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/añadirJuego/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/deleteOferta/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/users/mentores/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/users/recomendaciones/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/users/recomendaciones/meGusta/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/users/mentores/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/users/deleteRecomendaciones/meGusta/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/users/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/users/**").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/users/deleteMentores/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/users/updateRecomendaciones/**").hasRole("USER");
		
		
		
		

		// Other URLs can be accessed without authentication
		http.authorizeRequests().anyRequest().permitAll();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// Database authentication provider
		auth.authenticationProvider(userRepoAuthProvider);
	}
}