function verificarResposta() {
    var respostaDigitada = document.getElementById("resposta").value.toLowerCase();

    console.log("Resposta Digitada:", respostaDigitada);  // Adicione esta linha

    // Substitua 'resposta_correta' pela resposta correta do enigma
    if (respostaDigitada === 'jonas') {
        console.log("Resposta Correta!");  // Adicione esta linha
        window.location.href = 'enig1p.html';
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
}
 
