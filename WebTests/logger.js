// My Logfile JS module

var fs = require('fs'); 
var dateNow = new Date();
var dateDateTime = dateNow.getFullYear() + pad(dateNow.getMonth() + 1) + pad(dateNow.getDate()) + '-' + pad(dateNow.getHours()) + pad(dateNow.getMinutes()) + pad(dateNow.getSeconds());

function pad(number) {
  var r = String(number);
  if ( r.length === 1 ) {
    r = '0' + r;
  }
  return r;

}

function log(theText) {
	fs.write('web-checks-'+dateDateTime+'.log' , dateDateTime +' - ' + theText + '\n', 'a');

}
