package ArrayList;

public class StringExercise {

	public static void main(String[] args) {
		String string1 = "yesterday it was raining";
		String string2 = "today it is sunny";
		
		String mySubString1 = string2.substring(0, 11);
		String mySubString2 = string1.substring(16, 24);
		
		System.out.println(string2.toUpperCase()+", "+string1.toUpperCase());
		
		String newString = "This is a string";
		
		int stringLength = newString.length();
		System.out.println("String Length is " + stringLength);
		
		String string3 = "Java";
        String string4 = "can";
        String string5 = "be";
        String string6 = "complicated";
        System.out.println(string3 + string4 + string5 + string6);
        
        String string7 = "Java";
        String string8 = "can";
        String string9 = "be";
        String string10 = "complicated";
        System.out.println(string10 + string9 + string8 + string7);
        
        String lastString1 = "I am learning Java so I can work for BAE";
        String lastString2 = "learning Java";
        System.out.println(str1.contains("learning Java"));
        

		
	}

}
