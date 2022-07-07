package dio.aula;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import dio.aula.model.User;
import dio.aula.repository.UserRepository;

@Component
public class StartApp implements CommandLineRunner {
	@Autowired
	private UserRepository repository;

	@Override
	public void run(String... args) throws Exception {
		User user = new User();
		user.setName("Antonio");
		user.setUsername("neto002");
		user.setPassword("neto123");
		
		repository.save(user);
		
		for (User usr: repository.findAll()) {
			System.out.println(usr);
		}
		
	}

}
