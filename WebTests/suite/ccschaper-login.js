var testPageLink = "http://www.ccschaper.de/pages/DE/Login/LoginHint";
var system = require('system'); 
var username = system.env.CCSCHAPER_U; 
var password = system.env.CCSCHAPER_P; 	
	
casper.test.begin('Schaper Website Login Test', 4, function suite(test) {
	//Zuerst aktuelle Screenshots erfassen
	casper.start(testPageLink, function(){
		log('SchaperAnmeldung Test Start');
		//saveScreenshot(this, 'Schaper-Anmeldetest-Startseite');
		test.assertSelectorHasText('A.login_lightwindow.cboxElement > u', 'Anmelden');
	});

	
	casper.then(function(){
		casper.echo("Form ausfüllen");
		casper.fill('form[name=customerLoginForm]', {
			'loginName' : username
			, 'passwordByLoginName' : password
		}, false);
	});

	casper.then(function(){
		casper.click('input#doLogin2.button');
	});

	
	casper.then(function(){
		test.assertTextDoesntExist('Uengueltige Anfrage');
		test.assertTextDoesntExist('Der angegebene Kunde konnte nicht gefunden werden');
		test.assertTextDoesntExist('Ungültige Nutzer/Kennwort-Kombination');

	});
	casper.then(function(){
		if (test.currentSuite.failed < 1) {
			log('SchaperAnmeldung OK- Kein Beweisfoto notwendig.');
		} else {
			log('SchaperAnmeldung Fehlerhaft, sehe Screenshots');
			saveScreenshot(this, 'Schaper-Anmeldetest');
		}
	});
	casper.run(function() {
		test.done();
	});
});

