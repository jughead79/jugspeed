from django.db.models import Model, CharField, DateTimeField, ForeignKey, CASCADE, ImageField, IntegerField
from account.models import User
from django.contrib.postgres.fields import ArrayField


class Category(Model):
    name = CharField(max_length=100)


class Article(Model):
    title = CharField(max_length=100, null=False, blank=False)
    content = CharField(max_length=2000, null=False, blank=False)
    create = DateTimeField(auto_now_add=True)
    modify = DateTimeField(auto_now=True)
    cover = ImageField()
    author = ForeignKey(User, on_delete=CASCADE)
    category = ForeignKey(Category, on_delete=CASCADE)
    tags = ArrayField(CharField(max_length=200), blank=True)


class Comment(Model):
    user = ForeignKey(User, on_delete=CASCADE)
    content = CharField(max_length=500, null=False, blank=False)
    article = ForeignKey(Article, on_delete=CASCADE)
    #likes