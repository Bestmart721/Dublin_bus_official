# Generated by Django 3.0.3 on 2020-07-22 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bus', '0003_auto_20200722_1128'),
    ]

    operations = [
        migrations.CreateModel(
            name='Covid',
            fields=[
                ('Date', models.CharField(max_length=45, primary_key=True, serialize=False)),
                ('RequiringICUCovidCases', models.CharField(max_length=45)),
                ('CommunityTransmission', models.CharField(max_length=45)),
                ('TotalConfirmedCovidCases', models.CharField(max_length=45)),
                ('TotalCovidDeaths', models.CharField(max_length=45)),
                ('ConfirmedCovidCases', models.CharField(max_length=45)),
                ('ConfirmedCovidDeaths', models.CharField(max_length=45)),
                ('CloseContact', models.CharField(max_length=45)),
                ('StatisticsProfileDate', models.CharField(max_length=45)),
                ('FID', models.CharField(max_length=45)),
                ('TravelAbroad', models.CharField(max_length=45)),
                ('HospitalisedCovidCases', models.CharField(max_length=45)),
                ('timestamp', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Forecastweather',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dt', models.CharField(max_length=45)),
                ('temp', models.CharField(max_length=45, null=True)),
                ('wind_speed', models.CharField(max_length=45, null=True)),
                ('wind_deg', models.CharField(max_length=45, null=True)),
                ('weather_id', models.CharField(max_length=45, null=True)),
                ('weather_main', models.CharField(max_length=45, null=True)),
                ('weather_description', models.CharField(max_length=45, null=True)),
                ('weather_icon', models.CharField(max_length=45, null=True)),
            ],
        ),
    ]
