// Función para actualizar el total
function actualizarTotal() {
    var row = this.parentNode.parentNode; // Obtener la fila actual
    var precio = parseFloat(row.children[1].textContent); // Obtener el precio de la segunda columna
    var cantidad = parseFloat(this.value); // Obtener la cantidad ingresada en el input
  
    var total = precio * cantidad; // Calcular el total
  
    row.children[3].textContent = total.toFixed(2); // Mostrar el total en la cuarta columna
  }
  
  window.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los elementos de entrada de cantidad
    var quantityInputs = document.querySelectorAll('#productTable input[type="number"]');
  
    // Asociar evento de cambio a cada elemento de entrada de cantidad
    quantityInputs.forEach(function(input) {
      input.addEventListener('change', actualizarTotal);
    });
  
    // Obtener el botón "Limpiar vacíos"
    var limpiarBtn = document.getElementById('limpiar');
  
    // Asociar evento de clic al botón
    limpiarBtn.addEventListener('click', limpiarVacios);
  
    // Función para limpiar campos vacíos
    function limpiarVacios() {
      var table = document.getElementById('productTable');
      var rows = table.querySelectorAll('tr');
  
      var total = 0;
  
      rows.forEach(function(row) {
        var input = row.querySelector('input[type="number"]');
        if (input && input.value === '') {
          row.remove(); // Eliminar la fila si el input está vacío
        } else {
          var subtotal = parseFloat(row.children[3].textContent);
          if (!isNaN(subtotal)) {
            total += subtotal; // Sumar el subtotal al total
          }
        }
      });
  
      // Crear una nueva fila para mostrar el total a pagar
      var totalRow = document.createElement('tr');
      var totalCell = document.createElement('td');
      totalCell.setAttribute('colspan', '4');
      totalCell.textContent = 'Total a pagar: ' + total.toFixed(2);
      totalRow.appendChild(totalCell);
  
      table.appendChild(totalRow);
    }
  });
  