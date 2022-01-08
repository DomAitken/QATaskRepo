package TaskPack;

import java.util.List;

public class Project {
    private List<Developer> developers;

    public Project(List<Developer> devs) {
        this.developers = devs;
    }

    public void implementList() {
        for(Developer dev:developers) {
        	dev.develop();
        }
    }

}
