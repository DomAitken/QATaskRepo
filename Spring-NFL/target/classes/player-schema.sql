DROP TABLE IF EXISTS `Players` CASCADE;

CREATE TABLE `Players` (
	`player_id` INTEGER PRIMARY KEY AUTO_INCREMENT,
	`jersey_number` INTEGER NOT NULL,
	`player_name` VARCHAR(255) NOT NULL, 
	`player_position` VARCHAR(255) NOT NULL, 
	`player_team` VARCHAR(255) NOT NULL,
	`td_celebration` VARCHAR(255) NOT NULL
);