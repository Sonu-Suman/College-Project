import mysql.connector
import cv2

mydb = mysql.connector.connect(host='localhost', user='root', passwd='1234', database='project')
mycursor = mydb.cursor()

# =================================== Database structure ======================================================================
# For storing student information
""" 
    `Id` INT NOT NULL,
	`Student_name` VARCHAR(255) NOT NULL,
    `Registration_Id` BIGINT NOT NULL UNIQUE PRIMARY KEY,
    `Father_name` VARCHAR(255) NOT NULL,
    `Roll_no` VARCHAR(255) NOT NULL,
    `Phone_no` BIGINT NOT NULL,
    `Semester` INT NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Department` VARCHAR(255) NOT NULL,
    `College_id` INT NOT NULL,
    `District` VARCHAR(255) NOT NULL,
    `State` VARCHAR(255) NOT NULL,
    `Pin_code` INT NOT NULL,
    `picture1` MEDIUMBLOB NOT NULL,
    `picture2` MEDIUMBLOB NOT NULL,
    `access` BOOLEAN NOT NULL (0 -> now allowed, 1 -> allowed)
"""


# ===================================DATABASE CALL======================================================================
def add_data():
    mycursor.execute(
        f"INSERT INTO students(`Student_name`, `Registration_Id`, `Father_name`, `Roll_no`, `Phone_no`, `Semester`, `Email`, `Department`, `College_id`, `District`, `State`, `Pin_code`, `picture1`, `picture2`, `access`) VALUES('{'Suman Kumar'}', {20104133004}, '{'Surendra Prasad Singh'}', '{'20-ECE-35'}', {6204284349}, {2}, '{'sumankumar86028@gmail.com'}', '{'Civil'}', {23007}, '{'Nalanda'}', '{'Bihar'}', '{803107}', '{'C:/Users/HP/Saved/my3.png'}', '{'C:/Users/HP/Saved/my3.png'}', {True})")
    mydb.commit()


def database_call():
    mycursor.execute(f"SELECT * FROM students WHERE ")
    for i in mycursor.fetchall():
        return i


def for_result(id):
    mycursor.execute(f"SELECT * FROM students WHERE Id={id}")
    for i in mycursor.fetchall():
        return i[14]


def show_photo():
    photo = for_result(1)
    print(photo)
    img = cv2.imread(photo.decode('utf-8'))
    while True:
        cv2.imshow("Stored in Database", img)
        if cv2.waitKey(1) == ord('q'):
            break


add_data()
show_photo()
