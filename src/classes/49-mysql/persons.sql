-- Create table
CREATE TABLE person (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR (60),
  lastame VARCHAR (60) NOT NULL,
  document INT UNSIGNED NOT NULL
);
-- Add column
ALTER TABLE person
ADD
  born_date date NOT NULL;
-- Drop column
ALTER TABLE person DROP fecha_nac;
-- Modify column
ALTER TABLE person
MODIFY
  COLUMN document varchar(10) NOT NULL;