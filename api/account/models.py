from django.db.models import Model, CharField, DateTimeField, ForeignKey, CASCADE, ImageField, OneToOneField, IntegerField
from django.contrib.auth.models import AbstractUser


class Address(Model):
    address = CharField(max_length=2000, null=False, blank=False)
    postcode = CharField(max_length=20, null=True, blank=True)


class User(AbstractUser):
    avatar = ImageField(null=True, blank=True)
    address = ForeignKey(Address, null=True, blank=True, on_delete=CASCADE)
    phone = CharField(null=True, blank=True, max_length=11)
    balance = IntegerField(null=True, blank=True)
