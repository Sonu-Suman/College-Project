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
    `access` BOOLEAN NOT NULL (0 -> now allowed, 1 -> allowed)
"""


# ===================================DATABASE CALL======================================================================
class StudentData:
    def __init__(self):
        pass


    def register(self, name, registration_id, father_name, roll_no, phone_no, semester, email,
                             department, college_id, district, state, pin_code, access, photo1=None, photo2=None):

        mycursor.execute(f"INSERT INTO students(`Student_name`, `Registration_Id`, `Father_name`, `Roll_no`, `Phone_no`, `Semester`, "
                            f"`Email`, `Department`, `College_id`, `District`, `State`, `Pin_code`, `access`) "
                            f"VALUES('{name}', {registration_id}, '{father_name}', '{roll_no}', {phone_no}, {semester}, "
                            f"'{email}', '{department}', {college_id}, '{district}', '{state}', '{pin_code}', "
                            f" {access})"
                        )
        mydb.commit()


    def show_info(self, registration_number, college_id):
        mycursor.execute(f"SELECT * FROM students WHERE Registration_Id={registration_number} AND College_id={college_id}")
        for i in mycursor.fetchall():
            return i


    def student_photo(self, registration_number, college_id):
        mycursor.execute(f"SELECT * FROM students WHERE Registration_Id={registration_number} AND College_id={college_id}")
        for i in mycursor.fetchall():
            return i[14]


    def update_semester(self, registration_number, college_id, semester):
        mycursor.execute(f"UPDATE Semester={semester} WHERE Registration_Id={registration_number} AND College_id={college_id}")
        mydb.commit()


    def update_access(self, registration_number, college_id, access):
        mycursor.execute(f"UPDATE access={access} WHERE Registration_Id={registration_number} AND College_id={college_id}")
        mydb.commit()


    def show_photo(self, ):
        # -------------------------------------------------
        # photo = self.for_result(1)
        # print(photo)
        # img = cv2.imread(photo.decode('utf-8'))    # If you store direct computer file in database then this is needed.
        # while True:
        #     cv2.imshow("Stored in Database", img)
        #     if cv2.waitKey(1) == ord('q'):
        #         break
        # ----------------------------------------------------
        pass


if __name__ == "__main__":
    data = StudentData()

