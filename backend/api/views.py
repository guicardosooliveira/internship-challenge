from django.http import JsonResponse
from .utils.calculateMMC import calculateIntervalMMC

def calculate(request):
    if request.method == 'GET':
        min_number = request.GET['start']
        max_number = request.GET['end']

        print(min_number, max_number)

        try:
            if min_number >= max_number:
                raise ValueError
        except ValueError:
            #return JsonResponse({'error': 'Parâmetros inválidos. Certifique-se de mandar um intervalo de números positivo e maior que 0.'})
            return JsonResponse({'error': f'min {min_number} max {max_number}'})
        
        result = calculateIntervalMMC(int(min_number), int(max_number))

        return JsonResponse({'Result': f'{result}'})