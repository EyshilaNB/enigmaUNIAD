function verificarResposta() {
    var respostaDigitada = document.getElementById("resposta").value.toLowerCase();

    console.log("Resposta Digitada:", respostaDigitada);  // Adicione esta linha

    // Substitua 'resposta_correta' pela resposta correta do enigma
    if (respostaDigitada === 'Vão e procurem entender o que quer dizer este trecho das Escrituras Sagradas: “Eu quero que as pessoas sejam bondosas e não que me ofereçam sacrifícios de animais.” Porque eu vim para chamar os pecadores e não os bons.') {
        console.log("Resposta Correta!");  // Adicione esta linha
        window.location.href = 'eng2p.html';
    } else {
        alert('Resposta incorreta. Tente novamente.');
    }
}
