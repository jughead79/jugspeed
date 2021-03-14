from django.contrib.admin import site

from .models import Article, Category


site.register(Article)
site.register(Category)
