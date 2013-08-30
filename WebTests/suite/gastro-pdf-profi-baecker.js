// Test for PDF Kataloge in Gastronomie Shop
// Beispiel Link http://www.metro-gastronomieshop.de/aktuellewerbung/fullscreen.php?category=profi-baecker

var katalogLink = "http://www.metro-gastronomieshop.de/aktuellewerbung/fullscreen.php?category=profi-baecker";
var errorText = "Keine Kataloge in dieser Kategorie";
var screenshotNow = new Date();
var screenshotDateTime = screenshotNow.getFullYear() + pad(screenshotNow.getMonth() + 1) + pad(screenshotNow.getDate()) + '-' + pad(screenshotNow.getHours()) + pad(screenshotNow.getMinutes()) + pad(screenshotNow.getSeconds());

	
casper.test.begin('Katalog auf Absolutweb Test', 3, function suite(test) {
	//Zuerst aktuelle Screenshots erfassen
	casper.start(katalogLink, function(){
		test.assertSelectorHasText('ol#tabs li.current span', 'ProfiJournal');
		test.assertDoesntExist('body > p', 'Keine Kataloge in dieser Kategorie tag Fehlt: YEaH!');
		test.assertTextDoesntExist('Keine Kataloge in dieser Kategorie', 'Keine Kataloge in dieser Kategorie Ist nicht zu sehen Fehlt: YEaH!');
		// Falls keine Kataloge Vorhanden=> Beweisfoto erstellen
		this.echo(this.fetchText('body > p'));
		if (this.fetchText('body > p') == errorText ){
			this.viewport(1280, 1024).then( function(){
				this.capture('screenshot-ProfiJournal-'  + screenshotDateTime + '.png');
			});
		} else {
			this.echo('Kein Beweisfoto notwendig.');
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