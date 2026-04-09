from . import views
from django.urls import path
urlpatterns = [
    path('movies/',views.list),
    path('movies/<int:id>/',views.detail),
]