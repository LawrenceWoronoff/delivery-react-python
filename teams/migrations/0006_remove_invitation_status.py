# Generated by Django 3.2.4 on 2021-08-25 12:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0005_auto_20210823_1208'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='invitation',
            name='status',
        ),
    ]
