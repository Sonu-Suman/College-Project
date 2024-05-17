import mysql.connector
import datetime
import FireBaseI as fbi


mydb = mysql.connector.connect(host='localhost', user='root', passwd='1234', database='project')
mycursor = mydb.cursor()

registration_number = 20104133004

# mycursor.execute(f"SELECT * FROM students WHERE Registration_Id={registration_number}")

mycursor.execute(f"SELECT students.College_id, students.Department, students.Registration_Id, students.semester, cameras.Placed FROM students "
                 f"INNER JOIN cameras ON students.College_id=cameras.College_id WHERE "
                 f"students.Registration_Id={registration_number} AND "
                 f"students.Department=cameras.Depart AND "
                 f"students.semester=cameras.semester")


for data in mycursor.fetchall():
    if data[4] == 'class':
        set_value = fbi.StudentData(data[0], data[2])
        set_value.add_class_attendance(datetime.date.today(), datetime.datetime.now().strftime("%H:%M:%S"),
                              datetime.datetime.now().strftime("%H:%M:%S"))
    print(data)