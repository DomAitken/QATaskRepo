package Garage;

public class Runner {
	
public static void main(String[] args) {
	
//Car
Car car = new Car();

car.setPrice(20000000);
car.setBrand("Bugatti");
car.setTopSpeed(250);
car.setStylePoints(95);
car.setCountryOfCreation("France");
car.setExtravagant(true);
System.out.println(car.getPrice());
System.out.println(car.getBrand());
System.out.println(car.getTopSpeed());

//Bike
Motorbike bike = new Motorbike();

bike.setPrice(5000);
bike.setBrand("Honda");
bike.setTopSpeed(100);
bike.setStylePoints(1);
bike.setCountryOfCreation("Japan");
bike.setExtravagant(false);
System.out.println(bike.getPrice());
System.out.println(bike.getBrand());
System.out.println(bike.getTopSpeed());

//Plane
Plane jet = new Plane();

jet.setPrice(320000000);
jet.setBrand("AirBus");
jet.setTopSpeed(750);
jet.setStylePoints(100);
jet.setCountryOfCreation("UK/France/Germany/Spain/Netherlands");
jet.setExtravagant(true);
System.out.println(jet.getPrice());
System.out.println(jet.getBrand());
System.out.println(jet.getTopSpeed());
}

}

