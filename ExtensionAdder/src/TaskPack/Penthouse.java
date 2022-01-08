package TaskPack;

public class Penthouse {
    private int squareFeet;
    private int numOfBedrooms;

    public Penthouse() {
        this.setNumOfBedrooms(4);
    }

    public int getSquareFeet() {
        return squareFeet;
    }

    public void setSquareFeet(int sqft) {
        this.squareFeet = sqft;
    }

    public int getNumOfBedrooms() {
        return numOfBedrooms;
    }

    public void setNumOfBedrooms(int numberOfBedrooms) {
        this.numOfBedrooms = numberOfBedrooms;
    }
}
