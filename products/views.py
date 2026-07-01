from rest_framework import viewsets
from .permissions import IsAdminOrReadOnly

from .models import Product
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):

    queryset = Product.objects.all()

    serializer_class = ProductSerializer

    permission_classes = [IsAdminOrReadOnly]