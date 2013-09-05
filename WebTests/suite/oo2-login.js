var testPageLink = "http://premium.metro24.de/oo2/de/mcc/ger/onlineordering/";
var system = require('system'); 
var username = system.env.OO2_U; 
var password = system.env.OO2_P; 	
	
casper.test.begin('OO2 Login Test', 3, function suite(test) {
	//Zuerst aktuelle Screenshots erfassen
	casper.start(testPageLink, function(){
		test.assertSelectorHasText('h2.AppletTitle', 'Anmelden');
		//saveScreenshot(this, 'OO2-Anmeldetest-Login');
	});

	casper.thenEvaluate(function(username,password){
		document.getElementsByName('IDToken1')[0].value=username;
		document.getElementsByName('IDToken2')[0].value=password ;
		defaultSubmit();
	}, username, password);
	
	
	// METRO Online-Bestellservice
	casper.then(function() {
		test.assertSelectorHasText('h1', 'Willkommen bei Ihrem METRO Online-Bestellservice');
		//saveScreenshot(this, 'OO2-Anmeldetest-Startseite');
	});
	
	casper.then(function() {
		this.echo('Post ist Done');
	});

	casper.then(function() {
		this.clickLabel('Abmelden', 'a');
	});
	
	
	casper.then(function() {
		test.assertTextExist('Startseite METRO Cash' , 'Logout OK, Startseite auf Service Seite');
		//saveScreenshot(this, 'OO2-Anmeldetest-Abgemeldet');
	});

	
	casper.then(function(){
		if (test.currentSuite.failed < 1) {
			log('OO2 Anmeldetest - Kein Beweisfoto notwendig.');
		} else {
			log('OO2 Anmeldetest ' + testPageLink + 'Fehlerhaft, sehe Screenshots');
			saveScreenshot(this, 'OO2-Anmeldetest-Irgendwo');
		}
	});
	casper.run(function() {
		test.done();
	});
});

