const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
    // Создаем окно Electron
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            webSecurity: false // Отключаем политику безопасности для файлов (не рекомендуется для production)
        }
    });

    // Загружаем локальные файлы из папки dist
    win.loadFile(path.join(__dirname, 'dist', 'fuse', 'index.html'));

    // Обработка неизвестных путей
    win.webContents.on('did-fail-load', () => {
        win.loadFile(path.join(__dirname, 'dist', 'fuse', 'index.html'));
    });

    // Слушаем закрытие окна
    win.on('closed', () => {
        win = null;
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Закрытие приложения при закрытии всех окон на всех платформах
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Для macOS: при повторном открытии приложения откроется новое окно
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
