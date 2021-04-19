from django.db.models import query
from django.db.models.query_utils import Q
from rest_framework.status import *
from rest_framework import viewsets

from .models import Article, Category
from .serializers import *


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        # set query to default
        query = Article.objects.all()
        # pop 'limit' key before filter to prevent break
        params = self.request.query_params.dict()
        limit = params.pop('limit', None)
        if params:
            # filter objects based on query params
            query = Article.objects.filter(**params)
        if limit:
            # apply limit
            return query.order_by('-id')[0:int(limit)]
        # return without limit
        return query


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer
