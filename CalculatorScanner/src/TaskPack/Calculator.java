package TaskPack;

public class Calculator {

	public static double res;
	
	public static double add(double number1, double number2) {
		res = number1 + number2;
		return res;
	}

	public static double sub(double number1, double number2) {
		res = number1 - number2;
		return res;
	}
	
	public static double mul(double number1, double number2) {
		res = number1 * number2;
		return res;
	}
	
	public static double div(double number1, double number2) {
		res = number1 / number2;
		return res;
	}
}
