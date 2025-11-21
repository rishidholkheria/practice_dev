Fresh Dataset for practice

USE MASTER

CREATE DATABASE movies_db


CREATE TABLE movies (
    movie_id INT PRIMARY KEY,
    title VARCHAR(100),
    genre VARCHAR(50),
    release_year INT,
    rating DECIMAL(3,1),
    platform VARCHAR(50),
    duration_min INT
);

INSERT INTO movies (movie_id, title, genre, release_year, rating, platform, duration_min) VALUES
(1, 'Inception', 'Sci-Fi', 2010, 8.8, 'Netflix', 148),
(2, 'Interstellar', 'Sci-Fi', 2014, 8.6, 'Amazon', 169),
(3, 'The Dark Knight', 'Action', 2008, 9.0, 'Netflix', 152),
(4, 'Parasite', 'Thriller', 2019, 8.6, 'Hotstar', 132),
(5, 'La La Land', 'Musical', 2016, 8.0, 'Amazon', 128),
(6, 'Coco', 'Animation', 2017, 8.4, 'Disney+', 105),
(7, 'Spirited Away', 'Animation', 2001, 8.6, 'Netflix', 125),
(8, 'Whiplash', 'Drama', 2014, 8.5, 'SonyLiv', 107),
(9, 'Avengers: Endgame', 'Action', 2019, 8.4, 'Disney+', 181),
(10, 'Joker', 'Thriller', 2019, 8.4, 'Amazon', 122);


-- 1. List all movies available on Netflix.

SELECT * 
FROM movies
WHERE platform = 'Netflix';


-- 2. Movies released after 2015

SELECT title, release_year
FROM movies
WHERE release_year > 2015;

-- 3. Title contains "the"

SELECT title
FROM movies
WHERE title LIKE '%the%';

-- 4. Distinct genres
SELECT DISTINCT genre
FROM movies;

-- 5. Top 5 longest movies
SELECT title, duration_min
FROM movies
ORDER BY duration_min DESC

SELECT TOP(5) title, duration_min
FROM movies
ORDER BY duration_min DESC

-- 6. Count movies per genre
SELECT genre, COUNT(*) AS total_movies
FROM movies
GROUP BY genre;

-- 7. Genres with more than 1 movie
SELECT genre, COUNT(*) AS movie_count
FROM movies
GROUP BY genre
HAVING COUNT(*) > 1;


-- Movies with rating between 8.5 and 9.0
SELECT title, rating
FROM movies
WHERE rating BETWEEN 8.5 AND 9.0;

-- Platforms starting with ‘A’
SELECT title, platform
FROM movies
WHERE platform LIKE 'A%';


SELECT * FROM movies

-- Insert a new movie
INSERT INTO movies ( movie_id, title, genre, release_year, rating, platform, duration_min)
VALUES (11,'Inside Out', 'Animation', 2015, 8.2, 'Disney+', 95);


DELETE FROM movies WHERE movie_id = 11

-- IDENTITY(1,1)


-- Update rating
UPDATE movies
SET rating = 8.2
WHERE title = 'La La Land';


-- Delete movies with rating < 8.0
DELETE FROM movies
WHERE rating < 8.0;







What Are Joins in SQL?

A JOIN allows you to pull data from two or more tables based on a related column between them.

Simple definition : Joins combine rows from different tables using a common key.



Why Do We Use Joins?

Because in a properly designed database:
Data is stored in multiple tables, not one big table
This avoids duplication (normalization)
Each table represents one entity (Movies, Platforms, Directors, etc.)
To view complete information, we must join the tables.

Example:

One table has movies
Another table has directors
Another table has platforms`


A JOIN lets us combine:
Movie title + director + platform
in a single query.