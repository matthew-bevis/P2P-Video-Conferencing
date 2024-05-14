from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
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
    def post(self, request, *args, **kwargs):
        serializer = EncryptionKeySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)