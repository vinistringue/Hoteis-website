// Espera até que o documento HTML esteja totalmente carregado
$(document).ready(function () {
    // Seleciona o botão "Saiba mais" pelo seu ID
    var saibaMaisBtn = $('#saiba-mais-btn');

    // Adiciona um evento de clique ao botão
    saibaMaisBtn.click(function (event) {
        // Impede que o link padrão funcione (evita que a página seja recarregada)
        event.preventDefault();

        // Obtém a posição vertical da seção de reserva
        var reservaSectionOffset = $('#reserva').offset().top;

        // Anima o scroll suave até a seção de reserva
        $('html, body').animate({
            scrollTop: reservaSectionOffset
        }, 1000); // A animação dura 1 segundo (1000 milissegundos)
    });
});
