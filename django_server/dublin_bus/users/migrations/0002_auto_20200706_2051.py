# Generated by Django 3.0.3 on 2020-07-06 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='leap_password',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
