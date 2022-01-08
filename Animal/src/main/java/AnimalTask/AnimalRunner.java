package AnimalTask;

public class AnimalRunner {

public static void main(String[] args) {
		
//Snake
DangerNoodle snake = new DangerNoodle(0, false, null);

snake.setName("Anaconda");
snake.setNoOfLegs(0);
snake.setCarnivore(true);
snake.setWeight(350);
snake.setFast(false);
snake.setPackAnimal(false);
System.out.println(snake.getName());
System.out.println(snake.getNoOfLegs());
System.out.println(snake.isCarnivore());

//Tiger
Tiger bengal = new Tiger(0, false, null);

		
bengal.setName("Bengal");
bengal.setNoOfLegs(4);
bengal.setCarnivore(true);
bengal.setWeight(250);
bengal.setFast(false);
bengal.setPackAnimal(false);
System.out.println(bengal.getName());
System.out.println(bengal.getNoOfLegs());
System.out.println(bengal.isCarnivore());
		
//Platypus
Platypus perry = new Platypus(0, false, null);

		
perry.setName("Perry");
perry.setNoOfLegs(4);
perry.setCarnivore(true);
perry.setWeight(20);
perry.setFast(false);
perry.setPackAnimal(false);
System.out.println(perry.getName());
System.out.println(perry.getNoOfLegs());
System.out.println(perry.isCarnivore());
		
//Wolf
Wolf Alaskan = new Wolf(0, false, null);


Alaskan.setName("Alaskan");
Alaskan.setNoOfLegs(4);
Alaskan.setCarnivore(true);
Alaskan.setWeight(20);
Alaskan.setFast(false);
Alaskan.setPackAnimal(false);
System.out.println(Alaskan.getName());
System.out.println(Alaskan.getNoOfLegs());
System.out.println(Alaskan.isCarnivore());
}

}
