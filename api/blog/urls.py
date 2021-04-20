from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

from .views import ArticleViewSet, CategoryViewSet, CommentViewSet

app_name = 'blog'

router = DefaultRouter()
router.register('article', ArticleViewSet, 'Article')
router.register('comment', CommentViewSet, 'Comment')
router.register('category', CategoryViewSet, 'Category')



urlpatterns = [
    path('', include(router.urls))
]
