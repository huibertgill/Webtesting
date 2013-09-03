// after all Test are done, now What?

casper.test.begin('End Results alle Tests', 1, function suite(test) {
	casper.echo('All Done');
	test.assert(true); 
	casper.run(function() {
		test.done();
	});
});
