from django.db.models import Model, CharField, TextField, DateTimeField
from rest_framework.fields import ImageField

class Article(Model):
    title = CharField(max_length=100,null=False, blank=False)
    content = CharField(max_length=2000,null=False, blank=False)
    create = DateTimeField(auto_now_add=True)
    modify = DateTimeField(auto_now=True)
    author = CharField(max_length=100,blank=True,null=True)
    cover = ImageField()