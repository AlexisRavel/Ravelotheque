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
    editorName = serializers.CharField(source='editor.name')

    class Meta:
        model = Collection
        fields = ('name', 'editorName')

class BookSerializer(serializers.ModelSerializer):
    authorName = serializers.CharField(source='author.name')
    editorName = serializers.CharField(source='editor.name')
    collectionName = serializers.CharField(source='collection.name')

    class Meta:
        model = Book
        fields = ('title', 'authorName', 'editorName', 'collectionName', 'genre')