package com.example.spring.repo;

import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.spring.domain.Players;

@Repository
public interface PlayerRepo extends JpaRepository<Players, Integer> {
	//Spring will auto-generate all CRUD functionality.
	List<Players> findByPlayerId(Integer playerId);
	List<Players> findByPlayerName(String playerName);
	List<Players> findByJerseyNumber(Integer jerseyNumber);
	List<Players> findByPlayerTeam(String playerTeam);
	List<Players> findByTdCelebration(String tdCelebration);
	List<Players> findByPlayerPosition(String playerPosition);
	
}
