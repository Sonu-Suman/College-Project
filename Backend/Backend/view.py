from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from . import FaceReco



def index(request):
    # return HttpResponse(os.access('C://Users/HP/React/Project/src/components/login/Login.jsx', os.F_OK))
    return HttpResponse(request)
    # return render(request, 'components/login/Login.jsx')


@api_view(['GET', 'POST'])
def receive_data(request):
    student = ['Sonu Suman', '6204284349']
    if request.method == 'POST':
        data = request.data  # Access the data sent from React.js

        # print(data['key'])  # print the received data
        if type(data) == list and len(data) == 15:
            print(data)
            print("this is student registration form data")
            return JsonResponse(list(student), safe=False)
        elif type(data) == list and len(data) == 11:
            print(data)
            print("this is college registration form data")
        elif type(data) == list and len(data) == 7:
            print(data)
            print("this is camera form data")
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