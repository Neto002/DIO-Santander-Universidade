import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Main {

	public static void main(String[] args) {

		List<Ex> exArray = new ArrayList<>() {{
			add(new Ex());
			add(new Ex());
			add(new Ex());
		}};
		
		exArray.sort(new Comparator<Ex>() {
			@Override
			public int compare(Ex s1, Ex s2) {
				return Integer.compare(s1.a(), s2.a());
			}
		});
		
		exArray.sort(Comparator.comparing((Ex ex) -> ex.getEx())); // Lambda
		exArray.sort(Comparator.comparing(Ex::getEx)); // Reference Method

	}

}

class Ex {
	public String getEx() {
		return "oi";
	}
	
	public int a() {
		return 1;
	}
}
