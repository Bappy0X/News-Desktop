const $ = require("jquery");
const { remote } = require("electron");
var win = remote.getCurrentWindow();

$("#minimise").click(function() {
    win.minimize();
});

$("#maximise").click(function() {
    if(win.isMaximized()){
        win.unmaximize();
    }
    else{
        win.maximize();
    }
});

$("#close").click(function() {
    win.close();
});