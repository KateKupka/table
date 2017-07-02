const express = require('express');
const path = require('path');
const http = require('http');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
import webpackConfig from '../webpack/webpack.config';

class Server {
  app;

  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
    this.startServer();
  }

  startServer(){
    this.app.use(webpackMiddleware(webpack(webpackConfig)));
    this.app.use('/coverage', express.static(path.resolve(process.cwd(), '_mocha-coverage')));
    this.app.use('/report', express.static(path.resolve(process.cwd(), '_mocha-report')));
    this.http.listen(3000, function () {
      console.log('Example app listening on port 3000!')
    });
  }
}

new Server();
