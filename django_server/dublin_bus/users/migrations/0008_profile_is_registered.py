# Generated by Django 3.0.3 on 2020-07-15 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_auto_20200715_1744'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='is_registered',
            field=models.BooleanField(default=False),
        ),
    ]
