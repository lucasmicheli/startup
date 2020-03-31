// Exercise 3

const wsUri = "wss://echo.websocket.org/";
let output;

function init() {
    output = document.getElementById("output");
    testWebSocket();
}

function testWebSocket() {
    websocket = new WebSocket(wsUri);
    websocket.onopen = onOpen;
    websocket.customSend = doSend;
    websocket.onclose = onClose;
    websocket.onmessage = onMessage;
    websocket.onerror = onError.bind(websocket);
}

function onOpen() {
    writeToScreen("CONNECTED");
    this.customSend("WebSocket rocks");
    //const send = doSend.bind(this);
}

function onClose() {
    writeToScreen("DISCONNECTED");
}

function onMessage() {
    writeToScreen('<span style="color: blue;">RESPONSE</span>');
    this.close();
}

function onError() {
    writeToScreen('<span style="color: red;">ERROR:</span>');
}

function doSend(message) {
    writeToScreen("SENT: " + message);
    this.send(message);
}

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

window.addEventListener("load", init, false);