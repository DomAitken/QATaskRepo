USE ims;

CREATE TABLE customers(
  customerId long NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  surname varchar(50) NOT NULL,
  PRIMARY KEY (customerId)
);

CREATE TABLE items(
  itemId long NOT NULL AUTO_INCREMENT,
  itemName varchar(80) NOT NULL,
  PRIMARY KEY (itemId)
);

CREATE TABLE order_items(
	orderId long NOT NULL AUTO_INCREMENT,
    itemId long NOT NULL,
    customerId long NOT NULL,
    PRIMARY KEY(orderId),
    FOREIGN KEY(itemId) REFERENCES items(itemId),
    FOREIGN KEY(customerId) REFERENCES customers(customer_id)
);

