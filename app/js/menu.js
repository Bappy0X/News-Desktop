const { remote } = require("electron");
var win = remote.BrowserWindow.getFocusedWindow();

$("#minimise").click(function() {
    win.minimize();
});

function updateMaxButton() {
    win.isMaximized() ? $("#maximise span").attr("class", "far fa-window-restore") : $("#maximise span").attr("class", "far fa-window-maximize");
};

$("#maximise").click(function() {
    win.isMaximized() ? win.unmaximize() : win.maximize()
});

win.on("maximize", updateMaxButton).on("unmaximize", updateMaxButton);
$(document).ready(updateMaxButton);

$("#close").click(function() {
    win.close();
});