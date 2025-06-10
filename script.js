function calcularCosto() {
  const horas = Number(document.getElementById('horas').value);
  const minutos = Number(document.getElementById('minutos').value);
  const tomas = Number(document.getElementById('tomas').value);

  if ((horas >= 0 && minutos >= 0 && minutos < 60) && tomas >= 0) {
    const tiempoTotal = horas + (minutos / 60); // Convertir minutos a horas
    let costoTotal = 0;
    
      costoTotal = tiempoTotal * 800 + tomas * 100;
    
    
    // Redondear al siguiente múltiplo de 100
    costoTotal = Math.floor(costoTotal / 100) * 100;

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
