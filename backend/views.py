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

    def create(self, request):
        dataTitle = request.data['title']
        dataAuthor = request.data['authorName']
        if dataAuthor == "" or dataAuthor == None:
            dataAuthor == 1
        else:
            dataAuthor = Author.objects.get(name=dataAuthor)

        dataEditor = request.data['editorName']
        if dataEditor == "" or dataEditor == None:
            dataEditor == 1
        else:
            dataEditor = Editor.objects.get(name=dataEditor)

        dataCollection = request.data['collectionName']
        if dataCollection == "" or dataCollection == None:
            dataCollection == 1
        else:
            dataCollection = Collection.objects.get(name=dataCollection)

        dataGenre = request.data['genre']

        Book.objects.create(title=dataTitle, author=dataAuthor, editor=dataEditor, collection=dataCollection, genre=dataGenre)
        return 0

