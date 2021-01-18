from rest_framework import serializers

from .model import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['title','content','author','id']