// Pre Flight Tests:
// Proxy verwendbar?
var googleTitle ='Google';

log('Start checks');

casper.test.begin('Internet und Google verfügbar TEst', 1, function suite(test) {
	casper.echo("Erst mal ein Proxy Test");
	//Zuerst aktuelle Screenshots erfassen
	casper.start('http://www.google.de', function(){
		test.assertTitle(googleTitle, 'Check for working Proxy');
		
	});
	
	casper.then(function(){
		if(this.getTitle() != googleTitle) {
			this.echo('\n\n Google Title seht falsch aus. Soll[' + googleTitle + '] ist:[' + this.getTitle() + ']\n dies kann passieren wenn der Proxy nicht funktioniert.');
			this.echo('Am besten einmal das INternet mit IE besuchen Ueber die oben genannte Proxy. "IM IE: menue->extras->Ineternet optionen->Verbindungen');
			log('Start checks abbruch! wegen Proxy Error');

			this.exit(1);
		} else {
			log('Google Title OK');
		}
	});
	
	casper.run(function() {
		test.done();
	});
});
