import sqlite3

connection = sqlite3.connect('movies.db')
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS types (type_id INTEGER PRIMARY KEY, type_name TEXT)")

types = ["movie", "TV show"]


# types = [(i['col1'], i['col2']) for i in dr]

for type_name in types:
    cursor.execute("INSERT into types (type_name) values (?)", [type_name])

cursor.execute("SELECT * from types")

print(cursor.fetchall())
connection.commit()
connection.close()