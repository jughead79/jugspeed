from rest_framework import serializers
from account.models import User
from .models import Article, Category, Comment

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    author = UserDetailSerializer(read_only=True)
    category = CategoryDetailSerializer(read_only=True)
    class Meta:
        model = Article
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    user = UserDetailSerializer(read_only=True)
    article = ArticleSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'
