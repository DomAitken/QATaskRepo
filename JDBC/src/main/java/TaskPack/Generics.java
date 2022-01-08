package TaskPack;

public interface Generics {
	public void create(Kitten kitten);
	public Kitten readById(int id);
	public void update(Kitten kitten, int id);
	public void delete(int id);
}
