from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.generics import CreateAPIView
from rest_framework.exceptions import AuthenticationFailed

from .models import User
from .serializers import UserSerializerWithToken, MyTokenObtainPairSerializer


class Register(CreateAPIView):
    authentication_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializerWithToken

    def handle_exception(self, exc):
        if 'username' in exc.detail:
            exc.detail = "نام کاربری موجود نیست."
        return super().handle_exception(exc)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    def handle_exception(self, exc):
        if isinstance(exc, AuthenticationFailed): # to be used later
            if exc.detail == "No active account found with the given credentials":
                exc.detail = "حساب کاربری مورد نظر یافت نشد."
        return super().handle_exception(exc)
