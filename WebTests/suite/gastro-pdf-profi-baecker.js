// Test for PDF Kataloge in Gastronomie Shop
// Beispiel Link http://www.metro-gastronomieshop.de/aktuellewerbung/fullscreen.php?category=profi-baecker

var katalogLink = "http://www.metro-gastronomieshop.de/aktuellewerbung/fullscreen.php?category=profi-baecker";
var errorText = "Keine Kataloge in dieser Kategorie";
var screenshotNow = new Date();
var screenshotDateTime = screenshotNow.getFullYear() + pad(screenshotNow.getMonth() + 1) + pad(screenshotNow.getDate()) + '-' + pad(screenshotNow.getHours()) + pad(screenshotNow.getMinutes()) + pad(screenshotNow.getSeconds());
var viewports = [
      {
        'name': 'tablet-landscape',
        'viewport': {width: 1024, height: 768}
      },
      {
        'name': 'HD',
        'viewport': {width: 1920, height: 1080}
      },
      {
        'name': 'desktop-standard',
        'viewport': {width: 1280, height: 1024}
      }
    ];

	
casper.test.begin('Katalog auf Absolutweb Test', 3, function suite(test) {
	//Zuerst aktuelle Screenshots erfassen
	casper.start(katalogLink, function(){
		casper.each(viewports, function(casper, viewport) {
			  this.then(function() {
				this.viewport(viewport.viewport.width, viewport.viewport.height);
			  });
			  this.thenOpen(katalogLink, function() {
				return true;
			  });
			  this.then(function(){
				this.echo('Screenshot for ' + viewport.name + ' (' + viewport.viewport.width + 'x' + viewport.viewport.height + ')', 'info');
				this.capture('screenshots-ProfiJournal-'  + screenshotDateTime + '/' + viewport.name + '-' + viewport.viewport.width + 'x' + viewport.viewport.height + '.png', {
					top: 0,
					left: 0,
					width: viewport.viewport.width,
					height: viewport.viewport.height
				});
			  });
			});
		test.assertSelectorHasText('ol#tabs li.current span', 'ProfiJournal');
		test.assertDoesntExist('body > p', 'Keine Kataloge in dieser Kategorie tag Fehlt: YEaH!');
		test.assertTextDoesntExist('Keine Kataloge in dieser Kategorie', 'Keine Kataloge in dieser Kategorie Ist nicht zu sehen Fehlt: YEaH!');
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