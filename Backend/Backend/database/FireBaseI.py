import pyrebase
import webbrowser
import firebase_admin
from firebase_admin import db, credentials
import datetime


# authenticate to firebase
cred = credentials.Certificate('credential.json')
firebase_admin.initialize_app(cred, {"databaseURL": "https://biometricauthentication-16f2e-default-rtdb.asia-southeast1.firebasedatabase.app"})


# =================================== FOR LEARNING PURPOSE (TUTORIAL) =================================================
"""Video Link : https://www.youtube.com/watch?v=BnrkTpgH5Vc"""
# Retrieve only about name
# print(db.reference('/name').get())

# set Operation
# db.reference('/videos').set(3)
# print(ref.get())

# ---------- Update Operation -----------------------
# update operation (update existing value)
# db.reference('/').update({'language': 'python'})
# ref.get()

# update operation (add new key value)
# db.reference('/').update({'subscribed': True})
# ref.get()

# ------------- Push Operation --------------------
# but this statement convert python list into python dictionary
# db.reference('/titles').push().set("Create new ui in python")
# ref.get()

# ----------------- Transaction ----------------------
# def increment_transaction(current_val):
#     return current_val + 1
#
#
# db.reference('/title_count').transaction(increment_transaction)
# ref.get()

# ----------------- Delete Operation -------------------------
# db.reference('language').delete()
# ref.get()
# ============================================= END ===========================================================


# creating reference to root node
ref = db.reference("/")

# retrieve data from root node
# print(ref.get())

class StudentData:
    def __init__(self, CollegeId, RegistrationId):
        self.college_id = CollegeId
        self.registration_number = RegistrationId
        # self.class_attendance = ClassAttendance  # We need to improve this through classattendance.py file


    def new_student_data(self):
        db.reference(f'/{self.college_id}').child(f'/{self.registration_number}').child('/Class_Attendance')
        db.reference(f'/{self.college_id}').child(f'/{self.registration_number}').child('/Main_Gate_Data')


    def add_class_attendance(self, Date, In_Time, Out_Time):
        self.date = Date
        self.in_time = In_Time
        self.out_time = Out_Time
        self.duration = (((int(self.in_time[:2]) - int(self.out_time[:2]))*60) + (int(self.in_time[3:5]) - int(self.out_time[3:5])))

        db.reference(f'/{self.college_id}').child(f'{self.registration_number}').child('Class_Attendance')\
            .update({f'{self.date}': {'In_Time': f'{self.in_time}', 'Out_Time': f'{self.out_time}', 'Duration': f'{self.duration}'}})


    def add_main_gate_data(self, Date, In_Time, Out_Time):
        self.date = Date
        self.in_time = In_Time
        self.out_time = Out_Time
        self.duration = (((int(self.in_time[:2]) - int(self.out_time[:2]))*60) + (int(self.in_time[3:5]) - int(self.out_time[3:5])))

        db.reference(f'/{self.college_id}').child(f'{self.registration_number}').child('Main_Gate_Data')\
            .child(f'{datetime.date.today()}').update({f'{self.date}': [f'{self.in_time}', f'{self.out_time}', f'{self.duration}']})


