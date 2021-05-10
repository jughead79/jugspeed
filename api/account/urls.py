from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path
from . import views

app_name = 'account'

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
]
