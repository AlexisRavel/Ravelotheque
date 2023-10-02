# Generated by Django 4.2.5 on 2023-10-02 14:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('birthDate', models.DateField()),
                ('deathDate', models.DateField(null=True)),
                ('biography', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Editor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=16)),
            ],
        ),
        migrations.CreateModel(
            name='Collection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=16)),
                ('editor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='backend.editor')),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
                ('genre', models.CharField(choices=[('SF', 'Science-Fiction'), ('PH', 'Philosophie'), ('RO', 'Roman')], max_length=24, null=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='backend.author')),
                ('collection', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='backend.collection')),
                ('editor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='backend.editor')),
            ],
        ),
    ]
