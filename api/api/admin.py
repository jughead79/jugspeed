from django.contrib.admin import site

from .model import Article


site.register(Article)
