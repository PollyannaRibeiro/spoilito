import sqlite3

connection = sqlite3.connect('movies.db')
cursor = connection.cursor()

# cursor.execute("DROP TABLE unconsentingMedia")
# cursor.execute("DROP TABLE uncMediaGenres")
# cursor.execute("DROP TABLE genres")
# cursor.execute("DROP TABLE types")
# cursor.execute("DROP TABLE imdb")
# cursor.execute("DROP TABLE imdbGenres")
cursor.execute("DROP TABLE imdb_join_unconsetingMedia")


connection.commit()
connection.close()