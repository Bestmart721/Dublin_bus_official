# Generated by Django 3.0.3 on 2020-07-07 00:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20200706_2231'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='leap_password',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='profile',
            name='leap_username',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
    ]
