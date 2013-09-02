@echo off
REM casperjs sucht recursiv nach alle JS files in ein verzeichnis, und führt dann alle gefunden Test durch:
REM sehe: http://docs.casperjs.org/en/latest/testing.html
if '%CASPERPATHISSET%'=='1' (
echo "PATH is OK"
)else (
echo "Append Casper Files to Path"
call setup
)
call casperjs test suite --proxy=10.16.36.38:3128 --pre=pre-test.js
pause