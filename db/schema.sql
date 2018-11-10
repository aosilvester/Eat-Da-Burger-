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
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR (100) NOT NULL,
  devoured boolean DEFAULT false,
  createdAt TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY (id) 
);

