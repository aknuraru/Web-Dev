from django.urls import path
from . import views
urlpatterns = [
    path('products/',views.product_list),
    path('categories/',views.category_list),
    path('categories/<int:category_id>/', views.category_detail),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/<int:category_id>/products/',views.category_product)
]