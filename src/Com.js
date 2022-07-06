/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Die Funktion grap holt die API-Information ab, die
 * wir benötigen, um damit die Inhalte der Webseite
 * zusammenzusetzen
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export default function Grap(url, cbk) {
  // Anfrage an die URL wenden...
  fetch(url)
    .then((res) =>
      // Die Antwort in ein JSON umwandeln und an Funktion weiterreichen
      res.json()
    )
    .then((out) =>
      // Beim Erfolg, Callback-Funktion aurufen
      cbk(out)
    )
    .catch((err) =>
      // Andernfalls Fehler auf der Konsole ausgeben
      console.error(err)
    );
}
