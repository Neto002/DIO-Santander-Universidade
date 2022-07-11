package subsistema2.cep;

public class CepApi {
    private static CepApi instancia = new CepApi();

    public CepApi() {
        
    }

    public static CepApi getInstancia() {
        return instancia;
    }

    public String recuperarCidade(String cep) {
        return "Cidade test";
    }

    public String recuperarEstado(String cep) {
        return "RJ";
    }
}
