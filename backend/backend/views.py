from rest_framework import viewsets
from .models import Session, Participant, EncryptionKey
from .serializers import SessionSerializer, ParticipantSerializer, EncryptionKeySerializer

class SessionModelViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class ParticipantModelViewSet(viewsets.ModelViewSet):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer

class EncryptionKeyModelViewSet(viewsets.ModelViewSet):
    queryset = EncryptionKey.objects.all()
    serializer_class = EncryptionKeySerializer