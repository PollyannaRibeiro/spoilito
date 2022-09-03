import sqlite3

connection = sqlite3.connect('test.db')
cursor = connection.cursor()

# cursor.execute("CREATE TABLE IF NOT EXISTS MODULE "
#                "(MOD_CODE TEXT PRIMARY KEY, "
#                "LEADER TEXT not null) ")
#
# cursor.execute("CREATE TABLE IF NOT EXISTS MOD_STUDENT "
#                "(MOD_CODE TEXT, "
#                "STUDENT TEXT not null, "
#                "FOREIGN KEY(MOD_CODE) REFERENCES MODULE(MOD_CODE), "
#                "PRIMARY KEY(MOD_CODE, STUDENT))")
#
# cursor.execute("CREATE TABLE IF NOT EXISTS CW "
#                "(MOD_CODE TEXT, "
#                "CW_NO INTEGER PRIMARY KEY, "
#                "MARK_OUT_OF INTEGER, "
#                "FOREIGN KEY(MOD_CODE) REFERENCES MODULE(MOD_CODE))")
#
# cursor.execute("CREATE TABLE IF NOT EXISTS CW_MARK "
#                "(MOD_CODE TEXT, "
#                "CW_NO INTEGER, "
#                "STUDENT TEXT, "
#                "DATE_SUBMIT DATETIME, "
#                "MARK INTEGER, "
#                "FOREIGN KEY(MOD_CODE) REFERENCES MODULE(MOD_CODE), "
#                "FOREIGN KEY(CW_NO) REFERENCES CW(CW_NO), "
#                "PRIMARY KEY(MOD_CODE, CW_NO, STUDENT, DATE_SUBMIT))")
# cursor.execute("SELECT * from CW_MARK")
#
# # Leader
# cursor.executemany(
#     "INSERT INTO MODULE (MOD_CODE, LEADER) VALUES (?, ?);",
#     (['perl', 'Lerry'],))
#
# cursor.executemany(
#     "INSERT INTO MODULE (MOD_CODE, LEADER) VALUES (?, ?);",
#     (['python', 'Bob'],))
#
# # Student
# cursor.executemany(
#     "INSERT INTO MOD_STUDENT (MOD_CODE, STUDENT) VALUES (?, ?);",
#     (['peal', 'John'],))
#
# cursor.executemany(
#     "INSERT INTO MOD_STUDENT (MOD_CODE, STUDENT) VALUES (?, ?);",
#     (['peal', 'Mark'],))
#
# cursor.executemany(
#     "INSERT INTO MOD_STUDENT (MOD_CODE, STUDENT) VALUES (?, ?);",
#     (['python', 'John'],))
#
# cursor.executemany(
#     "INSERT INTO MOD_STUDENT (MOD_CODE, STUDENT) VALUES (?, ?);",
#     (['python', 'Brian'],))
#
# # CW
#
# cursor.executemany(
#     "INSERT INTO CW (MOD_CODE, CW_NO, MARK_OUT_OF) VALUES (?, ?, ?);",
#     (['python', 1, 80],))
#
# cursor.executemany(
#     "INSERT INTO CW (MOD_CODE, CW_NO, MARK_OUT_OF) VALUES (?, ?, ?);",
#     (['perl', 2, 20],))
#
# # CW_MARK
#
# cursor.executemany(
#     "INSERT INTO CW_MARK (MOD_CODE, CW_NO, STUDENT, DATE_SUBMIT, MARK) VALUES (?, ?, ?, ?, ?);",
#     (['python', 1, 'John', '12-NOV-19', 15],))
#
# cursor.executemany(
#     "INSERT INTO CW_MARK (MOD_CODE, CW_NO, STUDENT, DATE_SUBMIT, MARK) VALUES (?, ?, ?, ?, ?);",
#     (['python', 1, 'John', '12-NOV-20', 25],))
#
# cursor.executemany(
#     "INSERT INTO CW_MARK (MOD_CODE, CW_NO, STUDENT, DATE_SUBMIT, MARK) VALUES (?, ?, ?, ?, ?);",
#     (['python', 1, 'Brian', '12-NOV-20', 40],))
#
# cursor.executemany(
#     "INSERT INTO CW_MARK (MOD_CODE, CW_NO, STUDENT, DATE_SUBMIT, MARK) VALUES (?, ?, ?, ?, ?);",
#     (['perl', 2, 'John', '13-NOV-20', 20],))
#
# cursor.executemany(
#     "INSERT INTO CW_MARK (MOD_CODE, CW_NO, STUDENT, DATE_SUBMIT, MARK) VALUES (?, ?, ?, ?, ?);",
#     (['perl', 2, 'Mark', '13-NOV-20', 10],))
#
# cursor.executemany(
#     "INSERT INTO CW_MARK (MOD_CODE, CW_NO, STUDENT, DATE_SUBMIT, MARK) VALUES (?, ?, ?, ?, ?);",
#     (['perl', 2, 'John', '13-NOV-21', 80],))

