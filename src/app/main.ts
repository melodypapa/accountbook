import { app, BrowserWindow } from "electron";
import * as path from "path";

app.on("ready", () => {
    console.log('Hello from Electron');
    let mainWindow = new BrowserWindow();
    mainWindow.webContents.loadFile(path.join(__dirname,'../src/app/index.html'));
});