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