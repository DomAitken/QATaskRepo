package TaskPack;

public abstract class Apartment {

	 private int squareFeet;
	    private int numOfBedrooms;

	    public abstract void setSquareFeet(int sqft);

	    public int getSquareFeet() {
	        return squareFeet;
	    }

	    public int getNumOfBedrooms() {
	        return numOfBedrooms;
	    }

	    public void setNumOfBedrooms(int numberOfBedrooms) {
	        this.numOfBedrooms = numberOfBedrooms;
	    }

}
