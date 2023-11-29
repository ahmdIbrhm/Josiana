CREATE TYPE type AS ENUM ('citizen', 'NGO', 'PA');

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    type TYPE
);