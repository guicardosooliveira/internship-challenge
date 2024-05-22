export async function fetchApi(minNumber: number, maxNumber: number) {
    try{
    const response = await fetch(`http://127.0.0.1:8000/api/?start=${minNumber}&end=${maxNumber}`)
    const data = await response.json();
    return data['Result']
      
  } catch (error) {
    console.log(error)
  }
}   