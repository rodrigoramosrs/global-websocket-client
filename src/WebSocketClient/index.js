/* global WebSocket */
/* eslint no-unused-vars: "off" */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Base64 } from "../Utils";

function NormalizeDataToBase64(data) {
  let message = Object.assign({}, data);

  if (typeof message === "object") message = JSON.stringify(message);

  if (!Base64.isBase64(message)) message = Base64.btoa(message);

  return message;
}

var _websocket;
const WebSocketClient = {
  send: data => {
    if (!_websocket) return;

    _websocket.send(data);
  },
  sendaAsBase64: data => {
    if (!_websocket) return;
    let message = NormalizeDataToBase64(data);
    if (!isBase64(message)) message = _websocket.send(message);
  },
  close: () => {
    if (!_websocket) return;

    _websocket.close();
    _websocket = undefined;
  },
  isConnected: () => {
    if (!_websocket) return false;

    return _websocket.readyState === 1;
  },
  getState: () => {
    if (!_websocket) return 3;

    return _websocket.readyState;
  },
  connect: (
    url,
    openCallback,
    onErrorCallback,
    onMessageCallback,
    onCloseCallback
  ) => {
    _websocket = new WebSocket(url);
    _websocket.onopen = event => {
      if (openCallback) openCallback(event);
    };
    _websocket.onmessage = event => {
      if (onMessageCallback) onMessageCallback(event);
    };
    _websocket.onerror = event => {
      if (onErrorCallback) onErrorCallback(event);
    };
    _websocket.onclose = event => {
      if (onCloseCallback) onCloseCallback(event);
    };
  }
};

export default WebSocketClient;
//export default WebSocketClient;
