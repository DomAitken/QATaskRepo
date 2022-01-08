package Garage;

public abstract class Car extends Vehicle {
		
		public Car(String brand, int price, int topSpeed, int stylePoints, String countryOfCreation, boolean extravagant) {
		super(brand, price, topSpeed, stylePoints, countryOfCreation, extravagant);
	}
		private int mileage;
		private int numOfDoors;
		
		
		public int getNumOfDoors() {
			return numOfDoors;
		}

		public void setNumOfDoors(int numOfDoors) {
			this.numOfDoors = numOfDoors;
		}

		public int getMileage() {
			return mileage;
		}

		public void setMileage(int mileage) {
			this.mileage = mileage;
		}
		
		@Override
		public String toString() {
			return "Car: Name = " + getBrand() + ", Price = " + getPrice() + ", Top Speed = " + getTopSpeed() + ", Style Points = " + getStylePoints() + ", Country Of Oirign = " + getCountryOfCreation() + ", Extravagant = " + getExtravagant() + ", Mileage = " + getMileage() + "Number of Doors = " + getNumOfDoors() + ".";
		}

	}


