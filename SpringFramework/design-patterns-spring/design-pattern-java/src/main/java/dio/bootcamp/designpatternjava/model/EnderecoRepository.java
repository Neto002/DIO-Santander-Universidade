package dio.bootcamp.designpatternjava.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EnderecoRepository extends JpaRepository<Cliente, String> {
    
}
