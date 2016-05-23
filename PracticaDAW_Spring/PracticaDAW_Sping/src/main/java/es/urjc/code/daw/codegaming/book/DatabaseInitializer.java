package es.urjc.code.daw.codegaming.book;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.codegaming.Entidades.Juego;
import es.urjc.code.daw.codegaming.Entidades.Plataforma;
import es.urjc.code.daw.codegaming.Entidades.Tag;
import es.urjc.code.daw.codegaming.Repositorios.JuegoRepository;
import es.urjc.code.daw.codegaming.user.User;
import es.urjc.code.daw.codegaming.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {


	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private JuegoRepository juegoRep;

	@Override
	public void run(String... args) throws Exception {

		User usuario1 = new User("user", "pass", "prueba@gmail.com", "1995-05-19","drope","drope", "descr", "descrp mentor" ,"ROLE_USER");
		User usuario2 = new User("admin", "pass","prueba@gmail.com", "1995-05-19","drope","drope", "descr", "descrp mentor", "ROLE_USER", "ROLE_ADMIN");
		usuario1.addMentor(usuario2);
		usuario2.addMentor(usuario1);
		
		Plataforma p1 = new Plataforma("PS4");
		Tag t1 = new Tag("divertido");
		ArrayList<Tag> lt = new ArrayList<>();
		lt.add(t1);
		ArrayList<Plataforma> lp = new ArrayList<>();
		lp.add(p1);
		
		Plataforma p2 = new Plataforma("PS4");
		Tag t2 = new Tag("divertido");
		ArrayList<Tag> lt2 = new ArrayList<>();
		lt2.add(t2);
		ArrayList<Plataforma> lp2 = new ArrayList<>();
		lp2.add(p2);
		
		Plataforma p3 = new Plataforma("PS4");
		Tag t3 = new Tag("divertido");
		ArrayList<Tag> lt3 = new ArrayList<>();
		lt3.add(t3);
		ArrayList<Plataforma> lp3 = new ArrayList<>();
		lp3.add(p3);
		
		Plataforma p4 = new Plataforma("PS4");
		Tag t4 = new Tag("divertido");
		ArrayList<Tag> lt4 = new ArrayList<>();
		lt4.add(t4);
		ArrayList<Plataforma> lp4 = new ArrayList<>();
		lp4.add(p4);
		
		Plataforma p5 = new Plataforma("PS4");
		Tag t5 = new Tag("divertido");
		ArrayList<Tag> lt5 = new ArrayList<>();
		lt5.add(t5);
		ArrayList<Plataforma> lp5 = new ArrayList<>();
		lp5.add(p5);
		
		Plataforma p6 = new Plataforma("PS4");
		Tag t6 = new Tag("divertido");
		ArrayList<Tag> lt6 = new ArrayList<>();
		lt6.add(t6);
		ArrayList<Plataforma> lp6 = new ArrayList<>();
		lp6.add(p6);
		
		Plataforma p7 = new Plataforma("PS4");
		Tag t7 = new Tag("divertido");
		ArrayList<Tag> lt7 = new ArrayList<>();
		lt7.add(t7);
		ArrayList<Plataforma> lp7 = new ArrayList<>();
		lp7.add(p7);
		
		Plataforma p8 = new Plataforma("PS4");
		Tag t8 = new Tag("divertido");
		ArrayList<Tag> lt8 = new ArrayList<>();
		lt8.add(t8);
		ArrayList<Plataforma> lp8 = new ArrayList<>();
		lp8.add(p8);
		
		Plataforma p9 = new Plataforma("PS4");
		Tag t9 = new Tag("divertido");
		ArrayList<Tag> lt9 = new ArrayList<>();
		lt9.add(t9);
		ArrayList<Plataforma> lp9 = new ArrayList<>();
		lp9.add(p9);
		
		Plataforma p0 = new Plataforma("PS4");
		Tag t0 = new Tag("divertido");
		ArrayList<Tag> lt0 = new ArrayList<>();
		lt0.add(t0);
		ArrayList<Plataforma> lp0 = new ArrayList<>();
		lp0.add(p0);
		
		Juego j1 = new Juego("/imagen","darkSouls","esto es un juego de prueba",9.99f,4f,lt,lp);
		Juego j2 = new Juego("/imagen","darkSouls2","esto es un juego de prueba",9.99f,4f,lt2,lp2);
		Juego j3 = new Juego("/imagen","darkSouls3","esto es un juego de prueba",9.99f,4f,lt3,lp3);
		Juego j4 = new Juego("/imagen","darkSouls4","esto es un juego de prueba",9.99f,4f,lt4,lp4);
		Juego j5 = new Juego("/imagen","darkSouls5","esto es un juego de prueba",9.99f,4f,lt5,lp5);
		Juego j6 = new Juego("/imagen","darkSouls6","esto es un juego de prueba",9.99f,4f,lt6,lp6);
		Juego j7 = new Juego("/imagen","darkSouls7","esto es un juego de prueba",9.99f,4f,lt7,lp7);
		Juego j8 = new Juego("/imagen","darkSouls8","esto es un juego de prueba",9.99f,4f,lt8,lp8);
		Juego j9 = new Juego("/imagen","darkSouls9","esto es un juego de prueba",9.99f,4f,lt9,lp9);
		Juego j0 = new Juego("/imagen","darkSouls0","esto es un juego de prueba",9.99f,4f,lt0,lp0);
		juegoRep.save(j1);
		juegoRep.save(j2);
		juegoRep.save(j3);
		juegoRep.save(j4);
		juegoRep.save(j5);
		juegoRep.save(j6);
		juegoRep.save(j7);
		juegoRep.save(j8);
		juegoRep.save(j9);
		juegoRep.save(j0);

		// Sample users
		userRepository.save(usuario1);
		userRepository.save(usuario2);
	}

}
