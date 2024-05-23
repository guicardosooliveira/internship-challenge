export async function fetchApi(minNumber: number, maxNumber: number) {
    try{
      const backendUrl = process.env.BACKEND_URL  
      const response = await fetch(`${backendUrl}/api/?start=${minNumber}&end=${maxNumber}`)
      const data = await response.json();

      if (!data) {
        throw new Error('Invalid response format');
      }

      return {
        error: null,
        result: data['Result']
      }

  } catch (error) {
    return {
      error: 'Erro em buscar os dados no servidor',
      result: null
    }
  }
}