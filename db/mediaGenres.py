# ===================== MEDIA GENRES AND MEDIA TYPE (esperar criar as tables do IMDB e do DIes the dog Die)
# cursor.execute("CREATE TABLE IF NOT EXISTS mediaGenres "
#                "                                (media_id INTEGER, "
#                "                                 genre_id INTEGER"
#                "                                 FOREIGN KEY (media_id) references unconsentingMedia(media_id)"
#                "                                 FOREIGN KEY (genre_id) references genres(genre_id)"
#                "                                 PRIMARY KEY (media_id, genre_id))")
#
# cursor.execute("CREATE TABLE IF NOT EXISTS mediaType "
#                "                                 (media_id INTEGER"
#                "                                  type_id INTEGER"
#                "                                  FOREIGN KEY (media_id) references unconsentingMedia(media_id) "
#                "                                  FOREIGN KEY (type_id) references types(type_id)"
#                "                                  PRIMARY KEY (media_id, type_id)")



# to_db = [(i["media_id"], i["title"], i["cleanName"], i["cleanNameArticles"], i["altName"],
    #           i["type_name"], i["comment"], i["author"],  i["timeInFilm"], i["posterUrl"],
    #           i["youTubeUrl"], i["yearOfRelease"], i["noRape"], i["rapeMenDisImp"],
    #           i["sexHarOnScrn"], i["sexAdultTeen"], i["childSexAbuse"], i["incest"],
    #           i["attemptedRape"], i["rapeOffScrn"], i["rapeOnScreen"], i["action"],
    #           i["adventure"], i["animation"], i["anime"], i["anthology"], i["art"], i["biography"],
    #           i["childrens"], i["comedy"], i["contemporary"], i["cooking"], i["crime"], i["cultfilm"],
    #           i["documentary"], i["drama"], i["dystopian"], i["fantasy"], i["guide"], i["historical"],
    #           i["horror"], i["lgbt"], i["literaryfiction"], i["memoir"], i["musical"],
    #           i["mystery"], i["nonfiction"], i["paranormal"], i["poetry"], i["reference"],
    #           i["romance"], i["scifi"], i["selfhelp"], i["thriller"], i["travel"],
    #           i["western"], i["war"], i["youngadult"], i["createdAt"], i["updatedAt"]) for i in dr]