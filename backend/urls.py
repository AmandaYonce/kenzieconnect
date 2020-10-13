"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from kenzie_connect.views import (
    SurveyViewSet,
    PenpalViewSet,
    WinkViewSet,
    CustomUserViewSet,
    SingleUserViewSet,
    CustomRegisterView,
    UserMessageList,
    SendMessageView,
    UserWinkList,
    SendWinkView,
    UserSurvey,
)


# please note the url for login is rest-auth/login
# and requires the username and email which will both be the email and the password
# the url for logout is rest-auth/logout

urlpatterns = [
    path('survey/', SurveyViewSet.as_view()),
    path('penpal/', PenpalViewSet.as_view()),
    path('sendmessage/', SendMessageView.as_view()),
    path('inbox/<int:id>', UserMessageList),
    path('wink/', WinkViewSet.as_view()),
    path('sendwink/', SendWinkView.as_view()),
    path('userwinks/', UserWinkList.as_view()),
    path('users/', CustomUserViewSet.as_view(), name='user-info'),
    path('user/', SingleUserViewSet.as_view()), #you can use rest-auth/user to get the detail
    path('register/', CustomRegisterView),
    url(r'^rest-auth/', include('rest_auth.urls')),
    path('usersurvey/', UserSurvey.as_view()),
    path('admin/', admin.site.urls),
]
