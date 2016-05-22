package es.urjc.code.daw.codegaming.Entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Plataforma {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    private String  nombre;

    protected Plataforma(){}
    
    public Plataforma(String nombre){
    	this.nombre = nombre;
    }

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
    
	
}
