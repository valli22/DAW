package es.urjc.code.daw.codegaming.Componentes;

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
import es.urjc.code.daw.codegaming.Entidades.Juego;
import es.urjc.code.daw.codegaming.Repositorios.JuegoRepository;


@RestController
public class JuegoController {
	
	@Autowired
	private JuegoRepository rep;
	
	@RequestMapping(value = "/allJuegos", method = RequestMethod.GET)
	public List<Juego> getJuegos(){
		return rep.findAll();
	}
	
	@RequestMapping(value = "/getJuego/{nombre}", method = RequestMethod.GET)
	public ResponseEntity<Juego> getJuego(@PathVariable String nombre){
		Juego juego = rep.findByNombre(nombre);
		if(juego!=null){
			return new ResponseEntity<>(juego, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@RequestMapping(value = "/addJuego", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Juego addJuego(@RequestBody Juego juego){
		rep.save(juego);
		return juego;
	}
	
	@RequestMapping(value = "/deleteJuego/{nombre}", method = RequestMethod.DELETE)
	public ResponseEntity<Juego> borraAnuncio(@PathVariable String nombre) {

		if (rep.findByNombre(nombre)!=null) {
			rep.delete(rep.findByNombre(nombre));
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}
