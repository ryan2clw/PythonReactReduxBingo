
""" These are endpoints that get or create cards and rows """
from rest_framework import generics
from play.models import Card
from play.serializers import CardSerializer

class CardList(generics.ListCreateAPIView):
    """ Get or create cards """
    queryset = Card.objects.all()[:6]
    serializer_class = CardSerializer
