package Garage;

import java.util.ArrayList;
import java.util.List;

public class Garage {

	List<Vehicle> garageList = new ArrayList<Vehicle>();
	
	public void addVehicle(Vehicle myCar) {
		garageList.add(myCar);
	}
	
	public int bill (Vehicle vehicle) {
		if (vehicle.getClass().getSimpleName().equals("Car")) {
			return 800;
		}
		else if (vehicle.getClass().getSimpleName().equals("Motorbike")) {
			return 200;
		} else {
			return 100000;
		}
	}
		
	public void fixAllVehicles() {
		System.out.println("All your vehicles are fixed!");
			for (Vehicle i : garageList) {
				if (i.getClass().getSimpleName().equals("Car")) {
					System.out.println("The bill for your car is £" + bill(i) + ".");
				} else if (i.getClass().getSimpleName().equals("Motorbike")) {
					System.out.println("The bill for your motorbike is £" + bill(i) + ".");
				} else {
		System.out.println("The bill for your Plane is £" + bill(i) + ".");						
	}
			}
	}
	
	public void removeVehiclesType(String type) {
		for (int i = 0; i < garageList.size(); i++) {
				if (garageList.get(i).getClass().getSimpleName().equals(type)) {
					garageList.remove(i);
					}
			}
		System.out.println("Removed all " + type + "s.");
				}
	
	public void removeVehicleName(String brand) {
		for (int i = 0; i < garageList.size(); i++) {
			if (garageList.get(i).equals(brand)) {
				String toRemove = garageList.get(i).getBrand();
				garageList.remove(i);
				System.out.println("Removed " + toRemove);
					}
				}
			}
	
	public void emptyGarage() {
		garageList.removeAll(garageList);
		System.out.println("Garage empty.");
	}
	
	@Override
	public String toString() {
		return "Garage contains: " + garageList;
	}


}
