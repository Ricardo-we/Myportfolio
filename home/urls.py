from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name="Home"),
    path('blog/', blogs_display, name="Blog"),
    path('blog/<str:blog_title>/', blog, name="BlogView"),
    path('sendmail/',checkMailForm, name="SendMail" )
]