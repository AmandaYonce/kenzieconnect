from django.db import models
from django.utils import timezone
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
    

class Survey(models.Model):
    Dog = 'Dog'
    Cat = 'Cat'
    DogsandCats = 'Dogs and Cats'
    Nopets = 'No Pets'

    pet_choices = [
        (Dog, 'Dog'),
        (Cat, 'Cat'),
        (DogsandCats, 'Dogs and Cats'),
        (Nopets, 'No Pets'),
    ]

    Latenight = 'Late-nighter'
    Earlyevening = 'Early Evening'
    Weekend = 'Weekend Afternoon'

    date_choice = [
        (Latenight, 'Late-nighter'),
        (Earlyevening, 'Early Evening'),
        (Weekend, 'Weekend'),
    ]

    PS5 = 'PS5'
    DND = 'Dungeons and Dragons '
    Hackathon = 'Hackathon'
    Dinner = 'Dinner'

    activity_choice = [
        (PS5, 'PS5'),
        (DND, 'Dungeons and Dragons'),
        (Hackathon, 'Hackathon'),
        (Dinner, 'Dinner'),
    ]

    Darthvader = 'Darth Vader'
    Lukeskywalker = 'LukeSky Walker'
    Hansolo = 'Han Solo'
    Princessleia = 'Princess Leia'
    Padmeamidala = 'Padme Amidala'
    Jynersp = 'Jyn Ersp'
    Yoda = 'Yoda'
    Chewbacca = 'Chewbacca'
    Jarjarbinks = 'Jar Jar Binks'

    starwars_choice = [
        (Darthvader, 'Darth Vader'),
        (Lukeskywalker, 'Luke Skywalker'),
        (Hansolo, 'Han Solo'),
        (Princessleia, 'Princess Leia'),
        (Padmeamidala, 'Padme Amidala'),
        (Jynersp, 'Jyn Ersp'),
        (Yoda, 'Yoda'),
        (Chewbacca, 'Chewbacca'),
        (Jarjarbinks, 'Jar Jar Binks'),
    ]

    Beer = 'Beer'
    Wine = 'Wine'
    Cocktails = 'Cocktails'
    Noalcohol = 'No Alcohol Please'

    drink_choice = [
        (Beer, 'Beer'),
        (Wine, 'Wine'),
        (Cocktails, 'Cocktails'),
        (Noalcohol, 'No Alcohol Please')
    ]

    Never = 'Never'
    Yes = '100% Yes'
    Bottom = 'Business on top, pjs on bottom'
    Nada = 'Literally took them off 1 min ago'

    pj_choice = [
        (Never, 'Never'),
        (Yes, '100% Yes'),
        (Bottom, 'Business on top, pjs on bottom'),
        (Nada, 'Literally took them off 1 min ago')
    ]

    Earlybird = 'Early Bird'
    Nightowl = 'Night Owl'

    rising_choice = [
        (Earlybird, 'Early Bird'),
        (Nightowl, 'Night Owl')
    ]

    Cheekychild = 'Cheeky Child'
    TormentedTeenager = 'Tormented Teenager'
    Madmidlifer = 'Mad Mid-lifer'
    Groovygrandparent = 'Groovy Grandparent'

    mindage_choice = [
        (Cheekychild, 'Cheeky Child'),
        (TormentedTeenager, 'Tormented Teenager'),
        (Madmidlifer, 'Mad Mid-lifer'),
        (Groovygrandparent, 'Groovy Grandparent')

    ]
    Jackrussel = 'Jack Russell – small, tough, opinionated'
    Tibetanmastiff = 'Tibetan Mastiff – or some other very rare breed'
    Germanshepard = 'German Shepherd – poised and elegant but rather hardy'
    Poodle = 'Poodle – beautifully presented but a bit of a poser'
    Goldenretriever = 'Golden Retriever – warm, cuddly and great with children'
    Pitbullterrier = 'Pit Bull Terrier – scary but kind deep down'
    Labradoodle = 'Labradoodle – or some other cute hybrid'

    dogbreed_choice = [
        (Jackrussel, 'Jack Russell – small, tough, opinionated'),
        (Tibetanmastiff, 'Tibetan Mastiff – or some other very rare breed'),
        (Germanshepard, 'German Shepherd – poised and elegant but rather hardy'),
        (Poodle,  'Poodle – beautifully presented but a bit of a poser'),
        (Goldenretriever, 'Golden Retriever – warm, cuddly and great with children'),
        (Pitbullterrier, 'Pit Bull Terrier – scary but kind deep down'),
        (Labradoodle,  'Labradoodle – or some other cute hybrid')

    ]



    survey_user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, blank=True, null=True)
    question_pet = models.CharField(max_length=60, choices=pet_choices, default=Nopets)
    question_food = models.BooleanField(default=True)
    question_date = models.CharField(max_length=50, choices=date_choice)
    question_activity = models.CharField(max_length=50, choices=activity_choice)
    question_star = models.CharField(max_length=50, choices=starwars_choice)
    question_booze = models.CharField(max_length=50, choices=drink_choice)
    question_pjs = models.CharField(max_length=50, choices=pj_choice)
    question_sleep = models.CharField(max_length=10, choices=rising_choice)
    question_mind = models.CharField(max_length=50, choices=mindage_choice)
    question_dog = models.CharField(max_length=60, choices=dogbreed_choice)




class Penpal(models.Model):
    penpal_message = models.CharField(max_length=500)
    from_user = models.ForeignKey(CustomUser, related_name="from_user_fk", on_delete=models.CASCADE)
    to_user = models.ForeignKey(CustomUser,related_name="to_user_fk", on_delete=models.CASCADE)


    def __str__(self):
        return self.penpal_message


class Notification(models.Model):
    notification_tweet = models.ForeignKey(Penpal, on_delete=models.CASCADE)
    notification_user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)


    def __str__(self):
        return self.notification_tweet.text
