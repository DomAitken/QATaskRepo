package com.example.spring.service;

import java.util.ArrayList;
import java.util.List;
import com.example.spring.domain.Players;


public class PlayerServiceList implements PlayerService {

	private List<Players> players = new ArrayList<>();

	@Override
	public Players createPlayer(Players player) {
		this.players.add(player);
		Players created = this.players.get(this.players.size() - 1);
		return created;
	}

	@Override
	public List<Players> getAllPlayers() {
		return this.players;
	}

	@Override
	public Players getPlayer(Integer id) {
		return this.players.get(id);
	}

	@Override
	public List<Players> getAllPlayersByName(String playerName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Players replacePlayer(Integer id, Players newPlayer) {
		Players found = this.players.set(id, newPlayer);

		return found;
	}

	@Override
	public void removePlayer(Integer id) {
		this.players.remove(id.intValue());
	}
	
}