from rest_framework import generics
from .models import User
from .serializers import RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .jwt import CustomTokenObtainPairSerializer


class RegisterAPIView(generics.CreateAPIView):
    """
    Register a new user.
    Every registered user gets the USER role.
    """

    queryset = User.objects.all()
    serializer_class = RegisterSerializer
class LoginAPIView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer