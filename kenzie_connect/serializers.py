
from kenzie_connect.models import CustomUser, Survey, Penpal
from rest_framework import serializers


class SurveySerializer(serializers.ModelSerializer):

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
            'question_dog',
            ]


class CustomUserSerializer(serializers.ModelSerializer):

    survey = SurveySerializer()

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
            "survey"
            ]

    def create(self, validated_data):
        survey_data = validated_data.pop("survey")
        survey = Survey.objects.create(**survey_data)
        user = CustomUser.objects.create(**validated_data, survey=survey)
        return user


class PenpalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Penpal
        fields = [
            'penpal_message',
            'from_user',
            'to_user'
            ]
