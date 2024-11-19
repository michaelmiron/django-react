# integers/views.py
from django.http import JsonResponse, HttpResponse
from .models import IntegerRecord
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def sort_and_save(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        integers = data.get('integers', [])

        # Convert list to string for saving
        unsorted_values = ",".join(map(str, integers))
        sorted_values = ",".join(map(str, sorted(integers)))

        # Save to database
        record = IntegerRecord(unsorted_values=unsorted_values, sorted_values=sorted_values)
        record.save()

        # Return sorted values as JSON
        return JsonResponse({'sorted': sorted(integers)})

    # Return an HTTP 405 Method Not Allowed response for non-POST requests
    return HttpResponse("Method Not Allowed", status=405)
