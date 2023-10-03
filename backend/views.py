from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AuthorSerializer, EditorSerializer, CollectionSerializer, BookSerializer
from .models import Author, Editor, Collection, Book

# Create your views here.
def index(request):
    return render(request, 'backend/index.html')

class AuthorAPI(viewsets.ModelViewSet):
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()

class EditorAPI(viewsets.ModelViewSet):
    serializer_class = EditorSerializer
    queryset = Editor.objects.all()

class CollectionAPI(viewsets.ModelViewSet):
    serializer_class = CollectionSerializer
    queryset = Collection.objects.all()

class BookAPI(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()