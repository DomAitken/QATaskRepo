package com.example.spring.domain;
	
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // flags class as a table to Spring Data
public class Players {

	@Id // PK
	@GeneratedValue(strategy = GenerationType.IDENTITY) // AUTO_INCREMENT
	private Integer playerId;

	@Column(nullable = false)
	private String playerName;

	private String playerPosition;

	private String playerTeam;

	private Integer jerseyNumber;
	
	private String tdCelebration;

	public Players() {
		super();
	}
	
	public Players(Integer playerId, String playerName, String playerPosition, String playerTeam, Integer jerseyNumber,
			String tdCelebration) {
		super();
		this.playerId = playerId;
		this.playerName = playerName;
		this.playerPosition = playerPosition;
		this.playerTeam = playerTeam;
		this.jerseyNumber = jerseyNumber;
		this.tdCelebration = tdCelebration;
	}

	public Players(String playerName, String playerPosition, String playerTeam, Integer jerseyNumber,
			String tdCelebration) {
		super();
		this.playerName = playerName;
		this.playerPosition = playerPosition;
		this.playerTeam = playerTeam;
		this.jerseyNumber = jerseyNumber;
		this.tdCelebration = tdCelebration;
	}
	
	public Integer getPlayerId() {
		return playerId;
	}
	
	public void setPlayerId(Integer playerId) {
		this.playerId = playerId;
	}
	
	public String getPlayerPosition() {
		return playerPosition;
	}

	public void setPlayerPosition(String playerPosition) {
		this.playerPosition = playerPosition;
	}

	public Integer getJerseyNumber() {
		return jerseyNumber;
	}

	public void setJerseyNumber(Integer jerseyNumber) {
		this.jerseyNumber = jerseyNumber;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getPlayerTeam() {
		return playerTeam;
	}

	public void setPlayerTeam(String playerTeam) {
		this.playerTeam = playerTeam;
	}

	public String getTdCelebration() {
		return tdCelebration;
	}

	public void setTdCelebration(String tdCelebration) {
		this.tdCelebration = tdCelebration;
	}

	@Override
	public String toString() {
		return "Player [Name = " + playerName + ", Jersey Number = " + jerseyNumber + ", Position = " + playerPosition + ", Touchdown Celebration = " + tdCelebration + "]";
	}
}

