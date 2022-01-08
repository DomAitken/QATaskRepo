package Exceptions;

public class Maths {

	public void multiply(int a, int b) throws MultiplyByFiveException{
		int result;
		
		if(a == 5 || b ==5) {
			MultiplyByFiveException m = new MultiplyByFiveException();
			throw m;
		}
		
		result = a*b;
		System.out.println("The answer to your question is: " + result);
	}
}