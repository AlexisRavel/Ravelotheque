from rest_framework import serializers
from .models import Author, Editor, Collection, Book

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('name', 'birthDate', 'deathDate', 'biography')

class EditorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Editor
        fields = ('name',)

class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = ('name', 'editor')

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('title', 'author', 'editor', 'collection', 'genre')