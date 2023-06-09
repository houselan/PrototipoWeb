const inputQtds = document.querySelectorAll('.input-qtd');
const decrementButtons = document.querySelectorAll('.btn-qtd.btn-minus');
const incrementButtons = document.querySelectorAll('.btn-qtd.btn-plus');
const valorUnitarios = document.querySelectorAll('.valor-unitario');
const subtotais = document.querySelectorAll('.subtotal');
const subtotalCompra = document.getElementById('subtotal-compra');
const totalCompra = document.getElementById('total-value');

for (let i = 0; i < inputQtds.length; i++) {
    const inputQtd = inputQtds[i];
    const decrementButton = decrementButtons[i];
    const incrementButton = incrementButtons[i];
    const valorUnitario = valorUnitarios[i];
    const subtotal = subtotais[i];
  
    decrementButton.addEventListener('click', () => {
      if (inputQtd.value > 1) {
        inputQtd.value = parseInt(inputQtd.value) - 1;
        calcularSubtotal();
      }
    });
  
    incrementButton.addEventListener('click', () => {
      inputQtd.value = parseInt(inputQtd.value) + 1;
      calcularSubtotal();
    });
}


function calcularSubtotal() {
  let subtotais = document.querySelectorAll(".subtotal");
  let somaSubtotais = 0;
  
  subtotais.forEach((subtotal, i) => {
    const row = subtotal.closest('.produto-item');
    const qtd = inputQtds[i].value;
    const valor = Number(valorUnitarios[i].innerText.replace('R$', '').trim());
    subtotal.textContent = "R$ " + (valor * qtd).toFixed(2);
    somaSubtotais += Number(subtotal.textContent.replace("R$", "").trim());
  });
  
  subtotalCompra.textContent = "R$ " + somaSubtotais.toFixed(2);
  totalCompra.textContent = "R$ " + (somaSubtotais + 20).toFixed(2);
}
window.addEventListener('load', () => {
    calcularSubtotal();
});
