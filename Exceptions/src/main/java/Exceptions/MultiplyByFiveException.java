package Exceptions;

public class MultiplyByFiveException extends Exception{

	public void handle() {
		System.out.println("This exception can be fixed by changing a number from 5 to anything else");
	}
}
