# models.py
from django.db import models

class IntegerRecord(models.Model):
    unsorted_values = models.CharField(max_length=50)
    sorted_values = models.CharField(max_length=50)

    def __str__(self):
        return f"Unsorted: {self.unsorted_values}, Sorted: {self.sorted_values}"
