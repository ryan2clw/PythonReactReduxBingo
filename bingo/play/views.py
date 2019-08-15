
""" These are endpoints that get or create cards and rows """
from rest_framework import generics
from play.models import Card, Row
from play.serializers import CardSerializer, RowSerializer

class CardList(generics.ListCreateAPIView):
    """ Get or create cards """
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class RowList(generics.ListCreateAPIView):
    """ Get or create rows """
    queryset = Row.objects.all()
    serializer_class = RowSerializer