package TaskPack;

public class Studio {
    private int squareFeet;
    private int numberOfBedrooms;

    public Studio() {
        this.setNumOfBedrooms(0);
    }

    public int getSquareFeet() {
        return squareFeet;
    }

    public void setSquareFeet(int sqft) {
        this.squareFeet = sqft;
    }

    public int getNumberOfBedrooms() {
        return numberOfBedrooms;
    }

    public void setNumOfBedrooms(int numberOfBedrooms) {
    this.numberOfBedrooms = numberOfBedrooms;
    }
}
