import sqlite3

connection = sqlite3.connect('movies.db')
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS imdb "
               "(imdb_id TEXT PRIMARY KEY, "
               "title TEXT not null, "
               "isAdult BOOLEAN, "
               "startYear INTEGER, "
               "endYear INTEGER, "
               "type TEXT,"
               "averageRating FLOAT(1),"
               "numVotes INTEGER )")


cursor.execute("CREATE TABLE IF NOT EXISTS imdbGenres "
               "(imdb_id TEXT, "
               "genre_id TEXT, "
               "FOREIGN KEY(imdb_id) REFERENCES imdb(imdb_id), "
               "FOREIGN KEY(genre_id) REFERENCES genres(genre_id), "
               "PRIMARY KEY(imdb_id, genre_id))")

cursor.execute("SELECT * from imdb")

connection.commit()
connection.close()