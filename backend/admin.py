from django.contrib import admin
from .models import Author, Editor, Collection, Book

# Register your models here.
admin.site.register(Author)
admin.site.register(Editor)
admin.site.register(Collection)
admin.site.register(Book)