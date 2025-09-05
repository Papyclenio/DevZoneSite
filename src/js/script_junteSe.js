function juntaSe() {
    const nome = window.document.getElementById("nome").value;
    const num = window.document.getElementById("numero").value;
    const mail = window.document.getElementById("email").value;

    const mensagem = `Olá! meu nome é ${nome}%0Aeste%0Aé%0Ao%0Ameu%0Aemail:${mail};%0Ae%0Aeste%0Aé%0Ao%0Ameu%0Anumero%0Ado%0Awhatsapp${num}`;

    const tell = " 244976591026";

     const url = `https://wa.me/${tell}?text=${mensagem}`;

    window.open(url, '_blank')

}