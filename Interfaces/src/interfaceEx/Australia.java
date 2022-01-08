package interfaceEx;

import interfaceEx.Runner.Countries;

public class Australia implements Countries {

	@Override
	public void population() {
		System.out.println("Australia has a population of 25,690,000.");	
	}

	@Override
	public void weather() {
		System.out.println("Australia has very hot weather.");
	}
	
	@Override
	public void continent() {
		System.out.println("Australia is a part of Oceania");
	}

}

class classAus {
	public static void main(String[] args) {
		Australia australia = new Australia();
		australia.population();
		australia.weather();
		australia.continent();
	}
}

