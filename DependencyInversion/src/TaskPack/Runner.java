package TaskPack;

import java.util.ArrayList;
import java.util.List;

public class Runner {
	
	

	public static void main(String[] args) {
		List<Developer> devs = new ArrayList <Developer>();
		BackendDeveloper B = new BackendDeveloper();
		FrontendDeveloper F = new FrontendDeveloper();
		
		devs.add(B);
		devs.add(F);
		
		Project multiProj = new Project(devs);
		multiProj.implementList();
	}

}
