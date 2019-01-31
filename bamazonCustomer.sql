    CREATE DATABASE bamazon_db;
	USE bamazon_db;
	CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50),
    price DECIMAL(10,2) NULL,
    stock_quantity INTEGER NULL,
    PRIMARY KEY (item_id)
    );
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ( "stiletos", "shoes", 100, 250);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tshirt", "Men", 25, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pants", "Women", 35, 550);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sunglasses", "accessories", 15, 700 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cookies", "candy", 10, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bedsheet", "home", 60, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("computer", "electronics", 1200, 800);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE  ("bike", "home goods", 15, 1000 );