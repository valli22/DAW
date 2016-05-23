package es.urjc.code.daw.codegaming.Entidades;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author miguel
 */
@Entity
public class Oferta {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String nombre;
	private String descripcion;
	private String imagen;
	
	@OneToMany
	private List<Juego> juegos;
	
	
	private float descuento;
	private float precioInicial;
	private float precio;
	private int cantidad;
	
	protected Oferta(){}
	
	public Oferta(String nombre, String descripcion, String imagen, List<Juego> juegos, float descuento,
			float precioInicial, float precio) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.juegos = juegos;
		this.descuento = descuento;
		this.precioInicial = precioInicial;
		this.precio = precio;
		this.cantidad=1;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public String getDescripcion() {
		return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	public String getImagen() {
		return this.imagen;
	}
	
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	
	public List<Juego> getJuegos() {
		return juegos;
	}
	
	public void setJuegos(List<Juego> juegos) {
		this.juegos = juegos;
	}
	
	public float getDescuento() {
		return descuento;
	}
	
	public void setDescuento(float descuento) {
		this.descuento = descuento;
	}
	
	public float getPrecioInicial() {
		return this.precioInicial;
	}
	
	public void setPrecioInicial(float precioInicial) {
		this.precioInicial = precioInicial;
	}
	
	public float getPrecio() {
		return this.precio;
	}
	
	public void setPrecio(float precio) {
		this.precio = precio;
	}
	
	public int getCantidad() {
		return this.cantidad;
	}
	
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}


    
}
