from django.db import models
from django.db.models.base import Model
from django.db.models.query_utils import select_related_descend
from rest_framework.status import *
from rest_framework import viewsets

from .model import Article, Category
from .serializers import *

class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

    def get_queryset(self): 
        param = self.request.query_params.get('category')
        if param:
            return Article.objects.filter(category=param)
        return Article.objects.all()



class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer
