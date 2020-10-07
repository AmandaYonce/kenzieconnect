from kenzie_connect.models import CustomUser, Survey
from rest_framework import serializers


class CustomUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'age',
            'gender',
            'bio',
            'sexual_preference',
            'email',
            'displayname'
            ]


class SurveySerializer(seializers.HyperlinkedModelSerializer):
    class Meta:
        model = Survey
        fields = [
            'question_pet',
            'question_food',
            'question_date',
            'question_activity',
            'question_star',
            'question_booze',
            'question_pjs',
            'question_sleep',
            'question_mind',
            'question_dog'
            ]


class PenPalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PenPalSerializer
        fields = [
            'penpal_message',
            'from_user',
            'to_user'
            ]

