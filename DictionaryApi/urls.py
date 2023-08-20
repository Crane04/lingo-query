from django.urls import path
from .views import *

urlpatterns = [
    path("dictionary", dictionary),
    path("translator/", translator)
]