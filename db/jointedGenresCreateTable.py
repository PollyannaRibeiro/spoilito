import sqlite3

connection = sqlite3.connect('movies.db')
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS jointedGenres "
               "(imdb_id TEXT,"
               "uncMedia_id INTEGER, "
               "genre_id INTEGER, "
               "FOREIGN KEY(imdb_id) REFERENCES imdb(imdb_id), "
               "FOREIGN KEY(uncMedia_id) REFERENCES unconsentingMedia(uncMedia_id),"
               "FOREIGN KEY(genre_id) REFERENCES genres(genre_id),"
               "PRIMARY KEY(imdb_id, uncMedia_id, genre_id))")


cursor.execute("INSERT or IGNORE INTO jointedGenres "
               "SELECT imdbUnconsetingMediaJointed.imdb_id, imdbUnconsetingMediaJointed.uncMedia_id, imdbGenres.genre_id "
               "FROM imdbUnconsetingMediaJointed, imdbGenres "
               "WHERE imdbGenres.imdb_id=imdbUnconsetingMediaJointed.imdb_id")
cursor.fetchall()

cursor.execute("INSERT or IGNORE INTO jointedGenres "
               "SELECT imdbUnconsetingMediaJointed.imdb_id, imdbUnconsetingMediaJointed.uncMedia_id, uncMediaGenres.genre_id "
               "FROM imdbUnconsetingMediaJointed, uncMediaGenres "
               "WHERE uncMediaGenres.uncMedia_id = imdbUnconsetingMediaJointed.uncMedia_id")
cursor.fetchall()

connection.commit()
connection.close()