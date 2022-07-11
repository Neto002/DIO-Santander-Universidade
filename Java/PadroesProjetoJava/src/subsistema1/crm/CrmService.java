package subsistema1.crm;

import java.text.MessageFormat;

public class CrmService {

    private CrmService() {

    }

    public static void gravarCliente(String nome, String cep, String cidade, String estado) {
        System.out.println("Cliente salvo no sistema de CRM");
        System.out.println(MessageFormat.format("{0}\n{1}\n{2}\n{3}", nome, cep, cidade, estado));
    }
}
