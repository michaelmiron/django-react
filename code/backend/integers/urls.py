from django.urls import path
from . import views

urlpatterns = [
    path('sort-and-save/', views.sort_and_save, name='sort_and_save'),
]