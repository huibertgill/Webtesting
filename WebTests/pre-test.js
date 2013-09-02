// Pre Flight Tests:
// Proxy verwendbar?


casper.test.begin('Internet und Google verfügbar TEst', 1, function suite(test) {
	//Zuerst aktuelle Screenshots erfassen
	casper.start('http://www.google.de', function(){
		test.assertTitle('Google', 'Check for working Proxy');
		
	});
	
	casper.run(function() {
		test.done();
	});
});
