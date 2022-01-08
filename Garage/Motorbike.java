package Garage;

public abstract class Motorbike extends Vehicle {

	public Motorbike(String brand, int price, int topSpeed, int stylePoints, String countryOfCreation,
			boolean extravagant) {
		super(brand, price, topSpeed, stylePoints, countryOfCreation, extravagant);
	}

	private int numOfWheels;
	private boolean isFast;
	
	
	public int getNumOfWheels() {
		return numOfWheels;
	}
	
	public void setNumOfWheels(int numOfWheels) {
		this.numOfWheels = numOfWheels;
	}
	
	public boolean getIsFast() {
		return isFast;
	}
	
	public void setIsFast(boolean isFast) {
		this.isFast = isFast;
	}
	
	@Override
	public String toString() {
		return "Motorbike: Name = " + getBrand() + ", Price = " + getPrice() + ", Top Speed = " + getTopSpeed() + ", Style Points = " + getStylePoints() + ", Country Of Oirign = " + getCountryOfCreation() + ", Extravagant = " + getExtravagant() + "Is it fast? = " + getIsFast() + "Number of Wheels = " + getNumOfWheels() + ".";
	}


}



