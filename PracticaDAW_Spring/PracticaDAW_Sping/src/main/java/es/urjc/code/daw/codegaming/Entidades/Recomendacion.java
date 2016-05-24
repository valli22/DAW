package es.urjc.code.daw.codegaming.Entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import es.urjc.code.daw.codegaming.user.User;

@Entity
public class Recomendacion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@OneToOne
	private User mentor;
	
	private String titulo;
	private int meGusta;
	private String descripcion;

	@OneToOne
	private Juego juego;
	
	protected Recomendacion(){}

	public Recomendacion(User mentorc, String tituloc, int meGustac, String descripcionc, Juego nombreJuegoc) {
		this.mentor = mentorc;
		this.titulo = tituloc;
		this.meGusta = meGustac;
		this.descripcion = descripcionc;
		this.juego = nombreJuegoc;
	}

	public User getMentor() {
		return this.mentor;
	}

	public void setMentor(User mentor) {
		this.mentor = mentor;
	}

	public String getTitulo() {
		return this.titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public int getMeGusta() {
		return this.meGusta;
	}

	public void setMeGusta(int meGusta) {
		this.meGusta = meGusta;
	}
	
	public String getDescripcion(){
		return this.descripcion;
	}
	
	public void setDescripcion(String desc){
		this.descripcion = desc;
	}
	
	public Juego getJuego(){
		return this.juego;
	}
	
	public void setJuego(Juego juego){
		this.juego = juego;
	}
}
