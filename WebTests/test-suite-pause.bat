@echo off
REM casperjs sucht recursiv nach alle JS files in ein verzeichnis, und führt dann alle gefunden Test durch:
REM sehe: http://docs.casperjs.org/en/latest/testing.html
if '%CASPERPATHISSET%'=='1' (
echo "PATH is OK"
)else (
echo "Append Casper Files to Path"
call setup
)
call casperjs test suite --includes=logger.js --proxy=10.16.36.38:3128 --proxy-auth=%PROXY_U%:%PROXY_P% --pre=pre-test.js --post=post-test.js --xunit=log.xml
pause