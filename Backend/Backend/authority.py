import mysql.connector
from random import *
import string
import datetime


mydb = mysql.connector.connect(host='localhost', user='root', password='1234', database='project')
mycursor = mydb.cursor()

# ================================ DataBase Structure ==============================================
# for storing college authority information
"""
    `Id` VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
    `Registration_Id` INT NOT NULL UNIQUE,
    `College_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `District` VARCHAR(255) NOT NULL,
    `State` VARCHAR(255) NOT NULL,
    `Pin_code` INT NOT NULL,
    `Principal_name` VARCHAR(255) NOT NULL,
    `Phone_no` BIGINT NOT NULL,
    `Total_camera` INT NOT NULL
"""

class CollegeData:
    def __init__(self):
        pass

    def register(self, cname, cid, cemail, cpname, cpin_code, c_district, c_state, c_phone, c_total_camera):

        ch = str(datetime.datetime.now()) + string.ascii_letters + string.hexdigits + '@#-/|$%&'
        id = ''.join(choice(ch) for i in range(randint(25, 30)))

        mycursor.execute(f"INSERT INTO CollegeAuthority(Id, Registration_Id, College_name, email, District, State, "
                             f"Pin_code, Principal_name, Phone_no, Total_camera) "
                             f"VALUES('{id}', {cid}, '{cname}', '{cemail}', '{c_district}', '{c_state}', {cpin_code}, "
                             f"'{cpname}', {c_phone}, {c_total_camera})"
                         )
        mydb.commit()
        self.send_email()


    def show_info(self, Id):
        mycursor.execute(f"SELECT * FROM CollegeAuthority WHERE Id='{Id}'")
        for i in mycursor.fetchall():
            return i

    def forget_Id(self, college_id, email):
        mycursor.execute(f"SELECT Id FROM CollegeAuthority WHERE Registration_id={college_id} AND email='{email}'")
        if data in mycursor.fetchall():
            print(data[0])
        mydb.commit()


    def validate_user(self, Id, email):
        mycursor.execute(f"SELECT email, Id From CollegeAuthority WHERE Registration_id={Id}")

        for data in mycursor.fetchall():
            if data[0] == email:
                return {'token': "Successful", 'data': data[1]}

        return {'token': "Unsuccessful", 'data': ''}


    def send_email(self):
        pass


if __name__ == "__main__":
    data = CollegeData()