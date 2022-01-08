package ObjectOrientedDay1;

public class Person {

	private double height;
	private String name;
	private float shoeSize;
	private String jobTitle;
	private int age;
	private double height2;
	private String name2;
	private float shoeSize2;
	private String jobTitle2;
	private int age2;
	private double height3;
	private String name3;
	private float shoeSize3;
	private String jobTitle3;
	private int age3;
	private double height4;
	private String name4;
	private float shoeSize4;
	private String jobTitle4;
	private int age4;
	
	public Person(double height, double height2, double height3, double height4, String name, String name2, String name3, String name4, float shoeSize, float shoeSize2, float shoeSize3, float shoeSize4, String jobTitle, String jobTitle2, String jobTitle3, String jobTitle4, int age, int age2, int age3, int age4){
		this.height = 185;
		this.name = "Dom";
		this.shoeSize = (float) 9.5;
		this.jobTitle = "Software Developer";
		this.age = 18;
		
		this.height2 = 170;
		this.name2 = "Susan";
		this.shoeSize2 = (float) 5.5;
		this.jobTitle2 = "Barrister";
		this.age2 = 24;
		
		this.height3 = 165;
		this.name3 = "Elizabeth";
		this.shoeSize3 = (float) 4.5;
		this.jobTitle3 = "Ewok";
		this.age3 = 28;
		
		this.height4 = 200;
		this.name4 = "Jack";
		this.shoeSize4 = (float) 12.5;
		this.jobTitle4 = "Builder";
		this.age4 = 34;
	}

	public Person(double height, String name, float shoeSize, String jobTitle, int age, double height2, String name2,
			float shoeSize2, String jobTitle2, int age2, double height3, String name3, float shoeSize3,
			String jobTitle3, int age3, double height4, String name4, float shoeSize4, String jobTitle4, int age4) {
		super();
		this.height = height;
		this.name = name;
		this.shoeSize = shoeSize;
		this.jobTitle = jobTitle;
		this.age = age;
		this.height2 = height2;
		this.name2 = name2;
		this.shoeSize2 = shoeSize2;
		this.jobTitle2 = jobTitle2;
		this.age2 = age2;
		this.height3 = height3;
		this.name3 = name3;
		this.shoeSize3 = shoeSize3;
		this.jobTitle3 = jobTitle3;
		this.age3 = age3;
		this.height4 = height4;
		this.name4 = name4;
		this.shoeSize4 = shoeSize4;
		this.jobTitle4 = jobTitle4;
		this.age4 = age4;
	}

	public Person(String string, int i) {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return the height
	 */
	public double getHeight() {
		return height;
	}

	/**
	 * @param height the height to set
	 */
	public void setHeight(double height) {
		this.height = height;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the shoeSize
	 */
	public float getShoeSize() {
		return shoeSize;
	}

	/**
	 * @param shoeSize the shoeSize to set
	 */
	public void setShoeSize(float shoeSize) {
		this.shoeSize = shoeSize;
	}

	/**
	 * @return the jobTitle
	 */
	public String getJobTitle() {
		return jobTitle;
	}

	/**
	 * @param jobTitle the jobTitle to set
	 */
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	/**
	 * @return the age
	 */
	public int getAge() {
		return age;
	}

	/**
	 * @param age the age to set
	 */
	public void setAge(int age) {
		this.age = age;
	}

	/**
	 * @return the height2
	 */
	public double getHeight2() {
		return height2;
	}

	/**
	 * @param height2 the height2 to set
	 */
	public void setHeight2(double height2) {
		this.height2 = height2;
	}

	/**
	 * @return the name2
	 */
	public String getName2() {
		return name2;
	}

	/**
	 * @param name2 the name2 to set
	 */
	public void setName2(String name2) {
		this.name2 = name2;
	}

	/**
	 * @return the shoeSize2
	 */
	public float getShoeSize2() {
		return shoeSize2;
	}

	/**
	 * @param shoeSize2 the shoeSize2 to set
	 */
	public void setShoeSize2(float shoeSize2) {
		this.shoeSize2 = shoeSize2;
	}

	/**
	 * @return the jobTitle2
	 */
	public String getJobTitle2() {
		return jobTitle2;
	}

	/**
	 * @param jobTitle2 the jobTitle2 to set
	 */
	public void setJobTitle2(String jobTitle2) {
		this.jobTitle2 = jobTitle2;
	}

	/**
	 * @return the age2
	 */
	public int getAge2() {
		return age2;
	}

	/**
	 * @param age2 the age2 to set
	 */
	public void setAge2(int age2) {
		this.age2 = age2;
	}

	/**
	 * @return the height3
	 */
	public double getHeight3() {
		return height3;
	}

	/**
	 * @param height3 the height3 to set
	 */
	public void setHeight3(double height3) {
		this.height3 = height3;
	}

	/**
	 * @return the name3
	 */
	public String getName3() {
		return name3;
	}

	/**
	 * @param name3 the name3 to set
	 */
	public void setName3(String name3) {
		this.name3 = name3;
	}

	/**
	 * @return the shoeSize3
	 */
	public float getShoeSize3() {
		return shoeSize3;
	}

	/**
	 * @param shoeSize3 the shoeSize3 to set
	 */
	public void setShoeSize3(float shoeSize3) {
		this.shoeSize3 = shoeSize3;
	}

	/**
	 * @return the jobTitle3
	 */
	public String getJobTitle3() {
		return jobTitle3;
	}

	/**
	 * @param jobTitle3 the jobTitle3 to set
	 */
	public void setJobTitle3(String jobTitle3) {
		this.jobTitle3 = jobTitle3;
	}

	/**
	 * @return the age3
	 */
	public int getAge3() {
		return age3;
	}

	/**
	 * @param age3 the age3 to set
	 */
	public void setAge3(int age3) {
		this.age3 = age3;
	}

	/**
	 * @return the height4
	 */
	public double getHeight4() {
		return height4;
	}

	/**
	 * @param height4 the height4 to set
	 */
	public void setHeight4(double height4) {
		this.height4 = height4;
	}

	/**
	 * @return the name4
	 */
	public String getName4() {
		return name4;
	}

	/**
	 * @param name4 the name4 to set
	 */
	public void setName4(String name4) {
		this.name4 = name4;
	}

	/**
	 * @return the shoeSize4
	 */
	public float getShoeSize4() {
		return shoeSize4;
	}

	/**
	 * @param shoeSize4 the shoeSize4 to set
	 */
	public void setShoeSize4(float shoeSize4) {
		this.shoeSize4 = shoeSize4;
	}

	/**
	 * @return the jobTitle4
	 */
	public String getJobTitle4() {
		return jobTitle4;
	}

	/**
	 * @param jobTitle4 the jobTitle4 to set
	 */
	public void setJobTitle4(String jobTitle4) {
		this.jobTitle4 = jobTitle4;
	}

	/**
	 * @return the age4
	 */
	public int getAge4() {
		return age4;
	}

	/**
	 * @param age4 the age4 to set
	 */
	public void setAge4(int age4) {
		this.age4 = age4;
	}
	
	
}


}
