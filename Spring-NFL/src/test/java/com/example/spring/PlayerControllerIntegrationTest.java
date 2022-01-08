package com.example.spring;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.spring.domain.Players;

// boots the entire context - random port to avoid collisions (two apps running on the same)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc // sets up the MockMVC object
@Sql(scripts = { "classpath:player-schema.sql",
		"classpath:player-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
public class PlayerControllerIntegrationTest {

	@Autowired // pulls the MockMVC object from the context
	private MockMvc mvc; // class that perform the request (kind of a postman equivalent)

	@Autowired
	private ObjectMapper mapper; // java <-> JSON converter that Spring uses


	@Test
	void testCreate() throws Exception {
		Players testPlayer = new Players("Derrick Henry", "Running Back", "New Orleans Saints", 22, "Rockabye");
		String testPlayerAsJSON = this.mapper.writeValueAsString(testPlayer);
		RequestBuilder req = post("/create").content(testPlayerAsJSON).contentType(MediaType.APPLICATION_JSON);
		
		Players testCreatedPlayer = new Players(2, "Derrick Henry", "Running Back", "New Orleans Saints", 22, "Rockabye");
		String testCreatedPlayerAsJSON = this.mapper.writeValueAsString(testCreatedPlayer);
		ResultMatcher checkStatus = status().isCreated(); // is status 201 - created
		ResultMatcher checkBody = content().json(testCreatedPlayerAsJSON); // does the body match my testCreatedDinoAsJSON

		// sends request - checks the status - checks the body
		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void testGetAll() throws Exception {
		Players testPlayer = new Players(1, "Alvin Kamara", "Running Back", "New Orleans Saints", 41, "Rockabye");
		String testPlayerAsJSON = this.mapper.writeValueAsString(List.of(testPlayer));
		RequestBuilder req = get("/getAll").contentType(MediaType.APPLICATION_JSON);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testPlayerAsJSON);

		// sends request - checks the status - checks the body
		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void testReplace() throws Exception {
		Players testPlayer = new Players(1, "Alvin Kamara", "Wide Receiver", "New Orleans Saints", 41, "Rockabye");
		String testPlayerAsJSON = this.mapper.writeValueAsString(testPlayer);
		RequestBuilder req = put("/replace/" + testPlayer.getPlayerId()).contentType(MediaType.APPLICATION_JSON).content(testPlayerAsJSON);

		ResultMatcher checkStatus = status().isAccepted();
		ResultMatcher checkBody = content().json(testPlayerAsJSON);

		// sends request - checks the status - checks the body
		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void testDelete() throws Exception {
		this.mvc.perform(delete("/remove/1")).andExpect(status().isNoContent());
	}
	
	@Test
	void testGetById() throws Exception {
		Players testPlayer = new Players(1, "Alvin Kamara", "Running Back", "New Orleans Saints", 41, "Rockabye");
		String testPlayerAsJSON = this.mapper.writeValueAsString(testPlayer);
		RequestBuilder req = get("/get/" + testPlayer.getPlayerId()).contentType(MediaType.APPLICATION_JSON).content(testPlayerAsJSON);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testPlayerAsJSON);

		// sends request - checks the status - checks the body
		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void testGetAllPlayersByName() throws Exception {
		Players testPlayer = new Players(1, "Alvin Kamara", "Running Back", "New Orleans Saints", 41, "Rockabye");
		String testPlayerAsJSON = this.mapper.writeValueAsString(List.of(testPlayer));
		RequestBuilder req = get("/getByName/" + testPlayer.getPlayerName()).contentType(MediaType.APPLICATION_JSON);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testPlayerAsJSON);

		// sends request - checks the status - checks the body
		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}
}
