from django import forms
from kenzie_connect.models import User, Survey

class LoginForm(forms.Form):
    username = forms.CharField(max_length=20)
    password = forms.CharField(widget=forms.PasswordInput)
    
    
class SignupForm(forms.ModelForm):
    username = forms.CharField(max_length=20) 
    password = forms.CharField(widget=forms.PasswordInput)
    class Meta:
        model = User
        fields = [
        'age', 
        'gender', 
        'bio',
        'sexual_preference',
        'email',
        'displayname',
        ]