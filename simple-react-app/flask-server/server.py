# https://www.youtube.com/watch?v=7LNl2JlZKHA
# https://dev.to/dev_elie/connecting-a-react-frontend-to-a-flask-backend-h1o
import sqlite3
from flask import Flask, app, jsonify
from flask import request
from flask import g

app = Flask(__name__)
app.secret_key = "olaPopo"


@app.route("/movies")
def get_movies():
    args = request.args
    ent_type = args.get('type')
    genre = args.get('genres')
    trigger = args.get('triggers')
    all_data = get_db(ent_type, genre, trigger)
    return all_data


def get_db(type, genres, triggers):
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect('movies.db')
        cursor = db.cursor()

        if genres is None:
            genres_query = "1=1"
        else:
            genres_query = genres.split(",")
            genres_query = ",".join(["'%s'" % i for i in genres_query])
            genres_query = "imdb.imdb_id in (select imdb.imdb_id " \
                "from imdb, genres, jointedGenres " \
                "where imdb.imdb_id = jointedGenres.imdb_id and " \
                "genres.genre_id = jointedGenres.genre_id and " \
                "genres.genre_name in (%s)) " % genres_query

        if triggers is None:
            triggers_query = "1=1"
        else:
            triggers_filter = triggers.split(",")

            triggers_select = {
                "isAdult": "imdb.isAdult=0",
                "childAbuse": "unconsentingMedia.childAbuse=0",
                "sexualAssault": "unconsentingMedia.sexualAssault=0",
                "sexualHar": "unconsentingMedia.sexualHar=0"
            }

            triggers_query = " and ".join([triggers_select[i] for i in triggers_filter])

        cursor.execute("select imdb.title, imdb.averageRating, imdb.poster_path "
                       "from imdb, imdbUnconsetingMediaJointed, unconsentingMedia "
                       "where imdb.imdb_id = imdbUnconsetingMediaJointed.imdb_id "
                       "and unconsentingMedia.uncMedia_id = imdbUnconsetingMediaJointed.uncMedia_id "
                       "and imdb.type = '%s' "
                       "and %s "
                       "and %s" % (type, genres_query, triggers_query))

        all_data = cursor.fetchall()

    return all_data


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


if __name__=='__main__':
    app.run(debug=True)
