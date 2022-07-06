import java.text.MessageFormat;

public class Cliente {
	private String nome;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public String toString() {
		return MessageFormat.format("Nome: {0}", this.nome);
	}
	
	
}
