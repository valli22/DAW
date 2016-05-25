package es.urjc.code.daw.codegaming.Componentes;
import es.urjc.code.daw.codegaming.Entidades.Juego;

import es.urjc.code.daw.codegaming.Entidades.Oferta;
import es.urjc.code.daw.codegaming.Repositorios.JuegoRepository;
import es.urjc.code.daw.codegaming.Repositorios.OfertaRepository;


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
	@Autowired 
	private JuegoRepository repJ;
	
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
	@RequestMapping(value ="/addJuegoOferta/{nombre}", method = RequestMethod.PUT)
	public Oferta addJuegos(@PathVariable String nombre,@RequestBody List<Juego> lista){
		if(rep.findByNombre(nombre)!=null){
			Oferta oferta = rep.findByNombre(nombre);
			for(Juego juego:lista){
				Juego jue= repJ.findByNombre(juego.getNombre());
				if(!jue.tieneOferta(oferta)){
					jue.addOferta(oferta);
					repJ.save(jue);
				}
				}
			return oferta;
			}
		return null;	
	}
	
	@RequestMapping(value="/deleteJuegoOferta/{nombre}",method=RequestMethod.PUT)
	public Juego deleteJuego(@PathVariable String nombre,@RequestBody String nombreJ){
		if(rep.findByNombre(nombre)!=null){
			Oferta oferta = rep.findByNombre(nombre);
			String[] l = nombreJ.split("\"");
			Juego jue= this.repJ.findByNombre(l[1]);
			if(jue!=null){
				jue.borrarOferta(oferta);
				repJ.save(jue);
				return jue;
			}else{
				System.out.println("no coge la oferta");
			}
		}	
		return null;
			}
	
	
	@RequestMapping(value="/getJuegosOferta/{nombre}",method=RequestMethod.GET)
	public ResponseEntity<List<Juego>> getJuegosOferta(@PathVariable String nombre){
		Oferta oferta = rep.findByNombre(nombre);
		return new ResponseEntity<>(oferta.getJuegos(), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/editarOferta/{nombre}", method = RequestMethod.PUT)
	public ResponseEntity<Oferta> actulizaOferta(@PathVariable String nombre, @RequestBody Oferta variableOferta) {
		if(rep.findByNombre(nombre)!=null){
			Oferta oferta = rep.findByNombre(nombre);
			variableOferta.setId(oferta.getId());
			rep.save(variableOferta);
			return new ResponseEntity<>(variableOferta, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
				}
		}
	@RequestMapping(value="/añadirJuego/{nombre}",method = RequestMethod.PUT)
	public ResponseEntity<Oferta> añadirJuego(@PathVariable String nombre,@RequestBody List<Juego> listaJuegos){
			if(rep.findByNombre(nombre)!=null){
				Oferta oferta= rep.findByNombre(nombre);
				for(Juego juego:listaJuegos){
					oferta.addJuego(juego);
				}
				rep.save(oferta);
				return new ResponseEntity<>(oferta,HttpStatus.OK);
			}else{
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
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
