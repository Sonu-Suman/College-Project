# import pyrebase
import webbrowser
import firebase_admin
from firebase_admin import db, credentials
import datetime


# authenticate to firebase
cred = credentials.Certificate('C:/Users/HP/React/Testing/Backend/Backend/database/credential.json')
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
    def __init__(self):
        # self.class_attendance = ClassAttendance  # We need to improve this through classattendance.py file
        pass


    def new_student_data(self, college_id, registration_number):
        db.reference(f'/{college_id}').child(f'/{registration_number}').child('/Class_Attendance')
        db.reference(f'/{college_id}').child(f'/{registration_number}').child('/Main_Gate_Data')


    def add_class_attendance(self, college_id, registration_number, In_Time, Out_Time):
        duration = -1*(((int(In_Time[:2]) - int(Out_Time[:2]))*60) + (int(In_Time[3:5]) - int(Out_Time[3:5])))
        duration_hour = duration // 60
        duration_minute = duration - (duration_hour*60)

        if duration_hour < 10:
            duration_hour = '0'+str(duration_hour)

        if duration_minute < 10:
            duration_minute = '0' + str(duration_minute)

        string_duration = f'{duration_hour}:{duration_minute}:00'

        db.reference(f'/{college_id}').child(f'{registration_number}').child('Class_Attendance')\
            .update({f'{datetime.date.today()}': {'in_time': f'{In_Time}', 'out_time': f'{Out_Time}',
                                                  'duration': f'{string_duration}', 'date': f'{datetime.date.today()}'}})


    def add_main_gate_data(self, college_id, registration_number, In_Time, Out_Time):
        duration = ((int(In_Time[:2]) - int(Out_Time[:2]))*60) + (int(In_Time[3:5]) - int(Out_Time[3:5]))
        duration_hour = duration // 60
        duration_minute = duration - (duration_hour*60)

        if duration_hour < 10:
            duration_hour = '0'+str(duration_hour)

        if duration_minute < 10:
            duration_minute = '0' + str(duration_minute)

        string_duration = f'{duration_hour}:{duration_minute}:00'

        db.reference(f'/{college_id}').child(f'{registration_number}').child('Main_Gate_data')\
            .update({f'{datetime.date.today()}': {'in_time': f'{In_Time}', 'out_time': f'{Out_Time}',
                                                  'duration': f'{string_duration}', 'date': f'{datetime.date.today()}'}})


    def show_class_attendance_data(self, college_id, registration):
        ref = db.reference(f'/{college_id}').child(f'{registration}').child('Class_Attendance')

        rf = ref.get()
        data = []
        for i in list(rf.keys()):
            data.append(rf[i])

        return {'message': 'Successful', 'data': data}
        # return data


    def show_main_gate_data(self, college_id, registration):
        ref = db.reference(f'/{college_id}').child(f'{registration}').child('Main_Gate_data')

        rf = ref.get()
        data = []
        for i in list(rf.keys()):
            data.append(rf[i])

        # return {'message': 'Successful', 'data': data}
        return data