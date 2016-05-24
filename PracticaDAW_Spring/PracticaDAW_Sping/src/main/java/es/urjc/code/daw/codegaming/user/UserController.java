package es.urjc.code.daw.codegaming.user;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.codegaming.Entidades.Juego;
import es.urjc.code.daw.codegaming.Entidades.Recomendacion;
import es.urjc.code.daw.codegaming.user.User.Basico;



@RestController	

public class UserController {
	
	interface RecomendacionJSON extends Recomendacion.Basico,User.Basico,Juego.Basico{}
	
	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public List<User> getUsers() {
		return this.userRepository.findAll();
	}

	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> getUser(@PathVariable long id) {

//		log.info("Get book {}", id);

		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {
			return new ResponseEntity<>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@RequestMapping(value = "/users/mentores/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<User>> getMentores(@PathVariable long id) {
		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {
			List<User> mentores = usuario.getMentoresSiguiendo();
			return new ResponseEntity<>(mentores, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(RecomendacionJSON.class)
	@RequestMapping(value = "/users/recomendaciones/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Recomendacion>> getRecomendacionesUser(@PathVariable long id) {

		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {
			return new ResponseEntity<>(usuario.getRecomendaciones(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(RecomendacionJSON.class)
	@RequestMapping(value = "/users/recomendaciones/meGusta/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Recomendacion>> getRecomendacionesMeGustaUser(@PathVariable long id) {

		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {
			return new ResponseEntity<>(usuario.getRecomendacionesMeGusta(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/users", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User nuevoUser(@RequestBody User usuario) {
		this.userRepository.save(usuario);

		return usuario;
	}
	
	@RequestMapping(value = "/users/mentores/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> addMentor(@PathVariable long id, @RequestBody User usuarioNuevo) {

		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {

			usuario.addMentor(usuarioNuevo);
			this.userRepository.save(usuario);
			this.userRepository.save(usuarioNuevo);
			return new ResponseEntity<>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/users/recomendaciones/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> addRecomendacion(@PathVariable long id, @RequestBody Recomendacion recomendacion) {

		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {

			usuario.addRecomendacion(recomendacion);
			this.userRepository.save(usuario);

			return new ResponseEntity<>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/users/recomendaciones/meGusta/{id}/{idMentor}", method = RequestMethod.PUT)
	public ResponseEntity<User> addRecomendacionMeGusta(@PathVariable long id,@PathVariable long idMentor, @RequestBody Recomendacion recomendacion) {

		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {
			User newUser = this.userRepository.findOne(idMentor);
			for(Recomendacion rec : newUser.getRecomendaciones()){
				if(rec.getId() == recomendacion.getId()){
					rec.setMeGusta(rec.getMeGusta()+1);
				}
			}
			this.userRepository.save(newUser);
			usuario.addRecomendacionMeGusta(recomendacion);
			this.userRepository.save(usuario);

			return new ResponseEntity<>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/users/deleteRecomendaciones/meGusta/{id}/{idMentor}", method = RequestMethod.PUT)
	public ResponseEntity<User> removeRecomendacionMeGusta(@PathVariable long id, @RequestBody Recomendacion recomendacion,@PathVariable long idMentor) {

		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {
			User newUser = this.userRepository.findOne(idMentor);
			for(Recomendacion rec : usuario.getRecomendacionesMeGusta()){
				if(rec.getId() == recomendacion.getId()){
					System.out.println("pasa");
					usuario.getRecomendacionesMeGusta().remove(rec);
					break;
				}
			}
			for(Recomendacion rec : newUser.getRecomendaciones()){
				if(rec.getId() == recomendacion.getId()){
					rec.setMeGusta(rec.getMeGusta()-1);
				}
			}
			this.userRepository.save(newUser);
			this.userRepository.save(usuario);

			return new ResponseEntity<>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> actulizaUser(@PathVariable long id, @RequestBody User usuarioNuevo) {

		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {
			System.out.println(usuarioNuevo.getRecomendaciones().toString());
			usuarioNuevo.setPass(usuario.getPass());
			usuarioNuevo.setId(id);
			this.userRepository.save(usuarioNuevo);

			return new ResponseEntity<>(usuarioNuevo, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<User> borraUser(@PathVariable long id) {

		if (this.userRepository.exists(id)) {
			this.userRepository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/users/deleteMentores/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> borraMentor(@PathVariable long id, @RequestBody User usuarioIn) {
		if (this.userRepository.exists(id)) {
			User usuario = this.userRepository.findOne(id);
			usuario.dejarSeguir(usuarioIn);
			this.userRepository.save(usuario);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/users/updateRecomendaciones/{id}", method = RequestMethod.PUT)
	public ResponseEntity<User> actualizarRecomendacion(@PathVariable long id, @RequestBody Recomendacion recomendacion) {

		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {
			for(Recomendacion rec : usuario.getRecomendaciones()){
				if(rec.getId()==recomendacion.getId()){
					usuario.getRecomendaciones().remove(rec);
					break;
				}
			}
			usuario.addRecomendacion(recomendacion);
			this.userRepository.save(usuario);

			return new ResponseEntity<>(usuario, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
