package es.urjc.code.daw.codegaming.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import es.urjc.code.daw.codegaming.Entidades.Oferta;

public interface OfertaRepository extends JpaRepository<Oferta,Long> {
	
	Oferta findByNombre(String Nombre);

}
