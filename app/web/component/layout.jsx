import React, { Component } from 'react';

class Layout extends Component {

  render() {
    if (EASY_ENV_IS_NODE) {
      return (
        <html>
          <head>
            <title>{this.props.title}</title>
            <meta charSet="utf-8"></meta>
            <meta
              name="viewport"
              content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
            <meta name="keywords" content={this.props.keywords}></meta>
            <meta name="description" content={this.props.description}></meta>
          </head>
          <body>
            <div id="app">{this.props.children}</div>
          </body>
        </html>
      );
    }
    return this.props.children;
  }
}

export default Layout;
