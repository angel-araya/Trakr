// import { ipcRenderer } from "electron";

const { ipcRenderer } = require("electron");

document.body.onload = () => {
  document.getElementById("cmdInput").focus();
};

const cmdInput = document.getElementById("cmdInput") as HTMLInputElement;
const resultsList = document.getElementById("results") as HTMLUListElement;

cmdInput.onkeyup = (event: KeyboardEvent) => {
  if (event.which === 13) {
    ipcRenderer.send("quit");
  }

  ipcRenderer.send("keyup", cmdInput.value);
};
