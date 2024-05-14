import mysql.connector
import datetime
import FireBaseI


mydb = mysql.connector.connect(host='localhost', user='root', passwd='1234', database='project')
mycursor = mydb.cursor()

Registration_number = 20104133004

mycursor.execute(f"SELECT students.Registration_Id, students.College_id, cameras.Placed FROM students "
                 f"INNER JOIN cameras ON cameras.College_id=students.College_id WHERE students.Registration_Id={Registration_number}")

for data in mycursor.fetchall():
    if data[2] == 'class':           # We need to change this value in 'main_gate'
        set_value = FireBaseI.StudentData(data[0], data[2])
        set_value.add_main_gate_data(datetime.date.today(), datetime.datetime.now().strftime("%H:%M:%S"),
                              datetime.datetime.now().strftime("%H:%M:%S"))

    print(data)