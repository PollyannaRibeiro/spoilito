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
            to_imdbGenres = [imdb_id, genre]
            cursor.executemany(
                "INSERT INTO imdbGenres (imdb_id, genre_name) VALUES (?, ?);", (to_imdbGenres,))

    # cursor.execute("SELECT sql FROM sqlite_master WHERE tbl_name = 'imdb' AND type = 'table'")

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

    # cursor.execute("SELECT * from imdb")
    # print(cursor.fetchall())
connection.commit()
connection.close()
