USE sakila;
SHOW Tables;
SELECT title FROM film_list WHERE title = 'Academy Dinosaur' ;

#Task 1
SELECT*FROM actor;

#Task 2
SELECT last_name FROM actor WHERE first_name = 'John';

#Task 3
SELECT first_name, last_name FROM actor WHERE last_name = 'Neeson';

#Task 4
SELECT first_name, last_name FROM actor WHERE actor_id MOD 10 = 0;

#Task 5
SELECT description FROM film_text WHERE film_id = '100';

#Task 6
SELECT title FROM film_list WHERE rating = 'R';

#Task 7
SELECT title FROM film_list WHERE rating != 'R';

#Task 8
SELECT length FROM film ORDER BY length ASC LIMIT 10;

#Task 9
SELECT title FROM film WHERE length = MAX(length);

#Task 10
SELECT title FROM film WHERE special_features LIKE '%Deleted Scenes';

#Task 11
SELECT last_name, COUNT(last_name) FROM actor
GROUP BY last_name HAVING COUNT(last_name) = 1 ORDER BY last_name DESC;

#Task 12
SELECT last_name, COUNT(last_name) FROM actor
GROUP BY last_name HAVING COUNT(last_name) ORDER BY COUNT(last_name) DESC;

#Task 13
SELECT actor_id, COUNT(actor_id) FROM film_actor
GROUP BY actor_id HAVING COUNT(actor_id) ORDER BY COUNT(actor_id) DESC;
 
#Task 14
SELECT*FROM rental;
SELECT*FROM inventory;
SELECT*FROM film_list;
SELECT FID FROM film_list WHERE FID ='1';

#Task 15
SELECT AVG(length) FROM film;

#Task 16
SELECT category, AVG(length) FROM film_list
GROUP BY category HAVING AVG(length) ORDER BY AVG(length) DESC;

#Task 17
SELECT title, description FROM film_text WHERE description LIKE '%robot' or '%Robot' or '%Robots' or '%robots' or '%robotic' or '%Robotic' or '%machine' or '%Machine';

#Task 18
SELECT title, release_year FROM film WHERE release_year = '2010';

#Task 19
SELECT title FROM film_list WHERE category = 'Horror';

#Task 20
SELECT name FROM staff_list WHERE ID = '2';

#Task 21
SELECT film_info FROM actor_info WHERE first_name = 'Fred' AND last_name = 'Costner';

#Task 22
SELECT country_id FROM country ORDER BY country_id DESC LIMIT 1;

#Task 23
SELECT name FROM language ORDER BY name DESC;

#Task 24
SELECT first_name, last_name FROM actor WHERE last_name LIKE '%son' ORDER BY first_name ASC;

#Task 25
SELECT category, COUNT(category) FROM film_list
GROUP BY category ORDER BY COUNT(category) ASC LIMIT 1;