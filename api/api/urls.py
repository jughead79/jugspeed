from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .view import UserViewSet

router = DefaultRouter()
router.register('article', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]