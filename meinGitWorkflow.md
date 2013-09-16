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

Solange bis alles läuft

Merge
=====
Nach Commit, zuerst zurück wechseln, dann mergen, und Hochladen

	git checkout master
	git merge NEW-BRANCH-NAME
	git push

Branch entfernen
================
Zuerst Remote, dann Lokal:

	git push origin --delete NEW-BRANCH-NAME
	git branch -d NEW-BRANCH-NAME

DONE
====
	
