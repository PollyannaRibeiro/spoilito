import sqlite3

connection = sqlite3.connect('movies.db')
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS genres (genre_id INTEGER PRIMARY KEY, genre_name TEXT)")

genres = ["action", "adventure", "adult", "animation", "biography", "comedy", "cultfilm", "documentary",
          "drama", "fantasy", "family", "film-noir", "historical", "horror", "lgbt+", "musical", "mystery",
          "romance", "scifi", "thriller", "western", "war", "No preference"]

for genre in genres:
    cursor.execute("INSERT into genres (genre_name) values (?)", [genre])

cursor.execute("SELECT * from genres")

print(cursor.fetchall())
connection.commit()
connection.close()





#
# triggers = ["sexual harassment", "rape or sexual assault", "child abuse", "sexual content"]
#
# triggers = ["a cat die", "a dog die", "a baby or a kid die", "alcoholism", "an animal die", "animals abuse",
#             "antisemitism", "a parent die", "autism specific abuse", "body dysmorphy", "child abuse", "clowns",
#             "domestic abuse", "drugs addiction", "flashing lights", "gambling addiction", "ghost", "gore",
#             "gun violence", "hate speech", "homophobia", "jumpscare", "mentally ill person is violent", "mutilation",
#             "nicotine addiction", "no triggers to worry about", "phobias", "possession", "racism", "sad ending",
#             "self harm", "sexual content", "sexual harassment", "snakes", "spider", "suicide", "transphobia", "torture",
#             "zombie"]
