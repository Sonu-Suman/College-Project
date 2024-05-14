import mysql.connector


mydb = mysql.connector.connect(host='localhost', user='root', password='1234', database='project')
mycursor = mydb.cursor()

# ================================ DataBase Structure ==============================================
# for storing college authority information
"""
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Registration_Id` INT NOT NULL UNIQUE PRIMARY KEY,
    `College_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `District` VARCHAR(255) NOT NULL,
    `State` VARCHAR(255) NOT NULL,
    `Pin_code` INT NOT NULL,
    `Principal_name` VARCHAR(255) NOT NULL,
    `Total_camera` INT NOT NULL,
    `Password` VARCHAR(255) NOT NULL
"""

def add_data():
    mycursor.execute(f"INSERT INTO CollegeAuthority(Registration_Id, College_name, email, District, State, Pin_code, Principal_name, Total_camera, Password) "
                     f"VALUES({23007}, '{'Government Engineering College Jamui'}', '{'gecjamui@gmail.com'}', '{'Jamui'}', '{'Bihar'}', {811113}, '{'Bimal Kumar'}', {0}, '{'gecjamui@123'}')")
    mydb.commit()


def show_data():
    mycursor.execute("SELECT * FROM CollegeAuthority")
    for i in mycursor.fetchall():
        return i


add_data()
print(show_data())