var express = require('express');
var path = require('path');
var colors = require('colors/safe');

var app = express();

app.get('/', function(req, res) {
    // res.sendFile(path.join(__dirname + '/index.html'));
    res.send('\x1b[31mhello');
    console.log( '\x1b[31mHello world!' ) ;
    console.log(colors.green('hello')); // outputs green text  
    console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text  
    console.log(colors.inverse('inverse the color')); // inverses the color  
    console.log(colors.rainbow('OMG Rainbows!')); // rainbow  
    console.log(colors.trap('HELLO!')); // Drops the bass  
});

app.get('/trap/:words', function(req, res) {
    console.log(colors.trap(req.params.words));
    res.send(colors.trap(req.params.words));
});

app.listen(9090);
console.log('Sandbox server started on port: 9090');
