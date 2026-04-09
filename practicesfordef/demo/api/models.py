from django.db import models
class Movie(models.Model):
    title = models.CharField(max_length=200)
    director= models.CharField(max_length=100)
    year=models.IntegerField()
    rating=models.FloatField()
    def __str__(self):
        return self.title

# Create your models here.
