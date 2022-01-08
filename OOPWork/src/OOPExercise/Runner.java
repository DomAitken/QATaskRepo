package OOPExercise;

public class Runner {
	public static void main(String[] args) {
		Encapsulation newStuff = new Encapsulation("john", 24, 1400, 2.0, 4658375);
		
		newStuff.setNewString("Nigel");
		newStuff.setNewInt(50);
		newStuff.setNewFloat(2787);
		newStuff.setNewDouble(2.0);
		newStuff.setNewLong(4658375);
		
		System.out.println(newStuff.getString());
		System.out.println(newStuff.getInt());
		System.out.println(newStuff.getFloat());
		System.out.println(newStuff.getDouble());
		System.out.println(newStuff.getLong());
		
	}
		
}
