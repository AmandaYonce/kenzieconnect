from django.shortcuts import render, HttpResponseRedirect, reverse
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
# from custom_users.settings import AUTH_USER_MODEL
# from myuser.forms import LoginForm, SignupForm
from .serializers import CustomUserSerializer, SurveySerializer, PenpalSerializer
from kenzie_connect.models import CustomUser, Survey, Penpal
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

# class SurveyViewSet(viewsets.ModelViewSet):
#     queryset = Survey.objects.all()
#     serializer_class = SurveySerializer

class PenpalViewSet(viewsets.ModelViewSet):
    queryset = Penpal.objects.filter()
    serializer_class = PenpalSerializer


@api_view(['GET'])
def user_detail(request,pk):
    
    try:
        user=CustomUser.objects.get(pk=pk)
    except CustomUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method=="GET":
        serializer=CustomUserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


        ### will play around with put request later might need to make a survey instance to save? will need to have an update function for serailzier for drf nested serializer

    # if request.method == 'PUT':
    #         # print(id)
    #         # print(request.data)
    #         serializer = CustomUserSerializer(post, data=request.data)

    #         if serializer.is_valid():
    #             serializer.save()

    #             return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)