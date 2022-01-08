package interfaceEx;

import interfaceEx.Runner.Countries;

public class England implements Countries {

	@Override
	public void population() {
		System.out.println("England has a population of 70,000,000.");	
	}

	@Override
	public void weather() {
		System.out.println("England has very cold weather.");
	}
	
	@Override
	public void continent() {
		System.out.println("England is a part of Europe");
	}

}

class mainClass {
	public static void main(String[] args) {
		England england = new England();
		england.population();
		england.weather();
		england.continent();
	}
}
