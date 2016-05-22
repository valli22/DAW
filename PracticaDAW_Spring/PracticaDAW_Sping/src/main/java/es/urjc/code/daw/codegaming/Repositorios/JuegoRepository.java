package es.urjc.code.daw.codegaming.Repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import es.urjc.code.daw.codegaming.Entidades.Juego;

public interface JuegoRepository extends JpaRepository<Juego,Long>{

	Juego findByNombre(String nombre);
	
}
