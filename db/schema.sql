-- create burgers_db



DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;        

-- use burgers_db

USE burgers_db;

-- create table called burgers
    -- fields of burgers:
        -- id (auto incrementing int) - primary key
        -- burger name (string)
        -- devoured (boolean)

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR (100) NOT NULL,
  devoured boolean DEFAULT false,
  PRIMARY KEY (id) 
);

