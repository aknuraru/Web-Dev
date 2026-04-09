from django.db import models
class Movie(models.Model):
    title = models.CharField(max_length=200)
    director = models.CharField(max_length=100)
    year = models.IntegerField()
    rating = models.FloatField()
    def to_json(self):
        return {
            "id":self.id,
            "title": self.title,
            "director": self.director,
            "year": self.year,
            "rating": self.rating,
        }
# Create your models here.
