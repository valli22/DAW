package es.urjc.code.daw.codegaming.Componentes;
import es.urjc.code.daw.codegaming.Entidades.Juego;
import es.urjc.code.daw.codegaming.Entidades.Oferta;
import es.urjc.code.daw.codegaming.Repositorios.OfertaRepository;
import es.urjc.code.daw.codegaming.book.Book;

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
public class OfertaController {
	
	@Autowired
	private OfertaRepository rep;
	
	@RequestMapping(value = "/AllOfertas", method = RequestMethod.GET)
	public List<Oferta> getJuegos(){
		return rep.findAll();
	}
	
	
	@RequestMapping(value = "/getOferta/{nombre}", method = RequestMethod.GET)
	public ResponseEntity<Oferta> getOferta(@PathVariable String nombre){
		Oferta oferta = rep.findByNombre(nombre);
		return new ResponseEntity<>(oferta, HttpStatus.OK);
		//return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
	}
	
	@RequestMapping(value = "/addOferta", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Oferta addOferta(@RequestBody Oferta oferta){
		rep.save(oferta);
		return oferta;
	}
	
	@RequestMapping(value = "/deleteOferta/{nombre}", method = RequestMethod.DELETE)
	public ResponseEntity<Oferta> borraOferta(@PathVariable String nombre) {

		if (rep.findByNombre(nombre)!=null) {
			rep.delete(rep.findByNombre(nombre));
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	

}