# cursor.execute("SELECT * from CW_MARK")


# ========================================(a) ========================================

cursor.execute(

    """
    select *  from cw_mark
    """)
for row in cursor.fetchall():
    print(row)


# cursor.execute(
#
#     """
#     select cm.*
#     from cw_mark cm inner join module modl
#     on cm.mod_code = modl.mod_code and (cm.student = 'Mark' or modl.leader = 'Mark' ) ;
#
#     """)
# for row in cursor.fetchall():
#     print(row)


# cursor.execute(
#
#     """
#     SELECT CW_MARK.MOD_CODE, CW_MARK.CW_NO, CW_MARK.STUDENT, CW_MARK.DATE_SUBMIT, CW_MARK.MARK
#     FROM CW_MARK
#     WHERE 1=(SELECT COUNT(LEADER) FROM MODULE WHERE LEADER='Bob' AND MOD_CODE=CW_MARK.MOD_CODE) OR CW_MARK.STUDENT = 'Bob'
#     """)
#
# for row in cursor.fetchall():
#     print(row)

# ========================================(b) ========================================
#
# cursor.execute(
#
#     """
#     select cm.*
#     from cw_mark cm inner join module modl on cm.mod_code = modl.mod_code --and (cm.student = 'Bob' or modl.leader = 'Bob' )
#     and (cm.mod_code,cm.cw_no,cm.student,cm.date_submit) in (select mod_code , cw_no, student , max(date_submit)
#     from cw_mark group by mod_code , student,cw_no );
#     """)
# for row in cursor.fetchall():
#     print(row)
#
#
# cursor.execute(
#
#     """
#     SELECT
#         CW_MARK.MOD_CODE,
#         CW_MARK.CW_NO,
#         CW_MARK.STUDENT,
#         CW_MARK.DATE_SUBMIT,
#         CW_MARK.MARK
#     FROM
#         CW_MARK
#     WHERE
#         (1=(SELECT COUNT(LEADER)
#             FROM MODULE
#             WHERE LEADER= 'Bob' AND MOD_CODE=CW_MARK.MOD_CODE)
#             OR
#             CW_MARK.STUDENT = 'Bob')
#             AND
#         (CW_MARK.CW_NO, CW_MARK.STUDENT, CW_MARK.DATE_SUBMIT) IN (
#             SELECT
#                 CW_NO, STUDENT, MAX(CW_MARK.DATE_SUBMIT)
#             FROM CW_MARK
#             GROUP BY CW_NO, STUDENT
#         )
#     """)
# for row in cursor.fetchall():
#     print(row)


# ========================================(c) ========================================
#
# cursor.execute(

    # """
    # select mod_code , cw_no, count(student) as student_attempts , min(mark) as min_mark, max(mark) as max_mark, avg(mark) as avg_mark from
    #     (select cm.*  from cw_mark cm where  cm.student == 'Mark'
    #     and (cm.mod_code,cm.cw_no,cm.student,cm.date_submit) in (select mod_code , cw_no, student , max(date_submit) from cw_mark group by mod_code , student,cw_no )
    #     ) abc
    # group by mod_code, cw_no ;
    #
    # """)
# for row in cursor.fetchall():
#     print(row)


cursor.execute(

    """
    
    """)
for row in cursor.fetchall():
    print(row)


connection.commit()
connection.close()
