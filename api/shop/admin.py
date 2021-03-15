from django.contrib.admin import site

from .models import Product, Category, Review


site.register(Product)
site.register(Category)
site.register(Review)
