from django.db import models
# from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from rest_framework.serializers import ModelSerializer


class UserManager(BaseUserManager):

    use_in_migrations = True

    def create_user(self, age, gender, bio, sexual_preference, email, displayname, password=None):
        user = self.model(
            email=self.normalize_email(email),
            age=age,
            gender=gender,
            bio=bio,
            sexual_preference=sexual_preference,
            displayname=displayname
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, displayname, password):
        user = self.create_user(
            email=self.normalize_email(email),
            displayname=displayname,
            age=1,
            gender="Male",
            bio="blah",
            sexual_preference="Straight",
        )
        user.is_staff = True
        user.is_admin = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    Male = 'Male'
    Female = 'Female'
    NonBinary = 'NonBinary'
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

    username = None
    age = models.IntegerField(null=True, blank=True)
    gender = models.CharField(max_length=20, choices=gender_choices, null=True, blank=True)
    bio = models.CharField(max_length=1000, null=True, blank=True)
    sexual_preference = models.CharField(max_length=20, choices=sexual_preference_choices, null=True, blank=True)
    email = models.EmailField(max_length=150, unique=True)
    displayname = models.CharField(max_length=60, null=True, blank=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['displayname']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True


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
    user_profile = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="user_survey")
    question_pet = models.CharField(max_length=60, choices=pet_choices)
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
    to_user = models.ForeignKey(CustomUser, related_name="to_user_fk", on_delete=models.CASCADE)
    CHOICES = ((True, True), (False, False))
    message_read = models.BooleanField(choices=CHOICES, default=False)

    def __str__(self):
        return self.penpal_message


class Wink(models.Model):
    CHOICES = ((True, True), (False, False))
    wink_viewed = models.BooleanField(choices=CHOICES, default=False)
    from_user = models.ForeignKey(CustomUser, related_name="from_user_wink", on_delete=models.CASCADE)
    to_user = models.ForeignKey(CustomUser, related_name="to_user_wink", on_delete=models.CASCADE)

