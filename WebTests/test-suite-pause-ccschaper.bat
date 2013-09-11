@echo off
REM casperjs sucht recursiv nach alle JS files in ein verzeichnis, und führt dann alle gefunden Test durch:
REM sehe: http://docs.casperjs.org/en/latest/testing.html
if '%CASPERPATHISSET%'=='1' (
echo "PATH is OK"
)else (
echo "Append Casper Files to Path"
call setup
)
call casperjs test suite/ccschaper-login.js --includes=logger.js --proxy=%HTTP_PROXY% --proxy-auth=%PROXY_U%:%PROXY_P% --pre=pre-test.js --post=post-test.js --xunit=log.xml
pause