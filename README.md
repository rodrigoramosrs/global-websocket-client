# Sigleton Websocket Client for React JS

[![NuGet version](https://badge.fury.io/js/global-websocket-client.svg)](https://www.npmjs.com/package/global-websocket-client)


# Installation
```
npm i global-websocket-client
```

# Usage Example
```
import React, { Component } from "react";
import WebSocketClient from "../../src";

class Demo extends Component {
  state = {
    Show: false,
    Showing: false
  };

  componentDidMount(){
    WebSocketClient.connect(
      this.state.WebSocketUri,
      this.openCallback,
      this.onErrorCallback,
      this.onMessageCallback,
      this.onCloseCallback
    );
  };
  render() {
    return (
      <div>
        <h1>global-websocket-client</h1>
      </div>
    );
  }
}
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
