function calcularCosto() {
  const horas = Number(document.getElementById('horas').value);
  const minutos = Number(document.getElementById('minutos').value);
  const tomas = Number(document.getElementById('tomas').value);

  if ((horas >= 0 && minutos >= 0 && minutos < 60) && tomas >= 0) {
    const tiempoTotal = horas + (minutos / 60); // Convertir minutos a horas
    let costoTotal = 0;
    
    if (tiempoTotal < 0.5) {
      costoTotal = tomas * 500;
    } else if (tiempoTotal < 1) {
      if (tomas > 0) {
        costoTotal = 700 + (tomas - 1) * 300;
      }
    } else {
      const costoPorHora = 1000;
      costoTotal = tiempoTotal * costoPorHora;
    }
    
    // Redondear al siguiente múltiplo de 100
    costoTotal = Math.ceil(costoTotal / 100) * 100;

    document.getElementById('resultado').innerHTML = `
      <h2>Resultado</h2>
      <p><strong>Tiempo:</strong> ${horas} horas y ${minutos} minutos</p>
      <p><strong>Número de tomas:</strong> ${tomas}</p>
      <p><strong>Costo total:</strong> $${costoTotal}</p>
    `;
  } else {
    alert('Por favor, llena todos los campos correctamente.');
  }
}
