from django.contrib import admin
from kenzie_connect.models import CustomUser, Survey, Penpal, Wink
# from django.contrib.auth.admin import UserAdmin
# Register your models here.

admin.site.register(CustomUser)
admin.site.register(Survey)
admin.site.register(Penpal)
admin.site.register(Wink)