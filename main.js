const { app, BrowserWindow, Notification } = require('electron')
const axios = require('axios');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow();
    novaNotification()
})

function novaNotification() {
    if (!Notification.isSupported()) {
        console.log("Notificações não são suportadas no ambiente");
        return;
    }

    const novaNotification = new Notification({
        title: "Aplicativo aberto",
        body: "O aplicativo foi aberto com sucesso",
        silent: true,
        timeoutType: "default"
    });

    console.log("Exibindo Notificação");
    novaNotification.show();
}
