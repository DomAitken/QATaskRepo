package com.example.spring.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.spring.domain.Players;
import com.example.spring.repo.PlayerRepo;

@Service
public class PlayerServiceDB implements PlayerService {
	
	private PlayerRepo repo;
	
	
	@Autowired
	public PlayerServiceDB(PlayerRepo repo) {
		super();
		this.repo = repo;
	}

	@Override
	public Players createPlayer(Players player) {
		Players created = this.repo.save(player); //INSERT INTO PLAYERS
		return created;
	}

	@Override
	public List<Players> getAllPlayers() {
		return this.repo.findAll(); // SELECT * FROM PLAYERS...
	}

	@Override
	public Players getPlayer(Integer id) {
		Optional<Players> found = this.repo.findById(id); // SELECT * FROM DINO... WHERE ID=
		return found.get();
	}
	
	@Override
	public List<Players> getAllPlayersByName(String playerName) {
		List<Players> found = this.repo.findByPlayerName(playerName);
		return found;
	}
	
	@Override
	public Players replacePlayer(Integer id, Players newPlayer) {
		Players existing = this.repo.findById(id).get();
		
		existing.setJerseyNumber(newPlayer.getJerseyNumber());
		existing.setPlayerName(newPlayer.getPlayerName());
		existing.setPlayerTeam(newPlayer.getPlayerTeam());
		existing.setTdCelebration(newPlayer.getTdCelebration());
		existing.setPlayerPosition(newPlayer.getPlayerPosition());
		
		Players updated = this.repo.save(existing);
		return updated;
	}

	@Override
	public void removePlayer(Integer id) {
		this.repo.deleteById(id); // DELETE FROM PLAYERS WHERE ID = ...

	}

}
