import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		var banco = new Banco("Neto's Bank");
		
		var cliente1 = new Cliente();
		cliente1.setNome("Antonio Neto");
		
		var cliente2 = new Cliente();
		cliente2.setNome("Test");
		
		Conta contaCorrente = new ContaCorrente(cliente1);
		Conta contaPoupanca = new ContaPoupanca(cliente2);
		
		banco.adicionarContaAoBanco(contaCorrente);
		banco.adicionarContaAoBanco(contaPoupanca);
		
		System.out.println(banco);
		
		int escolha = 0;
		Scanner teclado = new Scanner(System.in);
		
		do {
			menu();
			escolha = teclado.nextInt();
			
			switch (escolha) {
			case 0:
				System.out.println("Saindo...");
				break;
			case 1:
				System.out.println("Digite o valor para depositar: ");
				double valorDeposito = teclado.nextDouble();
				contaCorrente.depositar(valorDeposito);
				contaCorrente.imprimirExtrato();
				break;
			case 2:
				System.out.println("Digite o valor para sacar: ");
				double valorSaque = teclado.nextDouble();
				contaCorrente.sacar(valorSaque);
				contaCorrente.imprimirExtrato();
				break;
			case 3:
				System.out.println("Digite o valor para transferência: ");
				double valorTransferencia = teclado.nextDouble();
				contaCorrente.transferir(contaPoupanca, valorTransferencia);
				contaCorrente.imprimirExtrato();
				break;
			default:
				System.out.println("Opção inválida, tente novamente");
			}
			
		} while (escolha != 0);
		
		teclado.close();
	}
	
	static void menu() {
		System.out.println("---------------- Banco ----------------");
		System.out.println("1 - Depósito\n2 - Saque\n3 - Transferência\n0 - Sair");
		System.out.println("Digite a opção desejada:");
	}

}
