package com.example.spring.service;

import java.util.List;
import com.example.spring.domain.Players;

public interface PlayerService {
	Players createPlayer(Players player);
	
	List<Players> getAllPlayers();
	
	List<Players> getAllPlayersByName(String playerName);
	
	Players getPlayer(Integer playerId);
	
	Players replacePlayer(Integer playerid, Players newPlayer);
	
	void removePlayer(Integer playerId);
}


