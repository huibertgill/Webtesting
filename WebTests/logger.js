// My Logfile JS module

var fs = require('fs'); 

function pad(number) {
  var r = String(number);
  if ( r.length === 1 ) {
    r = '0' + r;
  }
  return r;

}

function log(theText) {
	var dateNow = new Date();
	var dateDate = dateNow.getFullYear() + pad(dateNow.getMonth() + 1) + pad(dateNow.getDate()) ;
	var dateDateTime = dateNow.getFullYear() + pad(dateNow.getMonth() + 1) + pad(dateNow.getDate()) + '-' + pad(dateNow.getHours()) + pad(dateNow.getMinutes()) + pad(dateNow.getSeconds());
	fs.write('web-checks-'+dateDate+'.log' , dateDateTime +' - ' + theText + '\r\n', 'a');
	casper.echo(theText);
}

function saveScreenshot(casperInstance, screenName) {
	var dateNow = new Date();
	var dateDate = dateNow.getFullYear() + pad(dateNow.getMonth() + 1) + pad(dateNow.getDate()) ;
	var dateDateTime = dateNow.getFullYear() + pad(dateNow.getMonth() + 1) + pad(dateNow.getDate()) + '-' + pad(dateNow.getHours()) + pad(dateNow.getMinutes()) + pad(dateNow.getSeconds());
	casperInstance.viewport(1280, 1024).then( function(){
		casperInstance.capture('screenshots/' + dateDateTime + '-' + screenName  + '.png');
	});
}