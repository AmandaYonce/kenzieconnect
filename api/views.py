from django.shortcuts import render
from .serializers import CustomUserSerializer, SurveySerializer, PenpalSerializer
from kenzie_connect.models import CustomUser, Survey, Penpal
from rest_framework import viewsets

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class SurveyViewSet(viewsets.ModelViewSet):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer

class PenpalViewSet(viewsets.ModelViewSet):
    queryset = Penpal.objects.filter()
    serilizer_class = PenpalSerializer