from rest_framework.status import *
from rest_framework import viewsets

from .model import Article
from .serializers import *

class UserViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
