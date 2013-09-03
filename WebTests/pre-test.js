// Pre Flight Tests:
// Proxy verwendbar?
var fs = require('fs'); 
var dateNow = new Date();
var dateDateTime = dateNow.getFullYear() + pad(dateNow.getMonth() + 1) + pad(dateNow.getDate()) + '-' + pad(dateNow.getHours()) + pad(dateNow.getMinutes()) + pad(dateNow.getSeconds());



var googleTitle ='Google';

fs.write('web-checks.log' , 'Start checks:' + dateDateTime + '\n', 'a');

casper.test.begin('Internet und Google verfügbar TEst', 1, function suite(test) {
	//Zuerst aktuelle Screenshots erfassen
	casper.start('http://www.google.de', function(){
		test.assertTitle(googleTitle, 'Check for working Proxy');
		
	});
	
	casper.then(function(){
		if(this.getTitle() != googleTitle) {
			this.echo('\n\n Google Title seht falsch aus. Soll[' + googleTitle + '] ist:[' + this.getTitle() + ']\n dies kann passieren wenn der Proxy nicht funktioniert.');
			this.echo('Am besten einmal das INternet mit IE besuchen Ueber die oben genannte Proxy. "IM IE: menue->extras->Ineternet optionen->Verbindungen');
			fs.write('web-checks.log' , 'Start checks:' + dateDateTime + ' - Proxy Error\n', 'a');

			this.exit(1);
		} else {
			this.echo('Google Title OK');
		}
	});
	
	casper.run(function() {
		test.done();
	});
});

function pad(number) {
  var r = String(number);
  if ( r.length === 1 ) {
    r = '0' + r;
  }
  return r;

}