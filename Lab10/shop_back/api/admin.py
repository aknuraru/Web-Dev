from django.contrib import admin
from .models import Product,Category
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'price', 'description','count','is_active','category')
    search_fields = ('name',)
# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name','id')
    search_fields = ('name',)