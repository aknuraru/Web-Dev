from django.contrib import admin
from .models import Product,Category
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'id', 'price', 'description')
    search_fields = ('name',)
# Register your models here.
admin.site.register(Category)
