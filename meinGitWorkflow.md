Clone project to TEMP
========================
	git -c http.proxy=10.16.36.38:3128 clone https://github.com/huibertgill/Webtesting.git
	git config --ad http.proxy 10.16.36.38:3128 

Branch erstellen und bearbeiten
===============================
	cd Webtesting
	git checkout -b NEW-BRANCH-NAME

Arbeiten
========
Editieren und hinzugügen von files.

	git commit -m "kurze Beschreibung"
	git push origin NEW-BRANCH-NAME


