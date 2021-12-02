from django.shortcuts import redirect, render, HttpResponse
from .models import Blogs, Projects
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
def home(request):
    projects = Projects.objects.all()
    if(request.method == 'GET'):
        failed = request.GET.get('failed')
        return render(request, 'home/index.html', {'projects': projects, 'failed': failed})
    return render(request, 'home/index.html', {'projects': projects})

def blogs_display(request):
    blogs = Blogs.objects.all()
    return render(request, 'home/blogs_display.html', {'blogs': blogs})

def blog(request, blog_title):
    blog_info = Blogs.objects.get(blog_title=blog_title)
    return render(request, 'home/blog.html', {'blog_info':blog_info})

def checkMailForm(request):
    try:
        if request.method == 'POST':
            gmail = request.POST.get('gmail')
            subject = request.POST.get('subject')
            message = request.POST.get('message')
            recipient_list = [settings.EMAIL_HOST_USER]
            send_mail(subject, message, gmail, recipient_list, fail_silently=False)
            return redirect('/')
    except:
        return redirect('/?failed=true')