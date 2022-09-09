import sqlite3

connection = sqlite3.connect('movies.db')
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS imdbUnconsetingMediaJointed "
               "(imdb_id TEXT, "
               "uncMedia_id INTEGER, "
               "FOREIGN KEY(imdb_id) REFERENCES imdb(imdb_id), "
               "FOREIGN KEY(uncMedia_id) REFERENCES unconsentingMedia(uncMedia_id), "
               "PRIMARY KEY(imdb_id, uncMedia_id))")

cursor.execute("SELECT * from imdbUnconsetingMediaJointed")

connection.commit()
connection.close()