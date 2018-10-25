import { BrowserWindow, globalShortcut, ipcMain } from "electron";
import * as path from "path";

export class Trakr {
  public win: BrowserWindow;
  public app: Electron.App;

  constructor(app: Electron.App) {
    this.app = app;
  }

  public init() {
    this.app.on("ready", () => {
      this.registerShortcuts();
      this.registerListeners();
      this.createWindow();
    });
  }

  private createWindow() {
    this.win = new BrowserWindow({
      autoHideMenuBar: true,
      center: true,
      frame: false,
      transparent: true
      // backgroundColor: '#222'
    });

    this.win.loadFile(path.join(__dirname, "../www/index.html"));
    // this.win.webContents.openDevTools();
    this.win.focus();
  }

  private registerListeners() {
    this.win.on("blur", () => {
      console.log("blur event emmited");
    });

    ipcMain.on("quit", () => {
      this.app.quit();
    });

    ipcMain.on("keyup", (event: Electron.Event, args: string) => {
      console.error(args);
    });
  }

  private registerShortcuts() {
    globalShortcut.register("CommandOrControl+Shift+0", () => {
      if (this.win.isVisible()) {
        this.win.emit("blur");
      } else {
        console.log("showing window");
        this.win.show();
      }
    });
  }
}
