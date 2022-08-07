from django.db import models


# Create your models here.


class Projects(models.Model):
    project_name = models.TextField()
    project_image = models.ImageField(upload_to="project_images")
    project_link = models.CharField(max_length=150)

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"


class Knowledge(models.Model):
    icon_name = models.CharField(max_length=255, null=False, blank=False)
    icon_color = models.CharField(max_length=100, null=False, blank=False, default="#fff")
    icon_type = models.CharField(max_length=100, null=False, blank=False, default="fontawesome")
    knowledge_name = models.CharField(max_length=120, null=False, blank=False)
    description = models.TextField(null=False, blank=False)

    class Meta:
        verbose_name = "My Knowledge"
        verbose_name_plural = "My knowledges"


class Blogs(models.Model):
    blog_title = models.CharField(max_length=200)
    blog_intro = models.TextField()
    blog_intro_image = models.ImageField(blank=True, null=True, upload_to="blog_images")
    blog_body = models.TextField(blank=True, null=True)
    blog_body_image = models.ImageField(blank=True, null=True, upload_to="blog_images")
    blog_closing = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Blog"
        verbose_name_plural = "Blogs"
