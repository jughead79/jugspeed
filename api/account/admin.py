from django.contrib.admin import site

from .models import Address, User


site.register(Address)
site.register(User)
