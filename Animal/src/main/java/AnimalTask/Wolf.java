package AnimalTask;

public class Wolf extends Animal{

	public Wolf(int noOfLegs, boolean carnivore, String name) {
		super(noOfLegs, name, carnivore);
	}

	private int weight;
	private boolean fast;
	private boolean packAnimal;

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public boolean isFast() {
		return fast;
	}

	public void setFast(boolean fast) {
		this.fast = fast;
	}

	public boolean isPackAnimal() {
		return packAnimal;
	}

	public void setPackAnimal(boolean packAnimal) {
		this.packAnimal = packAnimal;
	}

	@Override
	public String toString() {
		return "Animal: Name = " + getName() + ", Number of Legs = " + getNoOfLegs() + ", Carnivore? = " + isCarnivore() + ", Fast? = " + isFast() + ", Weight = " + getWeight() + ", Pack Animal? = " + isPackAnimal() + ".";
	}
	
	
}
