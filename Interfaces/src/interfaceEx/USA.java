package interfaceEx;

import interfaceEx.Runner.Countries;

public class USA implements Countries {

	@Override
	public void population() {
		System.out.println("The United States of America has a population of 400,000,000.");	
	}

	@Override
	public void weather() {
		System.out.println("The United States of America has hot weather.");
	}
	
	@Override
	public void continent() {
		System.out.println("The United States of America is a part of North America");
	}

}

class classUSA {
	public static void main(String[] args) {
		USA america = new USA();
		america.population();
		america.weather();
		america.continent();
	}
}

