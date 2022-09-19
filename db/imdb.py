import sqlite3
import pandas as pd

connection = sqlite3.connect('movies.db')
cursor = connection.cursor()

with open('data/imdb/title.basics.tsv', 'r') as imdbTitleBasicsList:
    dr = pd.read_table(imdbTitleBasicsList, low_memory=False)

    for i in range(len(dr)):
        imdb_id = str(dr["tconst"][i])
        imdb_title = str(dr["primaryTitle"][i])
        imdb_isAdult = None
        imdb_startYear = None
        imdb_endYear = None
        imdb_type = str(dr["titleType"][i])
        imdb_averageRating = None


        # =====  # GET ONLY MOVIES OR TV SHOW TYPE =====
        # IMDB TITLE TYPES =  {'short', 'tvMovie', 'tvSeries', 'tvPilot', 'tvShort', 'tvSpecial', 'tvMiniSeries', 'video', 'movie', 'videoGame', 'tvEpisode'}

        if imdb_type == 'movie' or imdb_type == 'tvMovie' or imdb_type == 'tvSeries' or imdb_type == 'tvMiniSeries':

            if imdb_type == 'movie' or imdb_type == 'tvMovie':
                imdb_type == 'movie'
            elif imdb_type == 'tvSeries' or imdb_type == 'tvMiniSeries':
                imdb_type = 'TV show'

            # ===== GET STARTYEAR =====
            if dr["startYear"][i] != "\\N":
                imdb_startYear = int(dr["startYear"][i])

            # ===== GET ENDYEAR =====
            if dr["endYear"][i] != "\\N":
                imdb_endYear = int(dr["endYear"][i])

            # ===== GET ISADULT =====

            if str(dr["isAdult"][i]) == '0':
                imdb_isAdult = False
            else:
                imdb_isAdult = True

            to_imdb = [imdb_id, imdb_title, imdb_isAdult, imdb_startYear, imdb_endYear, imdb_type, imdb_averageRating]
            cursor.executemany(
                "INSERT INTO imdb (imdb_id, title, isAdult, startYear, endYear, type, averageRating) VALUES (?, ?, ?, ?, ?, ?, ?);", (to_imdb,))

        genres = (str(dr["genres"][i])).split(",")
        for genre in genres:

            if genre is None:
                continue

            genre = genre.lower()

            if genre == 'Sci-Fi':
                genre = 'scifi'
            elif genre == 'History':
                genre = 'historical'
            elif genre == 'anime':
                genre = 'animation'
            elif genre == 'Crime':
                genre = 'thriller'


            genre_id_row = cursor.execute("""SELECT genre_id FROM genres WHERE genre_name='%s'""" % (genre))
            genre_id_row = genre_id_row.fetchone()
            if genre_id_row is None:
                continue
            else:
                genre_id = genre_id_row[0]
                to_imdbGenres = [imdb_id, genre_id]
                cursor.executemany(
                    "INSERT or IGNORE INTO imdbGenres (imdb_id, genre_id) VALUES (?, ?);", (to_imdbGenres, ))
                print(to_imdbGenres)

with open('data/imdb/title.ratings.tsv', 'r') as imdbTitleRatings:
    dr2 = pd.read_table(imdbTitleRatings, low_memory=False)

    for i in range(len(dr2)):
        imdb_id = str(dr2["tconst"][i])
        imdb_rating = float(dr2["averageRating"][i])
        imdb_numVotes = int(dr2["numVotes"][i])

        to_rating = [imdb_rating, imdb_numVotes, imdb_id]
        cursor.executemany(
                "UPDATE imdb "
                "SET averageRating = ?, numVotes = ? "
                "WHERE imdb_id = ?;", (to_rating,))

connection.commit()
connection.close()
