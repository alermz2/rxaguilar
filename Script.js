function calcularCosto() {
  const horas = Number(document.getElementById('horas').value);
  const minutos = Number(document.getElementById('minutos').value);
  const tomas = Number(document.getElementById('tomas').value);

  if ((horas >= 0 && minutos >= 0 && minutos < 60) && tomas >= 0) {
    const tiempoTotal = horas + (minutos / 60); // Convertir minutos a horas
    const costoPorHora = 50; // Ajusta según tu tarifa
    const costoPorToma = 20; // Ajusta según tu tarifa
    const costoTotal = (tiempoTotal * costoPorHora) + (tomas * costoPorToma);

    document.getElementById('resultado').innerHTML = `
      <h2>Resultado</h2>
      <p><strong>Tiempo:</strong> ${horas} horas y ${minutos} minutos</p>
      <p><strong>Número de tomas:</strong> ${tomas}</p>
      <p><strong>Costo total:</strong> $${costoTotal.toFixed(2)}</p>
    `;
  } else {
    alert('Por favor, llena todos los campos correctamente.');
  }
}
