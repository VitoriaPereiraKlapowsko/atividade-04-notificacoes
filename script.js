document.getElementById("notificar").addEventListener("click", function() {
    const titulo = document.getElementById("titulo").value;
    const conteudo = document.getElementById("conteudo").value;

    if (titulo && conteudo) {
        novaNotification(titulo, conteudo);
    } else {
        alert("Preencha o título e o conteúdo da notificação.");
    }
});

function novaNotification(title, message) {
    if (!Notification.isSupported()) {
        console.log("Notificações não são suportadas no ambiente");
        return;
    }

    const novaNotification = new Notification({
        title: title,
        body: message,
        silent: true,
        timeoutType: "default",
    });

    console.log("Exibindo Notificação");
    novaNotification.show();
}
