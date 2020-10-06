from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(models.AbstractUser):
    Male = 'Male'
    Female = 'Female'
    Non-Binary ='Non-Binary'
    Other = 'Other'
    
    gender_choices = [
    (Male = 'Male'),
    (Female = 'Female'),
    (Non-Binary ='Non-Binary'),
    (Other = 'Other'),
    ]

    Straight = 'Straight'
    Gay = 'Gay'
    Bisexual = 'Bisexual'
    Other = 'Other'
    sexual_prefence_choices =[
    (Straight = 'Straight'),
    (Gay = 'Gay'),
    (Bisexual = 'Bisexual'),
    (Other = 'Other'),]

    age = models.IntergerField(default=18)
    gender = models.CharField(max_length=20, choices=gender_choices, default=Male)
    bio = models.CharField(max_length=1000)
    sexual_preference = models.CharField(max_length=20, choices=sexual_prefence_choices, default=Straight)
    email = models.URLField(blank=True, null=True)
    displayname = models.CharField(max_length=60, default="")

class Survey(models.Model):

    is_longterm = models.BooleanField()
    fav_date = models.CharField(max_length=30)
    #religon maybe? 
    fav_food = models.CharField(max_length=40)
    


#class PenPal(models.Model):