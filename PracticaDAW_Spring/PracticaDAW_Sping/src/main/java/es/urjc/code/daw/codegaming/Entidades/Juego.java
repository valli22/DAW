package es.urjc.code.daw.codegaming.Entidades;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Juego {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    private String imagen;
    private String nombre;
    private String descripcion;
    private float precio;
    private float valoracion;
    
    
    @OneToMany(cascade = CascadeType.ALL)
    private List<Tag> tags;
    
    @OneToMany(cascade = CascadeType.ALL)
    private List<Plataforma> plataforma;
    
    @OneToMany(cascade = CascadeType.ALL)
    private List<Recomendacion> recomendacion;
    private int cantidad;
    
    @JsonIgnore
    @ManyToMany(cascade=CascadeType.ALL)
    private List<Oferta> ofertas;
    
    protected Juego(){}
    
    public Juego(String imagenc, String nombrec, String descripcionc, float precioc, float valoracionc, List<Tag> tagsc, List<Plataforma> plataformac){
        
        this.imagen = imagenc;
        this.nombre = nombrec;
        this.descripcion = descripcionc;
        this.precio = precioc;
        this.valoracion = valoracionc;
        this.tags = tagsc;
        this.plataforma = plataformac;
        this.cantidad = 1;
        this.ofertas= new ArrayList<>();
        this.recomendacion = new ArrayList<>();
        
    }
    
    public void addRecomendacion(Recomendacion recom){
        this.recomendacion.add(recom);
    }

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
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
	public void addOferta(Oferta oferta){
		this.ofertas.add(oferta);
	}
	public void borrarOferta(Oferta oferta){
		System.out.println(oferta.getNombre());
		for(Oferta of:this.ofertas){
			System.out.println(of.getNombre());
			if(of.getId()==oferta.getId()){
				this.ofertas.remove(of);
				break;
			}
		}
	}
	

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public float getValoracion() {
		return valoracion;
	}

	public void setValoracion(float valoracion) {
		this.valoracion = valoracion;
	}

	public List<Tag> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Oferta> getOfertas() {
		return ofertas;
	}

	public void setOfertas(List<Oferta> ofertas) {
		this.ofertas = ofertas;
	}

	public List<Plataforma> getPlataforma() {
		return plataforma;
	}

	public void setPlataforma(List<Plataforma> plataforma) {
		this.plataforma = plataforma;
	}

	public List<Recomendacion> getRecomendacion() {
		return recomendacion;
	}

	public void setRecomendacion(List<Recomendacion> recomendacion) {
		this.recomendacion = recomendacion;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
    
    
}