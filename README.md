# Das ist der grandiose Global Clicker

## Deine ultimative Cookie Clicker Multiplayer Erfahrung

### Installation und Start

Nach dem Clonen `meteor npm install` aufrufen. Der Server wird durch `npm start` gestartet.

### Funktionsweise

Beim Start wird der "Global Clicker" in die `clicker` Collection eingefügt. Beim Klicken wird der `counter` des Clicker immer um 1 erhöht.
Alle Dokumente der `clicker` Collection werden an alle Teilnehmer publiziert, da derzeit das `insecure` package installiert ist, welches alle
Datenbankeinträge an alle Clients sendet.

### Deploy

Der Global Clicker wird bei [scalingo](https://www.scalingo.com) gehostet. Sobald ein Pull-Request in den `deploy` branch gemerged werden, wird die Anwendung deployed. Änderungen in `deploy` können nur per Pull-Request eingebracht werden und erfordern eine Review.

### ToDo

Tests, Docs und Github Action