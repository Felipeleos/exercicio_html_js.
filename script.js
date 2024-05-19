document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    
    // Obtém o elemento de mensagem
    const mensagem = document.getElementById('mensagem');

    // Valida se o campo B é maior que o campo A
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido: O número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido: O número B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }
});