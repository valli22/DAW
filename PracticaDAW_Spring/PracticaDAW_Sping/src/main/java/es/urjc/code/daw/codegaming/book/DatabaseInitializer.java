package es.urjc.code.daw.codegaming.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.codegaming.user.User;
import es.urjc.code.daw.codegaming.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {


	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {


		// Sample users
		userRepository.save(new User("user", "pass", "ROLE_USER"));
		userRepository.save(new User("admin", "pass", "ROLE_USER", "ROLE_ADMIN"));
	}

}
