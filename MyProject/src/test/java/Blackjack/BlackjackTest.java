package Blackjack;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

public class BlackjackTest {
	
	private int dealer;
	private int player;
	private int play;


	public void BlackjackCons(int dealer, int player, int play) {
		this.dealer = dealer;
		this.player = player;
		this.play = play;
		
	}

	public int getDealer() {
		return dealer;
	}

	public void setDealer(int dealer) {
		this.dealer = dealer;
	}

	public int getPlayer() {
		return player;
	}

	public void setPlayer(int player) {
		this.player = player;
	}
	
	public int getPlay() {
		return play;
	}
	
	public void setPlay(int play) {
		this.play = play;
	}


	@Test
	public void playerWinsTest() {
		int expectedNum = 21;
		int result = Blackjack.play(5, 21);
		assertEquals(expectedNum, result);
	}
	
	@Test
	public void dealerWinsTest() {
		int expectedNum = 21;
		int result = Blackjack.play(21, 5);
		assertEquals(expectedNum, result);
	}
	
	@Test
	public void playerBust() {
		int expectedNum > 21;
		int result = Blackjack.play(5, 21);
		assertEquals(expectedNum, result);
	}
	
	@Test
	public void dealerBust() {
		int expectedNum > 21;
		int result = Blackjack.play(21, 5);
		assertEquals(expectedNum, result);
	}
}