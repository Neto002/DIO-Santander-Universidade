package dio.bootcamp.designpatternjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class DesignPatternJavaApplication {

	public static void main(String[] args) {
		SpringApplication.run(DesignPatternJavaApplication.class, args);
	}

}
