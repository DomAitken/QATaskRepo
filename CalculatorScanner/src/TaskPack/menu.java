package TaskPack;

import java.util.Scanner;

public class menu {

	Scanner input = new Scanner(System.in);
	
	public void menu() {
		boolean menuCorrect = true;
		String option = "";
		int num1;
		int num2;
		
		System.out.println("CALCULATOR");
		
		while(menuCorrect) {
			System.out.println("_".repeat(40));
			System.out.println("Choose from the options listed below:");
			System.out.println("_".repeat(40));
			System.out.println("\t1. Addition");
			System.out.println("\t2. Subtraction");
			System.out.println("\t3. Multiplication");
			System.out.println("\t4. Division");
			System.out.println("_".repeat(40));
			System.out.println("\t0. Exit");
			
			option = this.input.nextLine();
			
			switch (option) {
			case "1":
				System.out.println("Enter the first number: ");
				num1 = input.nextInt();
				System.out.println("Enter your second number :");
				num2 = input.nextInt();
				input.nextLine();
				System.out.println("Your answer is: ");
				System.out.println(Calculator.add(num1, num2));
				break;
				
			case "2":
				System.out.println("Enter the first number: ");
				num1 = input.nextInt();
				System.out.println("Enter your second number :");
				num2 = input.nextInt();
				input.nextLine();
				System.out.println("Your answer is: ");
				System.out.println(Calculator.sub(num1, num2));
				break;
			
			case "3":
				System.out.println("Enter the first number: ");
				num1 = input.nextInt();
				System.out.println("Enter your second number :");
				num2 = input.nextInt();
				input.nextLine();
				System.out.println("Your answer is: ");
				System.out.println(Calculator.mul(num1, num2));
				break;
				
			case "4":
				System.out.println("Enter the first number: ");
				num1 = input.nextInt();
				System.out.println("Enter your second number :");
				num2 = input.nextInt();
				input.nextLine();
				System.out.println("Your answer is: ");
				System.out.println(Calculator.div(num1, num2));
				break;
				
			case "0":
				System.out.println("Adios!");
				break;
				
			default:
				System.out.println("That is not a valid input. Please enter an acceptable value.");
				
				
			}
		}
	}

	

	

}
