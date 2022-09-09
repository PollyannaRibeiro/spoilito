import sqlite3
import pandas as pd

#
# cursor.execute("INSERT INTO imdb_join_unconsetingMedia "
#                "SELECT imdb.imdb_id, unconsentingMedia.uncMedia_id "
#                "FROM imdb, unconsentingMedia "
#                "WHERE unconsentingMedia.title = imdb.title "
#                "GROUP BY imdb.imdb_id, unconsentingMedia.uncMedia_id ; ")
#
# cursor.execute("SELECT unconsentingMedia.uncMedia_id, unconsentingMedia.title from unconsentingMedia")
#
#
# def dict_factory(cursor, row):
#     d = {}
#     for idx, col in enumerate(cursor.description):
#         d[col[0]] = row[idx]
#     return d
#
# connection = sqlite3.connect('movies.db')
# connection.row_factory = dict_factory
# cursor = connection.cursor()
# cursor.execute("SELECT 1 as a FROM unconsentingMedia")
# print(cursor.fetchone()["a"])


connection = sqlite3.connect('movies.db')
connection.row_factory = sqlite3.Row
cursor = connection.cursor()
cursor.execute("SELECT uncMedia_id, title, yearOfRelease, type from unconsentingMedia; ")
uncMediaDictResult = [dict(row) for row in cursor.fetchall()]

cursor.execute("SELECT imdb_id, title, startYear, type FROM imdb where startYear > 1980; ")
imdbDictResult = [dict(row) for row in cursor.fetchall()]
# print(len(imdbDictResult))

for media in uncMediaDictResult:

    moderation = []
    filteringName = []
    toJointedDb = None

    # ======== filtering imdb by name ========
    for movie in imdbDictResult:
        if media['title'] == movie['title']:
            filteringName.append(movie)

    # ======== Is more than one with the same name? ========
    if len(filteringName) == 1:
        toJointedDb = [filteringName[0]['imdb_id'], media['uncMedia_id']]

    elif len(filteringName) > 1:
        filteringType = []

        # ======== filtering by type ========
        for i in range(len(filteringName)):
            if filteringName[i]['type'] == media['type']:
                filteringType.append(filteringName[i])

        # ======== Is more than one with the same name and type? ========
        if len(filteringType) == 1:
            toJointedDb = [filteringType[0]['imdb_id'], media['uncMedia_id']]

        elif len(filteringType) > 1:
            filteringYear = []

            for i in range(len(filteringType)):
                if filteringType[i]['startYear'] is not None and media['yearOfRelease'] is not None and filteringType[i]['startYear'] == media['yearOfRelease']:
                    filteringYear.append(filteringType[i])

            # ======== Is more than one with the same name, type and year? ========
            if len(filteringYear) == 1:
                toJointedDb = [filteringYear[0]['imdb_id'], media['uncMedia_id']]
            else:
                # ======== If it does, send it to moderation ========
                moderation.append([media, [x for x in filteringType]])

    if toJointedDb is not None:
        cursor.executemany("INSERT or IGNORE INTO imdbUnconsetingMediaJointed (imdb_id, uncMedia_id) VALUES (?, ?);", (toJointedDb,))

    if len(moderation) > 0:
        print(moderation)

connection.commit()
connection.close()
