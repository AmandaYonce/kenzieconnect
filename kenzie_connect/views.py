from django.shortcuts import render, HttpResponseRedirect, reverse
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from kenzie_connect.models import User
from custom_users.settings import AUTH_USER_MODEL
from myuser.forms import LoginForm, SignupForm

# Create your views here.
