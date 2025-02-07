#!/usr/bin/node
const fs = require('fs');

// Read file from command line argument
fs.readFile(process.argv[2], 'utf8', (err, contents) => {
  // If error occurs, print error object, otherwise print file contents
  err ? console.log(err) : console.log(contents);
});
