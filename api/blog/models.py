from django.db.models import Model, CharField, DateTimeField, ForeignKey, CASCADE, ImageField
from account.models import User
from django.contrib.postgres.fields import ArrayField

class Category(Model):
    name = CharField(max_length=100)

class Article(Model):
    title = CharField(max_length=100,null=False, blank=False)
    content = CharField(max_length=2000,null=False, blank=False)
    create = DateTimeField(auto_now_add=True)
    modify = DateTimeField(auto_now=True)
    author = CharField(max_length=100,blank=True,null=True)
    cover = ImageField()
    author = ForeignKey(User, on_delete=CASCADE )
    category = ForeignKey(Category, on_delete=CASCADE)
    tags = ArrayField(CharField(max_length=200), blank=True)


