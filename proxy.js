var https = require('https'),
    http  = require('http'),
    util  = require('util'),
    path  = require('path'),
    fs    = require('fs'),

    httpProxy = require('http-proxy');
    require('dotenv').config();

//
// Create a HTTP Proxy server with a HTTPS target
//
httpProxy.createProxyServer({
  target: process.env.REACT_APP_SERVICE_URL,
  agent  : https.globalAgent,
  headers:{
		'host': process.env.REACT_APP_SERVICE_HOST,
                'Authorization': process.env.REACT_APP_AUTH_TOKEN,
                'Content-Type': 'application/json',
            }
}).listen(8011);

console.log('http proxy server started on port 8011');
