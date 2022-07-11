package dio.design.patterns;


import dio.design.patterns.facade.Facade;
import dio.design.patterns.singleton.SingletonEager;
import dio.design.patterns.singleton.SingletonLazy;
import dio.design.patterns.singleton.SingletonLazyHolder;
import dio.design.patterns.strategy.Comportamento;
import dio.design.patterns.strategy.ComportamentoDefensivo;
import dio.design.patterns.strategy.ComportamentoNormal;
import dio.design.patterns.strategy.ComportamentoOfensivo;
import dio.design.patterns.strategy.Robo;

public class Test {
    public static void main(String[] args) {

        // Singleton Design Pattern
        SingletonLazy lazy = SingletonLazy.getInstancia();
        System.out.println(lazy);

        lazy = SingletonLazy.getInstancia();
        System.out.println(lazy);

        SingletonEager eager = SingletonEager.getInstancia();
        System.out.println(eager);
        
        eager = SingletonEager.getInstancia();
        System.out.println(eager);

        SingletonLazyHolder holder = SingletonLazyHolder.getInstancia();
        System.out.println(holder);

        holder = SingletonLazyHolder.getInstancia();
        System.out.println(holder);

        // Strategy Design Pattern
        Comportamento normal = new ComportamentoNormal();
        Comportamento defensivo = new ComportamentoDefensivo();
        Comportamento ofensivo = new ComportamentoOfensivo();

        Robo robo = new Robo();

        robo.setComportamento(normal);
        robo.mover();
        robo.mover();

        robo.setComportamento(defensivo);
        robo.mover();
        robo.mover();

        robo.setComportamento(ofensivo);
        robo.mover();
        robo.mover();

        // Facade
        Facade facade = new Facade();

        facade.migrarCliente("Antonio Neto", "123");
    }
}
