import React from "react";
import ContentType from "./ContentType";
import ActionType from "./ActionType";
import { GenerateGUID } from "../Utils";

const DefaultMessage = {
  CurrentID: undefined,
  RoomID: undefined,
  MessageContent: {
    ActionType: undefined,
    ContentType: undefined,
    ContentValue: undefined
  }
};

function GetDefaultObject() {
  return Object.assign({}, DefaultMessage);
}

const MessageBuilder = {
  AppConnected: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.APP_CONNECTED;
    returnMessage.MessageContent.ContentType = ContentType.TEXT_PLAIN;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  AppDisconected: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.APP_DISCONNECTED;
    returnMessage.MessageContent.ContentType = ContentType.APPLICATION_JSON;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  HostConnected: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.HOST_CONNECTED;
    returnMessage.MessageContent.ContentType = ContentType.APPLICATION_JSON;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  HostDisconnected: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.HOST_DISCONNECTED;
    returnMessage.MessageContent.ContentType = ContentType.APPLICATION_JSON;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  AnexoPedidoMedico: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.PEDIDO_MEDICO_ANEXO;
    returnMessage.MessageContent.ContentType = ContentType.APPLICATION_BASE64;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  Texto: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.ENVIAR_TEXTO_LAUDO;
    returnMessage.MessageContent.ContentType = ContentType.TEXT_PLAIN;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  Audio: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.DITADO_AUDIO;
    returnMessage.MessageContent.ContentType = ContentType.APPLICATION_BASE64;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  StateChanged: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.STATE_CHANGED;
    returnMessage.MessageContent.ContentType = ContentType.APPLICATION_JSON;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  Laudar: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.ATALHO_ACAO_LAUDAR;
    returnMessage.MessageContent.ContentType = ContentType.APPLICATION_JSON;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  Revisar: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.ATALHO_ACAO_REVISAR;
    returnMessage.MessageContent.ContentType = ContentType.APPLICATION_JSON;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  LaudarRevisar: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType =
      ActionType.ATALHO_ACAO_LAUDAR_REVISAR;
    returnMessage.MessageContent.ContentType = ContentType.APPLICATION_JSON;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  ReconhecimentoSTT: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.RECONHECIMENTO_VOZ_STT;
    returnMessage.MessageContent.ContentType = ContentType.TEXT_PLAIN;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  },
  ComandoAssistente: content => {
    let returnMessage = GetDefaultObject();
    returnMessage.CurrentID = GenerateGUID();
    returnMessage.RoomID = "";
    returnMessage.MessageContent.ActionType = ActionType.COMANDO_ASSISTENTE;
    returnMessage.MessageContent.ContentType = ContentType.APPLICATION_JSON;
    returnMessage.MessageContent.ContentValue = content;
    return returnMessage;
  }
};

export { MessageBuilder, ContentType, ActionType };
