const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();
const bodyParser = require('body-parser');
const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.post('/addItem', (req,res) => {
  console.log('hello there');
  console.log(req.body, 'req.body');
  res.send(req.body);
})


const server = app.listen(8080, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});