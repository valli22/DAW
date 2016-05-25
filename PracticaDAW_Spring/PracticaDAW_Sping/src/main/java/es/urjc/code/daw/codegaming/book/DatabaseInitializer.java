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
import es.urjc.code.daw.codegaming.Entidades.*;
import es.urjc.code.daw.codegaming.Repositorios.*;

@Controller
public class DatabaseInitializer implements CommandLineRunner {
	@Autowired
	private OfertaRepository oRep;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JuegoRepository juegoRep;
	@Override
	public void run(String... args) throws Exception {
		
		
		//Juego juego1= new Juego("img.png","sc2","muychulo",6.45f,20.54f,tags,plataformas);
		//Juego juego2= new Juego("img2.png","diablo","jejjeej",7.45f,28.12f,tags2,plataformas2);
		//Juego juego3=new Juego("img2.png","diablo","jejjeej",7.45f,28.12f,tags3,plataformas3);
		//Juego juego4=new Juego("img2.png","diablo","jejjeej",7.45f,28.12f,tags4,plataformas4);
		//Juego juego5=new Juego("img2.png","diablo","jejjeej",7.45f,28.12f,tags5,plataformas5);
		//Juego juego6=new Juego("img2.png","diablo","jejjeej",7.45f,28.12f,tags6,plataformas6);
		//Juego juego7=new Juego("img2.png","diablo","jejjeej",7.45f,28.12f,tags7,plataformas7);
		//Juego juego8=new Juego("img2.png","diablo","jejjeej",7.45f,28.12f,tags8,plataformas8);
		//Juego juego9=new Juego("img2.png","diablo","jejjeej",7.45f,28.12f,tags9,plataformas9);
		//Juego juego10=new Juego("img2.png","diablo","jejjeej",7.45f,28.12f,tags10,plataformas10);
		//jRep.save(juego1);
		//jRep.save(juego2);
		//jRep.save(juego3);
		//jRep.save(juego4);
		//jRep.save(juego5);
		//jRep.save(juego6);
		//jRep.save(juego7);
		//jRep.save(juego8);
		//jRep.save(juego9);
		//jRep.save(juego10);
		ArrayList<Juego> Juegos= new ArrayList<>();
		ArrayList<Juego> Juegos1= new ArrayList<>();
		ArrayList<Juego> Juegos2= new ArrayList<>();
		ArrayList<Juego> Juegos3= new ArrayList<>();
		ArrayList<Juego> Juegos4= new ArrayList<>();
		ArrayList<Juego> Juegos5= new ArrayList<>();
		ArrayList<Juego> Juegos6= new ArrayList<>();
		ArrayList<Juego> Juegos7= new ArrayList<>();
		ArrayList<Juego> Juegos8= new ArrayList<>();
		ArrayList<Juego> Juegos9= new ArrayList<>();
		//Juegos.add(juego1);
		//Juegos2.add(juego2);
		//Juegos3.add(juego3);
		//Juegos4.add(juego4);
		//Juegos5.add(juego5);
		//Juegos6.add(juego6);
		//Juegos7.add(juego7);
		//Juegos8.add(juego8);
		//Juegos9.add(juego9);
		//Juegos4.add(juego10);
		
		Oferta oferta2= new Oferta("Minecraft","Disfruta de miles de horas de juego, supervivencia, crafteos, construccion, lucha... y un largo numero de caracteristicas que hacen a este juego uno de los inolvidables de esta epoca.","../img/minecraft.jpg",5f,20f,19f);
		Oferta oferta3= new Oferta("LEGENDARIOS","Quieres disfrutar de juegos unos de los juegos mas legendarios que se han creado? Con esta oferta podras disfrutar de ellos si es que todavia no lo habias hecho.","../img/legendarios.png",50f,81.97f,40.97f);
		Oferta oferta4= new Oferta("Es la hora del miedo Outlast","Quieres tener miedo? Estar en tension? Tener la adrenalina por las nubes? Esta es tu oportunidad de conseguir uno de los mejores juegos de miedo que se han creado: Outlast","../img/outlast.jpg",10f,19.99f,17.99f);
		Oferta oferta5= new Oferta("Doble deportive doble diversion","En este pack de juegos tenemos dos de los mejores juegos deportivos que han salido este año. Gracias a esta oferta podra disfrutar de Forza 6 y Fifa 16 con un gran descuento del 20%.","../img/ofertaDeportiva.png",20f,99.46f,79.56f);
		Oferta oferta6= new Oferta("Oferta de salida Dark Souls III","Vas a poder disfrutar de este juego en su reciente salida gracias a esta gran oferta. El tercer juego de la saga conocida por su dificultad.","../img/darkSouls.png",10f,40.99f,36.89f);
		Oferta oferta7= new Oferta("El mejor juego online ya en oferta","Disfrutaras del mejor juego online gracias a esta oferta. Hello Kitty online estara al precio de cualquiera que tenga ganas de jugar esto.","../img/helloKitty.jpg",99f,99.99f,0.99f);
		Oferta oferta8= new Oferta("Plan XBOX","En esta oferta tendras los mejores juegos exclusivos de xbox hasta el momento. Te arrepentiras de no comprarla.","../img/exclusivos.png",25f,79.98f,59.98f);
		Oferta oferta9= new Oferta("Best roguelike in history","Disfruta del mejor juego del estilo rogue-like que se ha creado jamas. En este rework del juego se podra disfrutar de mejores graficos y mayor cantidad de objetos disponibles en el tambien probablemente mejor juego indie de la historia.","../img/tboi.jpg",6f,14.99f,140.9f);
		Oferta oferta10= new Oferta("Imposible is nothing","while(jugar){morir();revivir();} Quieres intentar pasarte dos de los juegos mas dificiles creados hasta el momento? Si tu intencion es conseguir el 100% de estos juegos tardaras horas y horas jugando y divirtiendote para conseguirlo.","../img/imposible.png",30f,55.98f,39.18f);


		User usuario1 = new User("user", "pass", "prueba@gmail.com", "1995-05-19","drope","drope", "descr", "descrp mentor" ,"ROLE_USER");
		User usuario2 = new User("admin", "pass","prueba@gmail.com", "1995-05-19","drope","drope", "descr", "descrp mentor", "ROLE_USER", "ROLE_ADMIN");

		
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
		j0.addOferta(oferta2);
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
		Oferta oferta1= new Oferta("Ubisoft regala juego","En esta oferta podras obtener el ultimo juego de la saga Assesins Creed de ubisoft. Disfruta de la etapa medieval-moderna en francia gracias a este fantastico juego.","../img/unity.jpg",60f,59.95f,23.98f);
		// Sample users
		userRepository.save(usuario1);
		userRepository.save(usuario2);    

		oRep.save(oferta1);
		oRep.save(oferta2);
		oRep.save(oferta3);
		oRep.save(oferta4);
		oRep.save(oferta5);
		oRep.save(oferta6);
		oRep.save(oferta7);
		oRep.save(oferta8);
		oRep.save(oferta9);
		oRep.save(oferta10);
		
	}

}
