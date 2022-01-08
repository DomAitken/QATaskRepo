package Exceptions;

import Exceptions.Maths;
import Exceptions.MultiplyByFiveException;

public class Runner {

	public static void main(String[] args){
		
//		try {
//			System.out.println(4/0);
//			
//		} catch(ArithmeticException e) {
//			System.out.println("You cant divide by zero");
//		}
		
		
		//NOTE: because Exception is a parent class, it must be down towards the bottom if chaining exceptions, as it will catch all exceptions
		//If you want to test a specific exception, this should be near the top so that it checks that first, then catches any otheer exceptions
		
		try {
			Maths m = new Maths();
			m.multiply(5, 3);
		}catch(MultiplyByFiveException t) {
			t.handle();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
