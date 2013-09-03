// Test for PDF Kataloge in Gastronomie Shop
// Beispiel Link http://www.metro-gastronomieshop.de/aktuellewerbung/fullscreen.php?category=profi-baecker

var katalogLink = "http://www.metro-gastronomieshop.de/aktuellewerbung/fullscreen.php";
var errorText = "Keine Kataloge in dieser Kategorie";
var screenshotNow = new Date();
var screenshotDateTime = screenshotNow.getFullYear() + pad(screenshotNow.getMonth() + 1) + pad(screenshotNow.getDate()) + '-' + pad(screenshotNow.getHours()) + pad(screenshotNow.getMinutes()) + pad(screenshotNow.getSeconds());
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
			this.echo('Kein Beweisfoto notwendig.');
		} else {
			fs.write('web-checks.log' , 'Kataloge auf ' + katalogLink + 'Fehlerhaft um:' + dateDateTime + ' (Sehe Screenshots)\n', 'a');
			this.viewport(1280, 1024).then( function(){
				this.capture('screenshots/screenshot-ProfiJournal-'  + screenshotDateTime + '.png');
			});
		}
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