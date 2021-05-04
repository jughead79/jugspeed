from rest_framework.routers import DefaultRouter
from django.urls import path, include

from .views import ArticleViewSet, CategoryViewSet, CommentViewSet

app_name = 'blog'

router = DefaultRouter()
router.register('article', ArticleViewSet, 'Article')
router.register('comment', CommentViewSet, 'Comment')
router.register('category', CategoryViewSet, 'Category')

urlpatterns = [
    path('', include(router.urls))
]
