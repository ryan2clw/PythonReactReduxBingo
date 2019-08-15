"""
Form the JSON that we need
"""
from random import sample
from rest_framework import serializers
from play.models import Row, Card

def card_data(card):
    """ populates card with 5 rows of random data """
    b_column = sample(range(1, 16), k=5)
    i_column = sample(range(16, 31), k=5)
    n_column = sample(range(31, 46), k=5)
    g_column = sample(range(46, 61), k=5)
    o_column = sample(range(61, 76), k=5)

    for _ in range(5):
        b_val = b_column.pop()
        i_val = i_column.pop()
        n_val = n_column.pop()
        g_val = g_column.pop()
        o_val = o_column.pop()
        row = Row.objects.create(b_val=b_val, i_val=i_val, n_val=n_val, g_val=
                                 g_val, o_val=o_val, card=card)
        row.save()

class CardSerializer(serializers.ModelSerializer):
    """ card JSON """
    class Meta:
        model = Card
        fields = ['id', 'created_on', 'rows']
        depth = 1

    def create(self, validated_data):
        card = Card.objects.create(**validated_data)
        card_data(card)
        card.save()
        return card
