import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;

public class Banco {
	private String nome;
	private List<Conta> contas;
	
	public Banco(String nome) {
		this.nome = nome;
		this.contas = new ArrayList<Conta>();
	}
	
	public void adicionarContaAoBanco(Conta conta) {
		this.contas.add(conta);
	}
	
	public List<Cliente> listarClientes(List<Conta> contas) {
		List<Cliente> clientes = new ArrayList<Cliente>();
		for (Conta conta : contas) {
			clientes.add(conta.cliente);
		}
		return clientes;
	}
	
	private String exibeContas() {
		String retorno = "";
		for (Conta conta : contas) {
			retorno += MessageFormat.format("{0}\n", conta);
		}
		return retorno;
	}
	
	private String exibeClientes() {
		String retorno = "";
		for (Cliente cliente: listarClientes(this.contas)) {
			retorno += MessageFormat.format("{0}\n", cliente);
		}
		return retorno;
	}
	
	public String getNome() {
		return nome;
	}
	private void setNome(String nome) {
		this.nome = nome;
	}
	public List<Conta> getContas() {
		return contas;
	}
	private void setContas(List<Conta> contas) {
		this.contas = contas;
	}

	@Override
	public String toString() {
		System.out.println("-------------------- Características do banco --------------------");
		String retornostring = "Nome do Banco: {0}\nLista de contas do banco:\n{1}\nLista de Clientes do banco:\n{2}";
		String stringContas = exibeContas();
		String stringClientes = exibeClientes();
		
		return MessageFormat.format(retornostring, this.nome, stringContas, stringClientes);
	}
	
	
}
