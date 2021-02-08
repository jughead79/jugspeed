from rest_framework.status import *
from rest_framework import viewsets

from .model import Article, Category
from .serializers import *


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        if self.request.query_params.dict():
            return Article.objects.filter(**self.request.query_params.dict())
        return Article.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer
