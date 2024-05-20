from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from . import FaceReco
from . import authority
from . import student
from . import FireBaseI as fbi


st = student.StudentData()
ca = authority.CollegeData()

def index(request):
    # return HttpResponse(os.access('C://Users/HP/React/Project/src/components/login/Login.jsx', os.F_OK))
    return HttpResponse(request)
    # return render(request, 'components/login/Login.jsx')


@api_view(['GET', 'POST'])
def receive_data(request):
    student = ['Sonu Suman', '6204284349']

    if request.method == 'POST':
        data = request.data  # Access the data sent from React.js

        if type(data) == list and len(data) == 4:
            fb = fbi.StudentData()               # data = [your_id != college_id, registration, start_data, end_date]
            return JsonResponse(fb.show_class_attendance_data(college_id=int(data[0]), registration=int(data[1])), safe=False)

        # --------------------------------------------------------------------------
        elif type(data) == list and len(data) == 13:                  # This condition for student registration page
            # print(data)
            College_Id = 23007

            # This is registrar id = int(data[12])
            access = False
            if data[11] == "allowed":
                access = True

            st.register(name=data[1], registration_id=int(data[0]), father_name=data[2], email=data[3], roll_no=data[4],
                            department=data[5], state=data[6], district=data[7], pin_code=int(data[8]), phone_no=int(data[9]),
                            semester=int(data[10]), access=access, college_id=College_Id
                        )

            return JsonResponse(list(student), safe=False)
        # --------------------------------------------------------------------------------------------
        elif type(data) == list and len(data) == 9:                # This condition for College Registration Page
            print(data)

            ca.register(cname=data[0], cid=int(data[1]), cemail=data[3], cpname=data[2], cpin_code=data[5], c_district=data[4],
                            c_state=data[7], c_phone=int(data[6]), c_total_camera=int(data[8])
                        )

        # --------------------------------------------------------------------------------------------------------
        elif type(data) == list and len(data) == 7:                 # This condition for Camera connection page
            print(data)

        elif type(data) == dict:
            id = FaceReco.Facereco.recognization(data['key'][23:])
            if id != 0:
                print("Student identity : ", id)
            else:
                print("This student is not registered in database.")
            print("photo data")


        return Response({'message': 'Data received successfully'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)



def send_data(request):
    students = ['Sonu-Suman', '6204284349']
    return JsonResponse(list(students), safe=False)


@api_view(['GET', 'POST'])
def Login_Api(request):

    if request.method == 'POST':
        data = request.data  # Access the data sent from React.js

        # ----------------------------- Forget ID Frontend Page   --------------------------------------------------
        if type(data) == list and len(data) == 2:                      # This section for forget id page
            print(data)       # data = [College_id, college_email]

            return JsonResponse(ca.forget_Id(college_id=int(data[0]), email=data[1]), safe=False)

        return Response({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    else:
         return Response({'message': 'Data received successfully'}, status=status.HTTP_200_OK)