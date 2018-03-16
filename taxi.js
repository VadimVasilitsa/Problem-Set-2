var fs = require('fs');
var fname = 'a_example.in';
var readFile = function (err, contents) {
  var lines = contents.toString().split('\n')
  var firstData = lines[0].split(' ');
  var cars = firstData[2];
  var rows = firstData[0];
  var columns = firstData[1];
  //my code------begin
asdasd
gghghghj
  //my code------end

  console.log('cars',cars);
  console.log('rows',rows);
  console.log('columns',columns);
  console.log(contents.toString())
};
fs.readFile(fname,readFile);
