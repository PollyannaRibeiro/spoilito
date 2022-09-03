import sqlite3
import csv


connection = sqlite3.connect('movies.db')
cursor = connection.cursor()

# cursor.execute("UPDATE imdb SET type = 'Movie' WHERE type = 'tvMovie' ")
# print(cursor.fetchall())


# cursor.execute("SELECT unconsentingMedia.uncMedia_id, unconsentingMedia.title FROM unconsentingMedia INNER JOIN uncMediaGenres on unconsentingMedia.uncMedia_id = uncMediaGenres.uncMedia_id "
#                "WHERE genre_name=='action' ")

# cursor.execute("SELECT * from imdb_join_unconsetingMedia, imdb, unconsentingMedia "
#                "WHERE imdb.title = '13 Reasons Why' ;" )

# cursor.execute("SELECT * from imdb_join_unconsetingMedia")


# cursor.execute("SELECT imdb_join_unconsetingMedia.imdb_id, uncMedia_id FROM imdb_join_unconsetingMedia "
#                "WHERE imdb_join_unconsetingMedia.imdb_id = "
#                "        (SELECT imdb.imdb_id "
#                "         from imdb "
#                "         WHERE imdb.title = '13 Reasons Why') "
#                "AND imdb_join_unconsetingMedia.uncMedia_id = "
#                "        (SELECT unconsentingMedia.uncMedia_id "
#                "         from unconsentingMedia "
#                "         WHERE unconsentingMedia.title = '13 Reasons Why' ); ")
# print(cursor.fetchall())


# cursor.execute("SELECT * FROM imdb_join_unconsetingMedia "
#                "WHERE uncMedia_id = 837; ")
#
# print(cursor.fetchall())


# cursor.execute("SELECT * FROM imdb_join_unconsetingMedia "
#                "WHERE imdb.title = 'After Life';")
#
# print(cursor.fetchall())

# cursor.execute("SELECT * FROM imdb "
#                "WHERE imdb.title = 'After Life';")
#
# print(cursor.fetchall())
# #
# cursor.execute("SELECT * FROM unconsentingMedia "
#                "WHERE unconsentingMedia.title = 'After Life';")
# print(cursor.fetchall())


#
# cursor.execute("SELECT * from imdb "
#                "WHERE imdb.title = '13 Reasons Why';" )
# print(cursor.fetchall())
# #
# #
# cursor.execute("SELECT * from unconsentingMedia "
#                "WHERE unconsentingMedia.title = '13 Reasons Why';" )
#
# # cursor.execute("SELECT count(imdb_id) from imdb_join_unconsetingMedia; ")
# print(cursor.fetchall())


#
# cursor.execute("SELECT count(imdb_id) FROM imdb ; ")
# print(cursor.fetchall())
#
# cursor.execute("SELECT count(imdb_id) FROM imdbGenres ; ")
# print(cursor.fetchall())
#
# cursor.execute("SELECT count(uncMedia_id) FROM unconsentingMedia ; ")
# print(cursor.fetchall())
#
# cursor.execute("SELECT count(uncMedia_id) FROM uncMediaGenres ; ")
# print(cursor.fetchall())

# cursor.execute("SELECT sql FROM sqlite_master WHERE tbl_name = 'imdb' AND type = 'table'")

# cursor.execute("SELECT COUNT(*) from imdb ")
# print(cursor.fetchall())
# cursor.execute("SELECT * from imdbGenres")
# print(cursor.fetchall())
# cursor.execute("SELECT * FROM imdbGenres")
# cursor.execute("SELECT uncMedia_id FROM uncMediaGenres WHERE genre_name=='action' ")
# print(cursor.fetchall())

# with open('data/unconsentingMedia/list.csv', 'r') as uncList:
#     dr = csv.DictReader(uncList)
#     sum = 0
#     for i in dr:
#         sum+=1
#     print(sum)
#


cursor.execute("SELECT COUNT(*) from imdbUnconsetingMediaJointed ")
print(cursor.fetchall())
connection.commit()
connection.close()
