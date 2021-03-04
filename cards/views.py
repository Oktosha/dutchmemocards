"""
Module with views https://docs.djangoproject.com/en/3.1/topics/http/views/
"""

from django.shortcuts import render

from .models import Card

# Create your views here.
def study(request):
    """
    Display app for studying cards. Currently displays last 5 added cards.
    TODO: display different sets of cards depending on request
    """
    cards = list(Card.objects.order_by("-pub_date")[:5].values("answer", "clue"))
    return render(request, "cards/study.html", {"cards": cards})
