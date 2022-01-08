package TaskPack;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class SetUp implements Generics {

	public static final Logger LOGGER = LogManager.getLogger();

	private String jdbcConnectionURL;
	private String username;
	private String password;

	public SetUp(String username, String password) {
		jdbcConnectionURL = "jdbc:mysql://localhost:3306/kittendb";
		this.username = username;
		this.password = password;
	}

	public SetUp(String jdbcConnectionURL, String username, String password) {
		this.jdbcConnectionURL = jdbcConnectionURL;
		this.username = username;
		this.password = password;
	}

	public void testConnection() {

		Connection conn = null;
		try {
			System.out.println("I am attempting connection");
			conn = DriverManager.getConnection(jdbcConnectionURL, username, password);
			System.out.println("I have connected");
		} catch (SQLException e) {
            LOGGER.error(e.getMessage());
			e.printStackTrace();
		} finally {
			try {
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException se) {
				se.printStackTrace();
			}
		}
	}

	//CREATE STATEMENT
	public void create(Kitten kitten) {
    	try(Connection conn = DriverManager.getConnection(jdbcConnectionURL, username, password); 
    			Statement statement = conn.createStatement()) {
    				statement.executeUpdate("INSERT INTO kitten(age, breed, cuteness, name) VALUES(" + kitten.getAge() + ",'"
    						+ kitten.getBreed() + "'," + kitten.getCuteness() + ",'" + kitten.getName() + "')");
     		System.out.println(readAll());
    	}catch(SQLException e) {
    		LOGGER.error(e.getMessage());
    	}
    }
	
	//CREATE PREPARED STATEMENT
	public void createPrepared(Kitten kitten) {
		try(Connection conn = DriverManager.getConnection(jdbcConnectionURL, username, password);
				PreparedStatement statement = conn.prepareStatement("INSERT INTO kitten(age, breed, cuteness, name) VALUES (?,?,?,?))")) {
			statement.setInt(1, kitten.getAge());
			statement.setString(2, kitten.getBreed());
			statement.setInt(3, kitten.getCuteness());
			statement.setString(4, kitten.getName());
			statement.executeUpdate();
			
		}catch(SQLException e) {
			LOGGER.error(e.getMessage());
		}
	}
	//RESULTSET
	public Kitten kittenFromResultSet(ResultSet resultSet) throws SQLException{
		int kittenId = resultSet.getInt("id");
		int age = resultSet.getInt("age");
		String breed = resultSet.getString("breed");
		int cuteness = resultSet.getInt("cuteness");
		String name = resultSet.getString("name");
		
		return new Kitten(kittenId, age, breed, cuteness, name);
	}
	//READ BY ID STATEMENT
	public Kitten readById(int id) {
		try(Connection conn = DriverManager.getConnection(jdbcConnectionURL, username, password); 
    			Statement statement = conn.createStatement(); 
			ResultSet resultSet = statement.executeQuery("SELECT * FROM kitten WHERE id = " + id + "ORDER BY name DESC")) {
			resultSet.next();
			return kittenFromResultSet(resultSet);
			
		}catch(SQLException e) {
			LOGGER.error(e.getMessage());
		}
		return null;
	}
	
	//READ BY ID PREPARED STATEMENT
	public Kitten readByIdPrep(int id) {
		try(Connection conn = DriverManager.getConnection(jdbcConnectionURL, username, password);
				PreparedStatement statement = conn.prepareStatement("SELECT * FROM kittens WHERE id = (?)")) {
					statement.setInt(1, id);
					ResultSet pete = statement.executeQuery();
					pete.next();
					return kittenFromResultSet(pete);
				}catch(SQLException e){
					LOGGER.error(e.getMessage());
				}
		return null;
	}
	
	//READ ALL STATEMENT
	public List<Kitten> readAll(){
		try(Connection conn = DriverManager.getConnection(jdbcConnectionURL, username, password); 
    			Statement statement = conn.createStatement(); 
			ResultSet resultSet = statement.executeQuery("SELECT * FROM kitten")) {
			
			List<Kitten> kittens = new ArrayList<>();
			while(resultSet.next()) {
				kittens.add(kittenFromResultSet(resultSet));
			}
			return kittens;
			
		}catch(SQLException e) {
			LOGGER.error(e.getMessage());
		}
		return null;
	}
	
	
	//READ PREPARED STATEMENT
	
	//UPDATE STATEMENT
	public void update(Kitten kitten, int id) {
		try(Connection conn = DriverManager.getConnection(jdbcConnectionURL, username, password); 
    			Statement statement = conn.createStatement()) {
			statement.executeUpdate("UPDATE kitten SET age = " + kitten.getAge() + ", breed = '" + kitten.getBreed() + "', cuteness = "
					+ kitten.getCuteness() + ", name = '" + kitten.getName() + "' WHERE id = " + id);
			System.out.println(readById(id));
		}catch(SQLException e) {
			LOGGER.error(e.getMessage());
		}
		
	}
	
	//UPDATE PREPARED STATEMENT
	public void updatePrepared(Kitten kitten, int id) {
		try(Connection conn = DriverManager.getConnection(jdbcConnectionURL, username, password);
				PreparedStatement statement = conn.prepareStatement("UPDATE kitten SET(age, breed, cuteness, name) WHERE id = (?,?,?,?,?)")) {
			statement.setInt(1, kitten.getAge());
			statement.setString(2, kitten.getBreed());
			statement.setInt(3, kitten.getCuteness());
			statement.setString(4, kitten.getName());
			statement.setInt(5, id);
			statement.executeUpdate();
			
		}catch(SQLException e) {
			LOGGER.error(e.getMessage());
		}
	}
	//DELETE STATEMENT
	public void delete(int id) {
		try(Connection conn = DriverManager.getConnection(jdbcConnectionURL, username, password); 
    			Statement statement = conn.createStatement()) {
					statement.executeUpdate("DELETE FROM kitten WHERE id = " + id);
			
		}catch(SQLException e) {
			LOGGER.error(e.getMessage());
		}
	}
	
	//DELETE PREPARED STATEMENT
	public void deletePrepared(int id) {
		try(Connection conn = DriverManager.getConnection(jdbcConnectionURL, username, password);
				PreparedStatement statement = conn.prepareStatement("DELETE FROM kitten WHERE id = ?")) {
			statement.setInt(1, id);
			statement.executeUpdate();
			
		}catch(SQLException e) {
			LOGGER.error(e.getMessage());
		}
	}
	

}