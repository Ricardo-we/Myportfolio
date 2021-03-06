# Generated by Django 3.2.9 on 2021-11-29 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_alter_projects_project_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blogs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blog_title', models.CharField(max_length=200)),
                ('blog_intro', models.TextField()),
                ('blog_intro_image', models.ImageField(upload_to='')),
                ('blog_body', models.TextField()),
                ('blog_body_image', models.ImageField(upload_to='')),
                ('blog_closing', models.TextField()),
            ],
            options={
                'verbose_name': 'Blog',
                'verbose_name_plural': 'Blogs',
            },
        ),
    ]
