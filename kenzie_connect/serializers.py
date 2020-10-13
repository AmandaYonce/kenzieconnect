
from kenzie_connect.models import CustomUser, Survey, Penpal, Wink
from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer


class SurveySerializer(serializers.ModelSerializer):
    # user_profile = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = Survey
        fields = [
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


class CustomUserDetailSerializer(serializers.ModelSerializer):
    survey=SurveySerializer()
    class Meta:
        model = CustomUser
        fields = ('email','password', 'displayname', 'age', 'gender', 'sexual_preference', 'bio', "survey")
        # read_only_fields = ('email',)
    
    

class CustomUserRegisterSerializer(RegisterSerializer):

    email = serializers.EmailField(required=True)
    password1 = serializers.CharField(write_only=True)
    displayname = serializers.CharField(required=True)
    age = serializers.IntegerField()
    gender = serializers.CharField()
    bio = serializers.CharField()
    sexual_preference = serializers.CharField()

    def get_cleaned_data(self):
        super(CustomUserRegisterSerializer, self).get_cleaned_data()

        return {
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
            'displayname': self.validated_data.get('displayname', ''),
            'age': self.validated_data.get('age', ''),
            'gender': self.validated_data.get('gender', ''),
            'sexual_preference': self.validated_data.get('sexual_preference', ''),
            'bio': self.validated_data.get('bio', ''),
        }


class PenpalSerializer(serializers.HyperlinkedModelSerializer):
    from_user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())
    to_user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = Penpal
        fields = [
            'id',
            'penpal_message',
            'from_user',
            'to_user',
            'message_read'
            ]


class WinkSerializer(serializers.ModelSerializer):
    from_user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())
    to_user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = Wink
        fields = [
            'id',
            'wink_viewed',
            'from_user',
            'to_user'
            ]
