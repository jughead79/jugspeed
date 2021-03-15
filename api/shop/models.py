from django.db.models import Model, CharField, DateTimeField, ForeignKey, CASCADE, ImageField, DecimalField
from account.models import User
from django.contrib.postgres.fields import ArrayField


class Category(Model):
    name = CharField(max_length=100)


class Product(Model):
    title = CharField(max_length=100, null=False, blank=False)
    desc = CharField(max_length=2000, null=False, blank=False)
    create = DateTimeField(auto_now_add=True)
    modify = DateTimeField(auto_now=True)
    brand = CharField(max_length=100, blank=True, null=True)
    image = ImageField()
    category = ForeignKey(Category, on_delete=CASCADE)
    tags = ArrayField(CharField(max_length=200), blank=True)

class Review(Model):
    user = ForeignKey(User, on_delete=CASCADE)
    content = CharField(max_length=500, null=False, blank=False)
    product = ForeignKey(Product, on_delete=CASCADE)
    rate = DecimalField(decimal_places=1,max_digits=2, null=True, blank=True)
