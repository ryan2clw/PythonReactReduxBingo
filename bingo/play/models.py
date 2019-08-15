""" Generates SQL tables for Cards and Rows """
from django.db import models

class Card(models.Model):
    """ A bingo card with 5 rows. """
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Card: " + str(self.id) + ", " + str(self.created_on)

class Row(models.Model):
    """ Each property is a column on a bingo card, should have 5 rows per card """
    b_val = models.CharField(max_length=3)
    i_val = models.CharField(max_length=3)
    n_val = models.CharField(max_length=3)
    g_val = models.CharField(max_length=3)
    o_val = models.CharField(max_length=3)
    card = models.ForeignKey(
        'Card',
        on_delete=models.CASCADE,
        related_name='rows')

    def __str__(self):
        return self.b_val + " " + self.i_val + " " + self.n_val + "\
            " + self.g_val + " " + self.o_val
