ALTER TABLE construction RENAME TO constructions;

ALTER TABLE constructions
ALTER COLUMN accepted TYPE varchar(100);

ALTER TABLE constructions
RENAME column accepted TO decision;
