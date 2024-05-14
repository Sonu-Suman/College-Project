import mysql.connector


mydb = mysql.connector.connect(host='localhost', user='root', passwd='1234', database='project')
mycursor = mydb.cursor()


# ========================================= DATABASE STRUCTURE ===================================================
# For creating college authority
"""
    `Id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `In_out` BOOLEAN NOT NULL,
    `College_id` INT NOT NULL,
    `Placed` VARCHAR(255) NULL NULL,
    `Semester` INT NOT NULL,
    `Room_no` INT NOT NULL,
    `Depart` VARCHAR(255) NOT NULL
"""

def save_data():
    mycursor.execute(f"INSERT INTO Cameras(In_out, College_id, Placed, Semester, Room_no, Depart) VALUES({True}, {23007}, '{'class'}', {2}, {125}, '{'Civil'}')")
    mydb.commit()


def saw_data():
    mycursor.execute("SELECT * FROM Cameras")
    for data in mycursor.fetchall():
        return data


save_data()
print(saw_data())