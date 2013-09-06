@echo off
SET PATH=%PATH%;..\casper\batchbin;..\casper\phantom
SET CASPERPATHISSET=1
REM setzt die HTTP_POXY PROXY_U and PROXY_P Variablen, da die User und PW enthalten, sind diese "secure" auf H: ausgelagert
CALL H:\set-proxy.bat
CALL H:\set-OO2.bat
