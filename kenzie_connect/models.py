from django.db import models
# from django.utils import timezone
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    Male = 'Male'
    Female = 'Female'
    NonBinary ='NonBinary'
    Other = 'Other'
    
    gender_choices = [
    (Male, 'Male'),
    (Female, 'Female'),
    (NonBinary, 'NonBinary'),
    (Other, 'Other'),
    ]

    Straight = 'Straight'
    Gay = 'Gay'
    Bisexual = 'Bisexual'
    Other = 'Other'

    sexual_preference_choices = [
    (Straight, 'Straight'),
    (Gay, 'Gay'),
    (Bisexual, 'Bisexual'),
    (Other, 'Other'),
    ]

    age = models.IntegerField(default=18)
    gender = models.CharField(max_length=20, choices=gender_choices, default=Male)
    bio = models.CharField(max_length=1000)
    sexual_preference = models.CharField(max_length=20, choices=sexual_preference_choices, default=Straight)
    email = models.URLField(blank=True, null=True)
    displayname = models.CharField(max_length=60, default="")
    survey=models.OneToOneField('Survey',on_delete=models.CASCADE,primary_key=True)
    
    def __str__(self):
        return self.id

class Survey(models.Model):

    question_pet = models.CharField(max_length=30)
    question_food = models.BooleanField()
    question_date = models.CharField(max_length=30)
    question_activity = models.CharField(max_length=30)
    question_star = models.CharField(max_length=30)
    question_booze = models.CharField(max_length=30)
    question_pjs = models.CharField(max_length=30)
    question_sleep = models.BooleanField()
    question_mind = models.CharField(max_length=30)
    question_dog = models.CharField(max_length=30)




class Penpal(models.Model):
    penpal_message = models.CharField(max_length=500)
    from_user = models.ForeignKey(CustomUser, related_name="from_user_fk", on_delete=models.CASCADE)
    to_user = models.ForeignKey(CustomUser,related_name="to_user_fk", on_delete=models.CASCADE)


    def __str__(self):
        return self.penpal_message
