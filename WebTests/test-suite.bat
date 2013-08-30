REM casperjs sucht recursiv nach alle JS files in ein verzeichnis, und führt dann alle gefunden Test durch:
REM sehe: http://docs.casperjs.org/en/latest/testing.html
CALL setup
casperjs --proxy=10.16.36.38:3128 test suite
pause