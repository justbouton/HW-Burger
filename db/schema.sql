-- CREATE DATABASE
CREATE database burgersDB;

-- OPEN DATABASE
USE burgersDB;

-- CREATE TABLE id, burger_name, devoured, primary key (id)
CREATE table burger
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);