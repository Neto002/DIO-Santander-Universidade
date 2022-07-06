import java.text.MessageFormat;

public abstract class Conta implements IConta {
	private static final String AGENCIA = "0001";
	private static int SEQUENCIAL = 1;
	
	protected String agencia;
	protected int conta;
	protected double saldo;
	protected Cliente cliente;
	
	public Conta(Cliente cliente) {
		this.agencia = AGENCIA;
		this.conta = SEQUENCIAL++;
		this.saldo = 0;
		this.cliente = cliente;
	}
	
	@Override
	public boolean sacar(double valor) {
		if (this.saldo < valor) {
			System.out.println("Valor não disponível para saque");
			return false;
		} else {
			this.saldo -= valor;
			return true;
		}
	}

	@Override
	public void depositar(double valor) {
		this.saldo += valor;
	}
	
	@Override
	public void transferir(IConta contaDestino, double valor) {
		if (this.sacar(valor)) {
			contaDestino.depositar(valor);
			System.out.println("Transferência realizada com sucesso!");
		} else {
			System.out.println("Falha ao realizar transferência");
		}
	}

	public String getAgencia() {
		return agencia;
	}

	private void setAgencia(String agencia) {
		this.agencia = agencia;
	}

	public int getConta() {
		return conta;
	}

	private void setConta(int conta) {
		this.conta = conta;
	}

	public double getSaldo() {
		return saldo;
	}

	private void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	
	@Override
	public String toString() {
		return MessageFormat.format("Agência: {0}\nConta: {1}\nSaldo: R$ {2}\nCliente: {3}", this.agencia, this.conta, String.format("%.2f", this.saldo), this.cliente);
	}
	
	
}
