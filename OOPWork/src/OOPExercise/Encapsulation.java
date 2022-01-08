package OOPExercise;

public class Encapsulation {
	
	
	private String String;
	private int Int;
	private float Float;
	private double Double;
	private long Long;

	public String getString() {
		return String;
	}

	public void setNewString(String newString) {
		this.String = newString;
	}

	public int getInt() {
		return Int;
	}

	public void setNewInt(int newInt) {
		this.Int = newInt;
	}

	public float getFloat() {
		return Float;
	}

	public void setNewFloat(float newFloat) {
		this.Float = newFloat;
	}

	public double getDouble() {
		return Double;
	}


	public void setNewDouble(double newDouble) {
		this.Double = newDouble;
	}

	public long getLong() {
		return Long;
	}

	public void setNewLong(long newLong) {
		this.Long = newLong;
	}

	public Encapsulation(String newString, int newInt, float newFloat, double newDouble, long newLong) {
		super();
		this.String = newString;
		this.Int = newInt;
		this.Float = newFloat;
		this.Double = newDouble;
		this.Long = newLong;
	}

	public Encapsulation() {
		super();
	}

	
	}
	


