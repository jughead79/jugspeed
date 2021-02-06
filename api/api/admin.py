from django.contrib.admin import site

from .model import Article, Category


site.register(Article)
site.register(Category)
