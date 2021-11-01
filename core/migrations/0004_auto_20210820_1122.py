# Generated by Django 3.2.4 on 2021-08-20 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20210820_1119'),
    ]

    operations = [
        migrations.AlterField(
            model_name='truck',
            name='_unit_number_lower',
            field=models.CharField(default='', max_length=20),
            preserve_default=False,
        ),
        migrations.AlterUniqueTogether(
            name='truck',
            unique_together={('_unit_number_lower', 'fleet'), ('vin', 'fleet')},
        ),
    ]