# Generated by Django 4.0 on 2022-08-07 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_knowledge'),
    ]

    operations = [
        migrations.AddField(
            model_name='knowledge',
            name='icon_color',
            field=models.CharField(default='#fff', max_length=100),
        ),
    ]
