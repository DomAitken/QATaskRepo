package AnimalTask;

public class Animal {
	
	private int noOfLegs;
	private String name;
	private boolean carnivore;

	public Animal(int noOfLegs, String name, boolean carnivore) {
		super();
		this.noOfLegs = noOfLegs;
		this.name = name;
		this.carnivore = carnivore;
	}

	public int getNoOfLegs() {
		return noOfLegs;
	}

	public void setNoOfLegs(int noOfLegs) {
		this.noOfLegs = noOfLegs;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isCarnivore() {
		return carnivore;
	}
	
	public void setCarnivore(boolean carnivore) {
		this.carnivore = carnivore;
	}
	
}