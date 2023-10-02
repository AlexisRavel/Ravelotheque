from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=32, null=False)
    birthDate = models.DateField(null=False)
    deathDate = models.DateField(null=True)
    biography = models.TextField(editable=True, null=True)

    def __str__(self):
        return self.name

class Editor(models.Model):
    name = models.CharField(max_length=16, null=False)

    def __str__(self):
        return self.name

class Collection(models.Model):
    name = models.CharField(max_length=16, null=False)
    editor = models.ForeignKey(Editor, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.name

class Book(models.Model):
    GENRE = [
        ("SF", "Science-Fiction"),
        ("PH", "Philosophie"),
        ("RO", "Roman"),
    ]

    title = models.CharField(max_length=40, null=False)
    author = models.ForeignKey(Author, on_delete=models.PROTECT, null=False)
    editor = models.ForeignKey(Editor, on_delete=models.PROTECT, null=True)
    collection = models.ForeignKey(Collection, on_delete=models.PROTECT, null=True)
    genre = models.CharField(max_length=24, choices=GENRE, null=True)

    def __str__(self):
        return self.title