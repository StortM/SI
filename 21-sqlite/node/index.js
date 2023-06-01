import db from "./database/connection.js";

db.exec("CREATE TABLE IF NOT EXISTS movies (title, year, score)");

db.run("INSERT INTO movies (title, year, score) VALUES (?, ?, ?)", [
  "The Matrix",
  1999,
  8.7,
]);

db.run("INSERT INTO movies (title, year, score) VALUES (?, ?, ?)", [
  "The Matrix Reloaded",
  2003,
  7.2,
]);

db.run("INSERT INTO movies (title, year, score) VALUES (?, ?, ?)", [
  "The Matrix Revolutions",
  2003,
  7.2,
]);

// db.run("DELETE FROM movies WHERE id = 2");

// db.run("UPDATE movies SET score = 9.9 WHERE id = 3");

const movies = await db.all("SELECT * FROM movies");
console.log(movies);

// remove all movies
// db.run("DELETE FROM movies");