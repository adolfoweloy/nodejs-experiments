const fs = require('fs');

// read it
// https://nodejs.org/uk/docs/guides/dont-block-the-event-loop/

exports.getUsers = function(start=1, limit=0, callback) {

  // using nodejs file system to read a datasource
  // started reading the file content using a synchronised model which is not good for NodeJS.
  // replaced with an async version which demands callback

  // looks like now I will face what people call: callback hell
  fs.readFile(__dirname + '/users.dat', function(err, data) {
    let usernames = data.toString().split(/(?:\n|\r\n|\r)/g);

    // is this the best way to validate?
    if (start < 1) throw new RangeError('wrong range');
    if (limit < 0) throw new RangeError('wrong range');

    // to use let or var or const?
    // here it is irrelevant since there is no block to make let useful.
    // I would say that let is more strict. var is hoisted while let is not.

    // a strict definition of hoisting would say that variable and function declarations
    // are moved to the top of the code. But this is not what actually happens.
    // variable and function declarations are put into memory during compile phase!
    // this is just for declarations. If you initialize a variable after it's used,
    // the value will be undefined.

    let result = [];
    let j=0;

    for (let i=start-1; j<limit && i<usernames.length; i++) {
      result[j++] = { name: usernames[i] };
    }

    callback(result);
  });

};
