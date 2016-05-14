package es.urjc.code.daw.codegaming.Entidades;

import java.util.List;

import javax.persistence.*;

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
    private List<String> tags;
    private List<String> plataforma;
    
    @OneToMany
    private List<Recomendacion> recomendacion;
    private int cantidad;
    
    protected Juego(){}
    
    public Juego(String imagenc, String nombrec, String descripcionc, float precioc, float valoracionc, List<String> tagsc, List<String> plataformac){
        
        this.imagen = imagenc;
        this.nombre = nombrec;
        this.descripcion = descripcionc;
        this.precio = precioc;
        this.valoracion = valoracionc;
        this.tags = tagsc;
        this.plataforma = plataformac;
        this.cantidad = 1;
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

	public List<String> getTags() {
		return tags;
	}

	public void setTags(List<String> tags) {
		this.tags = tags;
	}

	public List<String> getPlataforma() {
		return plataforma;
	}

	public void setPlataforma(List<String> plataforma) {
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