from os import stat
from django.shortcuts import render, HttpResponseRedirect, reverse
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view
from .serializers import (
    CustomUserDetailSerializer,
    CustomUserRegisterSerializer,
    SurveySerializer,
    PenpalSerializer,
    WinkSerializer,
)
from kenzie_connect.models import CustomUser, Survey, Penpal, Wink
from rest_framework import status, mixins, generics
from rest_framework.response import Response
from rest_framework.views import APIView
# from rest_auth.registration.views import RegisterView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
# This view is for registering a new user but right now is only creating the
# username/email and the password and is immediately authenticating the user so they are logged in
# We will then need to take the rest of the registration form data and the id of the
# newly created user and hit the
# put on the endpoint for the SingleUserVewSet to update the user record with the remaining data
# class CustomRegisterView(RegisterView):
#     queryset = CustomUser.objects.all()


@api_view(["GET", "POST", "PUT"])
def CustomRegisterView(request):
    # print(request)
    if request.method == "GET":

        serializer = CustomUserDetailSerializer()
        return Response(serializer.data)

    if request.method == "POST":
        serializer = CustomUserDetailSerializer(data=request.data)

        if serializer.is_valid():

            data = serializer.data
            survey = data.pop("survey")
            survey_post = Survey.objects.create(**survey)
            password = data.get("password")
            user = CustomUser.objects.create(**data, survey=survey_post)
            user.set_password(password)
            user.save()
            token = Token.objects.get(user=user).key
            post_data = {"token": token, "survey": {**survey}, **data}

            return Response(post_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "PUT":
        if request.auth:
            user = request.auth.user
            survey = request.auth.user.survey
            survey_data = request.data["survey"]
            serializer = CustomUserDetailSerializer(
                instance=user, data=request.data)

            survey_serializer = SurveySerializer(
                instance=survey, data=survey_data)

            if serializer.is_valid() and survey_serializer.is_valid():
                request.data.pop("survey")
                for field in survey_data:
                    survey.__setattr__(field, survey_data[field])
                survey.save()

                for field in request.data:
                    user.__setattr__(field, request.data[field])

                user.save()

                return Response(data=serializer.data, status=status.HTTP_202_ACCEPTED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_401_UNAUTHORIZED)

# this viewset is for viewing all users


class CustomUserViewSet(APIView):

    @ staticmethod
    def get(request):
        users = CustomUser.objects.all()
        serializer = CustomUserDetailSerializer(users, many=True)
        # if request.auth:
        if request:
            return Response(serializer.data)
        return Response(status=status.HTTP_401_UNAUTHORIZED)

# This view takes in the id of the user and allows you to get, edit/put or delete the user


class SingleUserViewSet(generics.ListAPIView):

    serializer_class = CustomUserDetailSerializer
    queryset = CustomUser.objects.all()

    lookup_field = 'id'

    def get_queryset(self):
        user = self.request.user
        return CustomUser.objects.filter(email=user)

    # def put(self, request, id=None):
    #     return self.update(request, id)

    # def delete(self, request, id):
    #     return self.destroy(request, id)


# this viewset is for viewing all survey results for all users
class SurveyViewSet(APIView):
    @ staticmethod
    def get(request):
        users = Survey.objects.all()
        serializer = SurveySerializer(users, many=True)
        return Response(serializer.data)


class UserSurvey(generics.ListAPIView, mixins.CreateModelMixin,):
    serializer_class = SurveySerializer
    lookup_field = 'id'

    def get_queryset(self):
        user = self.request.user
        return Survey.objects.filter(user_profile=user)

    def post(self, request):
        return self.create(request)


# this viewset is for viewing all messages for all users
class PenpalViewSet(APIView):
    @ staticmethod
    def get(request):
        users = Penpal.objects.all()
        serializer = PenpalSerializer(users, many=True)
        return Response(serializer.data)


# this viewset is for sending/post, deleting penpal messages
class SendMessageView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin):
    serializer_class = PenpalSerializer
    queryset = Penpal.objects.all()

    lookup_field = 'id'

    def post(self, request, id=None):
        return self.create(request, id)


# this viewset is for returning a list of messages sent to the user
class UserMessageList(generics.ListAPIView):
    serializer_class = PenpalSerializer
    lookup_field = 'id'

    def get_queryset(self):
        user = self.request.user
        return Penpal.objects.filter(to_user=user)


# this viewset is for viewing all winks for all users
class WinkViewSet(APIView):
    @ staticmethod
    def get(request):
        winks = Wink.objects.all()
        serializer = WinkSerializer(winks, many=True)
        return Response(serializer.data)


# this viewset is for sending winks
class SendWinkView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin):
    serializer_class = WinkSerializer
    queryset = Wink.objects.all()

    lookup_field = 'id'

    def post(self, request, id=None):
        return self.create(request, id)


# this viewset is for returning a list of winks sent to the user
class UserWinkList(generics.ListAPIView):
    serializer_class = WinkSerializer
    lookup_field = 'id'

    def get_queryset(self):
        user = self.request.user
        return Wink.objects.filter(to_user=user)
