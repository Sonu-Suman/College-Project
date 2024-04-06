from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



def index(request):
    # return HttpResponse(os.access('C://Users/HP/React/Project/src/components/login/Login.jsx', os.F_OK))
    return HttpResponse(request)
    # return render(request, 'components/login/Login.jsx')


@api_view(['GET', 'POST'])
def receive_data(request):
    if request.method == 'POST':
        data = request.data  # Access the data sent from React.js
        # Process the data as needed
        print(data)  # print the received data
        print("Yes Backend is Connected with Frontend")
        return Response({'message': 'Data received successfully'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)