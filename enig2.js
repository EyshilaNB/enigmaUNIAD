function verificarResposta() {
    var respostaDigitada = document.getElementById("resposta").value.toLowerCase();

    console.log("Resposta Digitada:", respostaDigitada);  // Adicione esta linha

    // Substitua 'resposta_correta' pela resposta correta do enigma
    if (respostaDigitada === 'Mateus 9:13') {
        console.log("Resposta Correta!");  // Adicione esta linha
        window.location.href = 'eng2p.html';
    } else {
        alert('Resposta incorreta. Tente novamente.')
