
from kenzie_connect.models import CustomUser, Survey, Penpal, Wink
from rest_framework import serializers


class SurveySerializer(serializers.ModelSerializer):

    class Meta:
        model = Survey
        fields = [
            'username',
            'question_pet',
            'question_date',
            'question_activity',
            'question_star',
            'question_booze',
            'question_pjs',
            'question_sleep',
            'question_mind',
            'question_dog',
            ]


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:

        model = CustomUser
        fields = [
            'pk',
            "is_active",
            'username',
            'displayname',
            'email',
            'password',
            'age',
            'gender',
            'bio',
            'sexual_preference',
            ]


class PenpalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Penpal
        fields = [
            'penpal_message',
            'from_user',
            'to_user', 
            'message_read'
            ]


class WinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Wink
        fields = [
            'wink_viewed',
            'from_user',
            'to_user'
            ]