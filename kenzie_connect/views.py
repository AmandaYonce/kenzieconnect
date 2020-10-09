from django.shortcuts import render, HttpResponseRedirect, reverse
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
# from custom_users.settings import AUTH_USER_MODEL
# from myuser.forms import LoginForm, SignupForm
from .serializers import CustomUserSerializer, SurveySerializer, PenpalSerializer
from kenzie_connect.models import CustomUser, Survey, Penpal
from rest_framework import viewsets
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
def match_probability(request,user_id):
    
    if request.method=="GET":
        user=CustomUser.get(id=request.user.id)
        match=CustomUser.get(id=user_id)
    