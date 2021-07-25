DROP DATABASE IF EXISTS retro_games;
CREATE DATABASE retro_games;

\c retro_games;



CREATE TABLE games(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    console TEXT NOT NULL,
    price INT NOT NULL,
    release_date INT NOT NULL,
    favorites BOOLEAN NOT NULL DEFAULT FALSE,
    box_image TEXT NOT NULL
);

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    reviewer TEXT NOT NULL,
    content TEXT NOT NULL,
    rating NUMERIC NOT NULL, CHECK (rating >=0 AND rating <= 5),
    game_id INT REFERENCES games (id) 
        ON DELETE CASCADE 
);