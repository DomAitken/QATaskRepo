package com.example.spring.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.domain.Players;
import com.example.spring.service.PlayerService;

@RestController // tells Spring this is a controller
				// REST compliant
public class PlayerController {
	
	private PlayerService service;
	
	@Autowired
	
	public PlayerController(PlayerService service) {
		super();
		this.service = service;
	}

	@PostMapping("/create")
	public ResponseEntity<Players> createPlayer(@RequestBody Players player) {
		Players created = this.service.createPlayer(player);
		ResponseEntity<Players> response = new ResponseEntity<Players>(created, HttpStatus.CREATED);
		return response;
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Players>> getAllPlayers() {
		return ResponseEntity.ok(this.service.getAllPlayers());
	}

	@GetMapping("/get/{playerId}")
	public Players getPlayer(@PathVariable Integer playerId) {
		return this.service.getPlayer(playerId);
	}
	
	@GetMapping("/getByName/{playerName}")
	public ResponseEntity<List<Players>> getPlayerByType(@PathVariable String playerName) {
		List<Players> found = this.service.getAllPlayersByName(playerName);
		return ResponseEntity.ok(found);
	}

	@PutMapping("/replace/{playerId}")
	public ResponseEntity<Players> replacePlayer(@PathVariable Integer playerId, @RequestBody Players newPlayer) {
		Players body = this.service.replacePlayer(playerId, newPlayer);

		ResponseEntity<Players> response = new ResponseEntity<Players>(body, HttpStatus.ACCEPTED);
		return response;
	}

	@DeleteMapping("/remove/{playerId}")
	public ResponseEntity<?> removePlayer(@PathVariable Integer playerId) {
		this.service.removePlayer(playerId);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}