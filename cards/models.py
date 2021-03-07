"""
Module with Models

https://docs.djangoproject.com/en/3.1/topics/db/models/
"""

from django.db import models


class Card(models.Model):
    """
    Card is the core model of the app.
    Clue field is the clue in English.
    Answer field is the word in Dutch.
    """

    pub_date = models.DateTimeField("date published")
    clue = models.CharField(max_length=100)
    answer = models.CharField(max_length=100)
