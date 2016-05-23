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



@RestController	

public class UserController {

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

//		log.info("Get book {}", id);

		User usuario = this.userRepository.findOne(id);
		if (usuario != null) {
			List<User> mentores = usuario.getMentoresSiguiendo();
			return new ResponseEntity<>(mentores, HttpStatus.OK);
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

			usuario.getMentoresSiguiendo().add(usuarioNuevo);
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
	@RequestMapping(value = "/users/mentores/{id}/{idMentor}", method = RequestMethod.PUT)
	public ResponseEntity<User> borraMentor(@PathVariable long id, @PathVariable long idMentor) {
		if (this.userRepository.exists(id)) {
			User usuario = this.userRepository.findOne(id);
			User mentorB = null;
			for(User mentor : usuario.getMentoresSiguiendo()){
				if(mentor.getId().equals(idMentor)){
					mentorB = mentor;
					break;
				}
			}
			if(mentorB!=null){
				usuario.getMentoresSiguiendo().remove(mentorB);
				this.userRepository.save(usuario);
				return new ResponseEntity<>(null, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
