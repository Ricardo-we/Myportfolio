from django.shortcuts import render, HttpResponse
from .models import Blogs, Projects

# Create your views here.
def home(request):
    projects = Projects.objects.all()
    return render(request, 'home/index.html', {'projects': projects})

def blogs_display(request):
    blogs = Blogs.objects.all()
    return render(request, 'home/blogs_display.html', {'blogs': blogs})

def blog(request, blog_title):
    blog_info = Blogs.objects.get(blog_title=blog_title)
    return render(request, 'home/blog.html', {'blog_info':blog_info})