from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer,CategorySerializer
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    @action(detail=True, methods=['get'])
    def products(self, request,pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
