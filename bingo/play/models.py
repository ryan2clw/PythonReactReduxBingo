from django.db import models

class Card(models.Model):
   """ A bingo card with 5 rows. """
   created_on = models.DateField(auto_now_add=True)

   def __str__(self):
       return self.created_on

class Row(models.Model):
   """ Each property is a column on a bingo card, should have 5 rows per card """
   b = models.CharField(max_length=3)
   i = models.CharField(max_length=3)
   n = models.CharField(max_length=3)
   g = models.CharField(max_length=3)
   o = models.CharField(max_length=3)
   card = models.ForeignKey(
       'Card',
       on_delete=models.CASCADE,
       related_name='card')

   def __str__(self):
        return str(self.b) + "  " + str(self.i) + "  " + str(self.n) + "\
          " + str(self.g) + "  " + str(self.o) + ", created_on:" + str(self.card)
