# https://www.youtube.com/watch?v=7LNl2JlZKHA
# https://dev.to/dev_elie/connecting-a-react-frontend-to-a-flask-backend-h1o
import sqlite3
from flask import Flask, app
from flask import g
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "olaPopo"

@app.route("/movies")
def index():
    data = get_db()
    return data

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect('movies.db')
        cursor = db.cursor()
        cursor.execute("select imdb.title, imdb.averageRating, imdb.poster_path "
                       "from imdb, imdbUnconsetingMediaJointed "
                       "where imdb.imdb_id = imdbUnconsetingMediaJointed.imdb_id "
                       "limit 100")
        all_data = cursor.fetchall()
        # all_data = [str(val[0]) for val in all_data]
    return all_data

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

if __name__=='__main__':
    app.run(debug=True)

# ===========================
# app = Flask(__name__)
#
# # API Router
# @app.route("/members")
# def members():
#     return {"members": ["Member1", "Member2", "Member3"]}
#
#
# if __name__ == "__main__":
#     app.run(debug=True)