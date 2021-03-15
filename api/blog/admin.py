from django.contrib.admin import site

from .models import Article, Category, Comment


site.register(Article)
site.register(Category)
site.register(Comment)
