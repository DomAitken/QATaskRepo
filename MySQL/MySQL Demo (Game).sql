CREATE database game;
USE game;

CREATE TABLE customers(
  customer_id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  email varchar(80) NOT NULL,
  house_number int NOT NULL,
  postcode varchar(8) NOT NULL,
  PRIMARY KEY (customer_id)
);
CREATE TABLE products(
  product_id int NOT NULL AUTO_INCREMENT,
  title varchar(80) NOT NULL,
  price decimal(6,2) NOT NULL,
  stock int NOT NULL,
  PRIMARY KEY (product_id)
);
CREATE TABLE orders(
  order_id int NOT NULL AUTO_INCREMENT,
  customer_id int NOT NULL,
  product_id int NOT NULL,
  date_placed date NOT NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT into customers(name, email, house_number, postcode)
VALUES ('John', 'John@email.com', '18', 'NE1 TGF');

INSERT into customers(name, email, house_number, postcode)
VALUES ('Jim', 'Jim@email.com', '19', 'SK1 0MF');

INSERT into customers(name, email, house_number, postcode)
VALUES ('Jimothy', 'Jimothy@email.com', '51', 'M1 TGF');

INSERT into customers(name, email, house_number, postcode)
VALUES ('Jack', 'Jack@email.com', '178', 'NE1 0NQ');

INSERT into customers(name, email, house_number, postcode)
VALUES ('Dom', 'Dom@email.com', '18', 'NE1 4ST');

INSERT into products(title, price, stock)
VALUES ('Madden 22', '59.99', '50' );

INSERT into products(title, price, stock)
VALUES ('FIFA 22', '49.99', '10' );

INSERT into products(title, price, stock)
VALUES ('NBA 2K22', '59.99', '12' );

INSERT into products(title, price, stock)
VALUES ('Call Of Duty', '59.99', '5' );

INSERT into products(title, price, stock)
VALUES ('Forza 7', '39.99', '10' );

INSERT INTO orders(customer_id, product_id, date_placed)
VALUES(1, 1, '2019-07-28');

INSERT INTO orders(customer_id, product_id, date_placed)
VALUES(2, 2, '2019-08-05');

INSERT INTO orders(customer_id, product_id, date_placed)
VALUES(3, 3, '2020-07-29');

INSERT INTO orders(customer_id, product_id, date_placed)
VALUES(4, 4, '2020-08-06');

INSERT INTO orders(customer_id, product_id, date_placed)
VALUES(5, 5, '2022-07-29');
    



