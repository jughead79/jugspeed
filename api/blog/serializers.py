from rest_framework.serializers import ModelSerializer
from account.models import User
from .models import Article, Category, Comment


class DynamicSerializer(ModelSerializer):
    def __init__(self, *args, **kwargs):
        fields = kwargs.pop('fields', None)
        super(DynamicSerializer, self).__init__(*args, **kwargs)
        if fields is not None:
            allowed = set(fields)
            existing = set(self.fields)
            for field_name in existing - allowed:
                self.fields.pop(field_name)


class UserDetailSerializer(DynamicSerializer):
    class Meta:
        model = User
        fields = '__all__'


class CategoryDetailSerializer(DynamicSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ArticleSerializer(DynamicSerializer):
    author = UserDetailSerializer(read_only=True, fields=('id', 'avatar', 'username'))
    category = CategoryDetailSerializer(read_only=True)
    class Meta:
        model = Article
        fields = '__all__'

class CommentSerializer(DynamicSerializer):
    user = UserDetailSerializer(read_only=True, fields=('id', 'avatar', 'username'))
    class Meta:
        model = Comment
        fields = '__all__'



