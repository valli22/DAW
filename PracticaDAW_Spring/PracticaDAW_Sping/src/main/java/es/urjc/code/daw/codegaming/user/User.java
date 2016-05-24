package es.urjc.code.daw.codegaming.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import es.urjc.code.daw.codegaming.Entidades.Recomendacion;

/**
 * This is the entity to store in database user information. It contains the
 * following basic information:
 * <ul>
 * <li>name: The name of the user. This name have to be used to logIn into the
 * service</li>
 * <li>passwordHash: The hash of the password. The password in never stored in
 * plain text to avoid information leak</li>
 * <li>roles: The roles of this user</li>
 * 
 * To check if a user can be logged into the service, this object is loaded from
 * database and password is verified. If user is authenticated, then this
 * database object is returned to the user.
 * 
 * NOTE: This class is intended to be extended by developer adding new
 * attributes. Current attributes can not be removed because they are used in
 * authentication procedures.
 */

@Entity
public class User {
	
	public interface Basico{}
	public interface Mentores{}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonView(Basico.class)
	private Long id;
	
	@JsonView(Basico.class)
	private String correo;
	
	@JsonView(Basico.class)
	private String fechaNacimiento;
	
	@JsonView(Basico.class)
	private String steam;
	
	@JsonView(Basico.class)
	private String bnet;
	
	@JsonView(Basico.class)
	private String descripcion;
	
	@JsonView(Basico.class)
	private String descripcionMentor;
	
	@JsonView(Basico.class)
	private Integer seguidores;
	
	
	@OneToMany(cascade = CascadeType.ALL)
	@JsonIgnore
	private List<User> mentoresSiguiendo;
	
	
	
	@JsonView(Basico.class)
	private String nombre;

	//@JsonIgnore
	private String pass;
	
	@JsonView(Basico.class)
	private String fotoPerfil;
	
	@ElementCollection(fetch = FetchType.EAGER)
	@JsonView(Basico.class)
	private List<String> roles;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Recomendacion> recomendaciones;
	
	
	
	public User() {
	}

	public User(String name, String pass, String correo, String fechaNacimiento, String steam, String bnet, String descripcion, String descripcionMentor, String... roles) {
		this.nombre = name;
		this.pass = new BCryptPasswordEncoder().encode(pass);
		this.roles = new ArrayList<>(Arrays.asList(roles));
		this.correo = correo;
		this.fechaNacimiento = fechaNacimiento;
		this.steam = steam;
		this.bnet = bnet;
		this.descripcion = descripcion;
		this.descripcionMentor = descripcionMentor;
		this.mentoresSiguiendo = new ArrayList<>();
		this.seguidores = 0;
		this.recomendaciones = new ArrayList<>();
		this.fotoPerfil="";
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String name) {
		this.nombre = name;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		if(pass.length()>50){
			this.pass = pass;
		}else{
			this.pass = new BCryptPasswordEncoder().encode(pass);
		}
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(String fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getSteam() {
		return steam;
	}

	public void setSteam(String steam) {
		this.steam = steam;
	}

	public String getBnet() {
		return bnet;
	}

	public void setBnet(String bnet) {
		this.bnet = bnet;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getDescripcionMentor() {
		return descripcionMentor;
	}

	public void setDescripcionMentor(String descripcionMentor) {
		this.descripcionMentor = descripcionMentor;
	}

	public Integer getSeguidores() {
		return seguidores;
	}

	public void setSeguidores(Integer seguidores) {
		this.seguidores = seguidores;
	}

	public List<User> getMentoresSiguiendo() {
		return mentoresSiguiendo;
	}

	public void setMentoresSiguiendo(List<User> mentoresSiguiendo) {
		this.mentoresSiguiendo = mentoresSiguiendo;
	}
	public void addMentor(User usuario){
		usuario.seguidores += 1;
		this.mentoresSiguiendo.add(usuario);
	}
	public void dejarSeguir(User usuario){
		usuario.seguidores-= 1;
		this.mentoresSiguiendo.remove(usuario);
	}
	public void setFotoPerfil(String fotoPerfil){
		this.fotoPerfil=fotoPerfil;
	}
	public String getFotoPerfil(){
		return this.fotoPerfil;
	}

	public List<Recomendacion> getRecomendaciones() {
		return recomendaciones;
	}

	public void setRecomendaciones(List<Recomendacion> recomendaciones) {
		this.recomendaciones = recomendaciones;
	}
	public void addRecomendacion(Recomendacion recomendacion){
		this.recomendaciones.add(recomendacion);
	}

}