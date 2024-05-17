from django.http import JsonResponse
from .utils.calculateMMC import calculateIntervalMMC

def calculate(request):
    if request.method == 'GET':
        min_number = request.GET['start']
        max_number = request.GET['end']

        try:
            if min_number >= max_number:
                raise ValueError
        except ValueError:
            return JsonResponse({'error': 'Parâmetros inválidos. Certifique-se de mandar um intervalo de números positivo e maior que 0.'})
        
        result = calculateIntervalMMC(min_number, max_number)

        return JsonResponse({'Result': f'{result}'})