from .models import Session, Participant, EncryptionKey
from django.contrib import admin

admin.site.register(Session)
admin.site.register(Participant)
admin.site.register(EncryptionKey)
