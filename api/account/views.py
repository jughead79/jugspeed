from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.generics import CreateAPIView

from .models import User
from .serializers import UserSerializerWithToken, MyTokenObtainPairSerializer


class Register(CreateAPIView):
    authentication_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializerWithToken


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
