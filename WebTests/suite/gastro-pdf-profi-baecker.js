// Test for PDF Kataloge in Gastronomie Shop
// Beispiel Link http://www.metro-gastronomieshop.de/aktuellewerbung/fullscreen.php?category=profi-baecker

var katalogLink = "http://www.metro-gastronomieshop.de/aktuellewerbung/fullscreen.php";
var errorText = "Keine Kataloge in dieser Kategorie";
var testCount = 3;
	
casper.test.begin('Katalog auf Absolutweb Test', testCount, function suite(test) {
	//Zuerst aktuelle Screenshots erfassen
	casper.start(katalogLink, function(){
		test.assertSelectorHasText('ol#tabs li.current span', 'ProfiJournal');
		test.assertDoesntExist('body > p', 'Test kein Text im Body, nur Flash');
		test.assertTextDoesntExist('Keine Kataloge in dieser Kategorie', 'Test Text: Keine Kataloge');
	});
	casper.run(function() {
		if (test.currentSuite.failed < 1) {
			log('Kein Beweisfoto notwendig.');
		} else {
			log('Kataloge auf ' + katalogLink + 'Fehlerhaft, sehe Screenshots');
			this.viewport(1280, 1024).then( function(){
				this.capture('screenshots/screenshot-ProfiJournal-'  + screenshotDateTime + '.png');
			});
		}
		test.done();
	});
});

