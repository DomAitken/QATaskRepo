package Garage;

public abstract class Vehicle {

	private String brand = "";
	private int price;
	private int topSpeed;
	private int stylePoints;
	private String countryOfCreation;
	private boolean extravagant;

	public Vehicle(String brand, int price, int topSpeed, int stylePoints, String countryOfCreation, boolean extravagant) {
		this.brand = brand;
		this.price = price;
		this.topSpeed = topSpeed;
		this.stylePoints = stylePoints;
		this.countryOfCreation = countryOfCreation;
		this.extravagant = extravagant;
	}

	public abstract void drive();

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public int getTopSpeed() {
		return topSpeed;
	}

	public void setTopSpeed(int topSpeed) {
		this.topSpeed = topSpeed;
	}

	public int getStylePoints() {
		return stylePoints;
	}

	public void setStylePoints(int stylePoints) {
		this.stylePoints = stylePoints;
	}

	public boolean getExtravagant() {
		return extravagant;
	}

	public void setExtravagant(boolean extravagant) {
		this.extravagant = extravagant;
	}

	public String getCountryOfCreation() {
		return countryOfCreation;
	}

	public void setCountryOfCreation(String countryOfCreation) {
		this.countryOfCreation = countryOfCreation;
	}

	@Override
	public String toString() {
		return "Vehicle: Name = " + getBrand() + ", Price = " + getPrice() + ", Top Speed = " + getTopSpeed() + ", Style Points = " + getStylePoints() + ", Country Of Oirign = " + getCountryOfCreation() + ", Extravagant = " + getExtravagant();
	}

}