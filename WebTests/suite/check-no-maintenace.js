// Test for PDF Kataloge in Gastronomie Shop
// Beispiel Link http://www.metro-gastronomieshop.de/aktuellewerbung/fullscreen.php?category=profi-baecker

var testPageLink = "http://www.metro24.de";
var errorText = "Aufgrund von Wartungsarbeiten";
var testCount = 1;
	
casper.test.begin('Startseite, Maintenace', testCount, function suite(test) {
	//Zuerst aktuelle Screenshots erfassen
	casper.start(testPageLink, function(){
		test.assertTextDoesntExist(errorText, 'Test Text: Maintenance Seite');
	});
	
	casper.then(function() {
		if (test.currentSuite.failed < 1) {
			log('Homepage: OK, Kein Beweisfoto notwendig.');
		} else {
			log('Homepage kaputt:   Beweisfoto notwendig.');
			saveScreenshot(this, 'M24 Check Maintenace');
			log('Maintenance Seite an stelle der Homepage unter: ' + testPageLink + ' ist Fehlerhaft');
		}
	});
	casper.run(function() {
		test.done();
	});
});

