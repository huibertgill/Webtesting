// after all Test are done, now What?

casper.test.begin('End Results alle Tests', 1, function suite(test) {
	log('Alle Done');
	test.assert(true); 
	casper.run(function() {
		test.done();
	});
});
