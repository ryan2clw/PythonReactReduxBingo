"""
Form the JSON that we need
"""
from rest_framework import serializers
from play.models import Row, Card

class RowSerializer(serializers.ModelSerializer):
    """ row JSON """
    class Meta:
        model = Row
        fields = ['b', 'i', 'n', 'g', 'o', 'card']

    def get_queryset(self):
        """ returns list of rows """
        return Row.objects.all()

class CardSerializer(serializers.ModelSerializer):
    """ card JSON """
    class Meta:
        model = Card
        fields = ['id', 'created_on']
        depth = 1