package ArrayList;
import java.util.ArrayList;
import java.util.List;

public class EnhancedForLoopExercise {

	public static boolean isEven(int num) {
		if (num % 2 == 0) {
			return true;
		} else {
			return false;
		}
	}

	public static void main(String[] args) {

		List<String> cryptos = new ArrayList<>(List.of("Cardano", "Bitcoin", "Ripple", "Tron"));

		for (String i : cryptos) {
			System.out.println(i);
		}

		int[] values = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 };

		for (int i : values) {
			int a = i * i;
			System.out.println(a);
		}

		for (int i : values) {
			if (isEven(i)) {
				int a = i * i * i;
				System.out.println(a);
			} else {
				int b = i * i;
				System.out.println(b);
			}
		}

	}

}
