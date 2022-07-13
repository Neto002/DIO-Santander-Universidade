package dio.bootcamp.designpatternjava.service.implementacao;

import org.springframework.stereotype.Service;

import dio.bootcamp.designpatternjava.model.Cliente;
import dio.bootcamp.designpatternjava.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Override
    public Iterable<Cliente> buscarTodos() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Cliente buscarPorId(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void inserir(Cliente cliente) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void atualizar(Long id, Cliente cliente) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deletar(Long id) {
        // TODO Auto-generated method stub
        
    }
    
}
