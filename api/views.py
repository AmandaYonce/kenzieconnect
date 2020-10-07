from django.shortcuts import render
from .serializers import CustomUserSerializer, SurveySerializer, PenPalSerializer
from kenzie_connect.models import CustomUser, Survey, Penpal
from rest_framework import viewsets

# Create your views here.
