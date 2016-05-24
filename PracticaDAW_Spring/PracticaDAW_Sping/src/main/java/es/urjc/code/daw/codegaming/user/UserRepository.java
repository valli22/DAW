package es.urjc.code.daw.codegaming.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * Repository to manage users in database.
 * 
 * NOTE: This interface is intended to be extended by developer adding new
 * methods. Current method can not be removed because it is used in
 * authentication procedures.
 */
public interface UserRepository extends JpaRepository<User, Long> {

	User findByNombre(String nombre);
	//@Query("select * from user_mentores_siguiendo,user where user_mentores_siguiendo.mentores_siguiendo_id=?1 AND user.id=user_mentores_siguiendo.user_id")
	//List<User> findMentores(long id);
}
