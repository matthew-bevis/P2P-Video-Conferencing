from django.contrib import admin
from django.urls import path, include
from .views import home
from django.views.generic import RedirectView
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
from . import views

router = DefaultRouter()
router.register(r'Session', views.SessionModelViewSet)
router.register(r'Participant', views.ParticipantModelViewSet)
router.register(r'EncryptionKey', views.EncryptionKeyModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('api/', include(router.urls)),
    path('favicon.ico', RedirectView.as_view(url='/static/favicon.ico')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
