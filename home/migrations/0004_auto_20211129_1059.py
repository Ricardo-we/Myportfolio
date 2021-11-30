# Generated by Django 3.2.9 on 2021-11-29 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_blogs'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogs',
            name='blog_body',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='blogs',
            name='blog_body_image',
            field=models.ImageField(blank=True, null=True, upload_to='blog_images'),
        ),
        migrations.AlterField(
            model_name='blogs',
            name='blog_closing',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='blogs',
            name='blog_intro_image',
            field=models.ImageField(blank=True, null=True, upload_to='blog_images'),
        ),
    ]