# Generated by Django 3.2.4 on 2021-09-29 10:55

from django.db import migrations

def forward( apps, schema_editor):
    Member = apps.get_model('teams', 'Member')
    Invitation = apps.get_model('teams', 'Invitation')

    for klas in [ Member, Invitation]:
        klas.objects.filter( role= 'DRIVER').update( role= 'MEMBER')

class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0012_auto_20210929_1050'),
    ]

    operations = [
        migrations.RunPython( forward, migrations.RunPython.noop),
    ]