from django.http.response import JsonResponse
from .models import Movie
def list(request):
    movies = Movie.objects.all()
    move=[m.to_json() for m in movies]
    return JsonResponse(move, safe=False)
def detail(request, id):
    try:
        movie = Movie.objects.get(id=id)
    except Movie.DoesNotExist:
        return JsonResponse({'error':'Movie not found'}, status=404)
    return JsonResponse(movie.to_json(), safe=False)

# Create your views here.
