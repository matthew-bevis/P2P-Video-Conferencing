from django.db import models
from django.contrib.auth.models import User


class Session(models.Model):
    host_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='hosted_sessions')
    session_key = models.CharField(max_length=255, unique=True)
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=50)

    def __str__(self):
        return f'Session {self.id} hosted by {self.host_user.username}'

class Participant(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name='participants')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='participated_sessions')
    join_time = models.DateTimeField(auto_now_add=True)
    leave_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f'Participant {self.user.username} in session {self.session.id}'

class EncryptionKey(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name='encryption_keys')
    encryption_key = models.CharField(max_length=255)
    valid_from = models.DateTimeField()
    valid_until = models.DateTimeField()

    def __str__(self):
        return f'Key for session {self.session.id}'