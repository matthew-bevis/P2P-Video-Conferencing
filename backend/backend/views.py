import logging
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Session, Participant, EncryptionKey
from .serializers import SessionSerializer, ParticipantSerializer, EncryptionKeySerializer
from django.http import HttpResponse
from datetime import datetime, timedelta
from django.shortcuts import get_object_or_404

# Set up logging
logger = logging.getLogger(__name__)

def home(request):
    return HttpResponse("Welcome to the Home Page!")

class SessionModelViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer

class ParticipantModelViewSet(viewsets.ModelViewSet):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer

class EncryptionKeyModelViewSet(viewsets.ModelViewSet):
    queryset = EncryptionKey.objects.all()
    serializer_class = EncryptionKeySerializer

    def perform_create(self, serializer):
        session_id = self.request.data.get('session')
        session = get_object_or_404(Session, id=session_id)
        now = datetime.now()
        valid_from = now
        valid_until = now + timedelta(hours=2)
        serializer.save(session=session, valid_from=valid_from, valid_until=valid_until)

    def create(self, request, *args, **kwargs):
        try:
            logger.info("Received data: %s", request.data)
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            logger.info("Encryption key stored successfully")
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        except Exception as e:
            logger.error("Error: %s", str(e))
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


