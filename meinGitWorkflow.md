Clone project to TEMP
========================
	git -c http.proxy=PROXY_IP:PROXY_PORT clone https://github.com/huibertgill/Webtesting.git
	git config --add http.proxy PROXY_IP:PROXY_PORT 

Branch erstellen und bearbeiten
===============================
	cd Webtesting
	git checkout -b NEW-BRANCH-NAME

Arbeiten
========
Editieren und hinzugügen von files.

	git commit -m "kurze Beschreibung"
	git push origin NEW-BRANCH-NAME


