package Garage;

public abstract class Plane extends Vehicle {

	public Plane(String brand, int price, int topSpeed, int stylePoints, String countryOfCreation,
			boolean extravagant) {
		super(brand, price, topSpeed, stylePoints, countryOfCreation, extravagant);
	}

	private int numOfEngines;
	private int capacity;
	
	
	public int getNumOfEngines() {
		return numOfEngines;
	}
	
	public void setNumOfEngines(int numOfEngines) {
		this.numOfEngines = numOfEngines;
	}
	
	public int getCapacity() {
		return capacity;
	}
	
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	
	@Override
	public String toString() {
		return "Plane: Name = " + getBrand() + ", Price = " + getPrice() + ", Top Speed = " + getTopSpeed() + ", Style Points = " + getStylePoints() + ", Country Of Oirign = " + getCountryOfCreation() + ", Extravagant = " + getExtravagant() + "Number of Engines = " + getNumOfEngines() + "Passenger Capacity = " + getCapacity() + "."; 
	}


}
