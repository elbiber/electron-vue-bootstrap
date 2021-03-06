"use strict";

const electron = require("electron");
const path = require("path");
const reload = require("electron-reload");
const isDev = require("electron-is-dev");
const { app, BrowserWindow, ipcMain, dialog } = electron;
const menus = require("./src/main/menus");

let mainWindow = null;

if (isDev) {
  reload(__dirname, { electron: require("electron-prebuilt") });
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", () => {
  mainWindow = new BrowserWindow({ width: 1920, height: 1080, show: false });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  if (isDev) {
    mainWindow.webContents.openDevTools();
    //require('vue-devtools').install();
  }
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  menus.buildMenu();
});

ipcMain.on("show-dialog", (e, arg) => {
  const msgInfo = {
    title: "My App Alert",
    message: arg.message,
    buttons: ["OK"]
  };
  dialog.showMessageBox(msgInfo);
  e.sender.send("click-reply", "clicking back");
});

ipcMain.on("asynchronous-message", (event, arg) => {
  console.log(arg); // prints "ping"
  event.sender.send("asynchronous-reply", "pong");
});

ipcMain.on("synchronous-message", (event, arg) => {
  console.log(arg); // prints "ping"
  event.returnValue = "pong";
});
