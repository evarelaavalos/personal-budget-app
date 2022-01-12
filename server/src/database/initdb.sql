-- Creating the database
CREATE DATABASE personal_budget_db;

-- Using the database
USE personal_budget_db;

-- Creating the tables
CREATE TABLE types (
    id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(64) NOT NULL
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    concept VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    amount DECIMAL(17,2) NOT NULL,
    type SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY FK_transactions_types (type)
        REFERENCES types(id)
);

-- Populate types
INSERT INTO types(name) VALUES ("Ingreso");
INSERT INTO types(name) VALUES ("Egreso");
