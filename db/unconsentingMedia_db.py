import sqlite3
import csv

connection = sqlite3.connect('movies.db')
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS unconsentingMedia "
               "(uncMedia_id INTEGER PRIMARY KEY, "
               "title TEXT not null, "
               "sexualAssault BOOLEAN, "
               "sexualHar BOOLEAN,  "
               "childAbuse BOOLEAN, "
               "yearOfRelease INTEGER, "
               "type TEXT, "
               "poster_path TEXT)")


cursor.execute("CREATE TABLE IF NOT EXISTS uncMediaGenres (uncMedia_id INTEGER, genre_id INTEGER, "
               "FOREIGN KEY(uncMedia_id) REFERENCES unconsentingMedia(uncMedia_id), "
               "FOREIGN KEY(genre_id) REFERENCES genres(genre_id), "
               "PRIMARY KEY(uncMedia_id, genre_id))")


with open('data/unconsentingMedia/list.csv', 'r') as uncList:
    dr = csv.DictReader(uncList)

    for i in dr:

        myList = [i["id"], i["name"], i["cleanName"], i["cleanNameArticles"], i["altName"],
                  i["itemType"], i["comment"], i["author"], i["timeInFilm"], i["posterUrl"],
                  i["youTubeUrl"], i["yearOfRelease"], i["noRape"], i["rapeMenDisImp"],
                  i["sexHarOnScrn"], i["sexAdultTeen"], i["childSexAbuse"], i["incest"],
                  i["attemptedRape"], i["rapeOffScrn"], i["rapeOnScreen"], i["action"],
                  i["adventure"], i["animation"], i["anime"], i["anthology"], i["art"], i["biography"],
                  i["childrens"], i["comedy"], i["contemporary"], i["cooking"], i["crime"], i["cultfilm"],
                  i["documentary"], i["drama"], i["dystopian"], i["fantasy"], i["guide"], i["historcal"],
                  i["horror"], i["lgbt"], i["literaryfiction"], i["memoir"], i["musical"],
                  i["mystery"], i["nonfiction"], i["paranormal"], i["poetry"], i["reference"],
                  i["romance"], i["scifi"], i["selfhelp"], i["thriller"], i["travel"],
                  i["western"], i["war"], i["youngadult"], i["createdAt"], i["updatedAt"]]

        # print(myList)
        media_id = myList[0]
        title = myList[1]
        sexualHar = None
        sexualAssault = None
        childAbuse = None

        # GET SEXUAL HAR AND CHILD ABUSE
        if myList[14] == "true":
            sexualHar = True
        else:
            sexualHar = False

        if myList[16] == "true":
            childAbuse = True
        else:
            childAbuse = False

        yearOfRelease = myList[11]
        type_name = myList[5]
        poster_path = myList[9] if "http" in myList[9] else "https://www.unconsentingmedia.org/content/"+myList[9]
        genre_names = []

        genres_options = ["action", "adventure", "animation", "anime", "anthology", "art", "biography", "childrens",
                          "comedy", "contemporary", "cooking", "crime", "cultfilm", "documentary", "drama",
                          "dystopian", "fantasy", "guide", "historical", "horror", "lgbt", "literaryfiction",
                          "memoir", "musical", "mystery", "nonfiction", "paranormal", "poetry", "reference",
                          "romance", "scifi", "selfhelp", "thriller", "travel", "western", "war", "youngadult"]

        # GET GENRES
        for x in range(21, len(myList) - 3):
            if myList[x] == "true":
                genre_names.append(genres_options[x - 21])

        # GET SEXUAL ASSAULT INFO

        if (myList[13] == "true" or myList[18] == "true" or myList[19] == "true" or myList[20] == "true"):
            sexualAssault = True
        else:
            sexualAssault = False

        # GET ONLY MOVIES OR TV SHOW INFO

        if type_name == "movie" or type_name == "TV show":
            to_unconsentingMedia_db = [media_id, title, sexualAssault, sexualHar, childAbuse, yearOfRelease, type_name, poster_path]

            cursor.executemany(
                "INSERT INTO unconsentingMedia (uncMedia_id, title, sexualAssault, sexualHar, childAbuse, yearOfRelease, type, poster_path) VALUES (?, ?, ?, ?, ?, ?, ?, ? );", (to_unconsentingMedia_db,))

            print(to_unconsentingMedia_db)

            for genre in genre_names:

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
                    print("None")
                    continue
                else:
                    genre_id = genre_id_row[0]
                    to_mediaGenres_db = [media_id, genre_id]
                    cursor.executemany(
                        "INSERT or IGNORE INTO uncMediaGenres (uncMedia_id, genre_id) VALUES (?, ?);", (to_mediaGenres_db, ))
                    print(to_mediaGenres_db)

connection.commit()
connection.close()
