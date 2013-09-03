// Test for PDF Kataloge in Gastronomie Shop
// Beispiel Link http://www.metro-gastronomieshop.de/aktuellewerbung/fullscreen.php?category=profi-baecker

var testPageLink = "http://www.metro24.de";
var errorText = "Aufgrund von Wartungsarbeiten";
var dateNow = new Date();
var dateDateTime = dateNow.getFullYear() + pad(dateNow.getMonth() + 1) + pad(dateNow.getDate()) + '-' + pad(dateNow.getHours()) + pad(dateNow.getMinutes()) + pad(dateNow.getSeconds());
var testCount = 1;
	
casper.test.begin('Startseite, Maintenace', testCount, function suite(test) {
	//Zuerst aktuelle Screenshots erfassen
	casper.start(testPageLink, function(){
		test.assertTextDoesntExist(errorText, 'Test Text: Maintenance Seite');
	});
	
	casper.then(function() {
		if (test.currentSuite.failed < 1) {
			this.echo('Kein Beweisfoto notwendig.');
		} else {
			this.echo('Homepage kaputt:   Beweisfoto notwendig.');
			this.viewport(1280, 1024).then( function(){
				this.capture('screenshots/screenshot-m24-homepage-'  + dateDateTime + '.png');
			});
			fs.write('web-checks.log' , 'Maintenance Seite an stelle der Homepage unter: ' + testPageLink + ' ist Fehlerhaft um:' + dateDateTime + ' (Sehe Screenshots)\n', 'a');
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