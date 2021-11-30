from django.db import models

# Create your models here.
class Projects(models.Model):
    project_name = models.TextField()
    project_image = models.ImageField(upload_to="project_images")
    project_link = models.CharField(max_length=150)
    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"


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