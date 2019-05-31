import React, { Component } from "react";
import { render } from "react-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import WebSocketClient from "../../src";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Show: false,
      WebSocketUri: "wss://echo.websocket.org",
      MessageToSend: "",
      MessageReceived: "",
      connected: false
    };

    this.textLog = React.createRef();
  }

  componentDidMount() {
    //WebSocketClient.connect();
  }

  componentDidUpdate() {
    this.textLog.current.scrollTop = this.textLog.current.scrollHeight;
  }
  connect = () => {
    WebSocketClient.connect(
      this.state.WebSocketUri,
      this.openCallback,
      this.onErrorCallback,
      this.onMessageCallback,
      this.onCloseCallback
    );
  };

  appendLog = log => {
    let message =
      this.state.MessageReceived.length <= 0
        ? log
        : this.state.MessageReceived + "\r\n" + log;
    this.setState({
      MessageReceived: message
    });
  };
  openCallback = () => {
    this.setState({ connected: true });
    this.appendLog("openCallback: Connection opened.");
  };
  onErrorCallback = () => {
    this.setState({ connected: false });
    this.appendLog("onErrorCallback: Fail to connect...");
  };
  onMessageCallback = event => {
    debugger;
    this.appendLog("onMessageCallback: " + event.data);
  };

  onCloseCallback = () => {
    this.setState({ connected: false });
    this.appendLog("onCloseCallback: Connection closed");
  };

  disconnect = () => {
    WebSocketClient.close();
  };

  send = () => {
    WebSocketClient.send(this.state.MessageToSend);
    this.setState({ MessageToSend: "" });
  };

  showHide = () => {
    this.setState({ Show: !this.state.Show });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Global websocket client demo</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <div style={{ float: "left" }}>
              <strong>Location:</strong>
              <br />
              <input
                value={this.state.WebSocketUri}
                onChange={element =>
                  this.setState({ WebSocketUri: element.target.value })
                }
                size="35"
              />

              <br />
              <span style={{ fontSize: "smaller", color: "black" }}>
                Use secure WebSocket (TLS)
              </span>
              <br />
              {!this.state.connected && (
                <input value="Connect" type="button" onClick={this.connect} />
              )}
              {this.state.connected && (
                <input
                  type="button"
                  disabled=""
                  value="Disconnect"
                  onClick={this.disconnect}
                />
              )}

              <br />
              <br />
              <strong>Message:</strong>
              <br />
              <input
                value={this.state.MessageToSend}
                onChange={element =>
                  this.setState({ MessageToSend: element.target.value })
                }
                size="35"
                placeholder="Rock it with HTML5 WebSocket"
                disabled=""
              />
              <br />
              <input
                type="button"
                disabled=""
                value="Send"
                onClick={this.send}
              />
            </div>
          </Col>
          <Col xs="6">
            <div
              style={{
                float: "left",
                marginLeft: "20px",
                paddingLeft: "20px",
                width: "350px",
                borderLeft: "solid 1px #cccccc"
              }}
            >
              {" "}
              <strong>Log:</strong>
              <div>
                <textarea
                  ref={this.textLog}
                  value={this.state.MessageReceived}
                  onChange={element =>
                    this.setState({ MessageReceived: element.target.value })
                  }
                  style={{ width: "100%" }}
                  rows="4"
                />
              </div>
              <input
                type="button"
                value="Clear log"
                onClick={() => {
                  this.setState({ MessageReceived: "" });
                }}
                style={{ position: "relative", top: "3px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
