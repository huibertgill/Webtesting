// Pre Flight Tests:
// Proxy verwendbar?

var googleTitle ='Google';

casper.test.begin('Internet und Google verfügbar TEst', 1, function suite(test) {
	//Zuerst aktuelle Screenshots erfassen
	casper.start('http://www.google.de', function(){
		test.assertTitle(googleTitle, 'Check for working Proxy');
		
	});
	
	casper.then(function(){
		if(this.getTitle() != googleTitle) {
			this.echo('Not the Google Title');
			this.exit(1);
		} else {
			this.echo('Google Title OK');
		}
	});
	
	casper.run(function() {
		test.done();
	});
});
