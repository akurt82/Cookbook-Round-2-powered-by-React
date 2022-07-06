/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Hier werden Teilkomponente angeboten, die
 * verwendet werden können, um Inhalte zu
 * produzieren
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import React from "react";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Produziert ein Bild
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export function Bild(quelle, alt, breite = "100%") {
  const style = {
    width: breite
  };
  return (
    <span>
      <img src={quelle} style={style} alt={alt} />
    </span>
  );
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Produziert eine Rezept-Tabelle
 *
 * Der Parameter-Array "rezepte" besteht aus Einträgen,
 * die selbst Objekte sind und jeweils die Attribute "name"
 * und "wert" liefern.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export function Rezept(rezepte) {
  const liste = rezepte.numbers;
  const ausgabe = liste.map((eintrag) => {
    return (
      <tr>
        <td>{eintrag.name}</td>
        <td>{eintrag.wert}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="rezeptfeld">
        <tbody>{ausgabe}</tbody>
      </table>
    </div>
  );
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Produziert eine Titel
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export function Titel(text) {
  return (
    <div>
      <h3 className="titel">{text}</h3>
    </div>
  );
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Produziert eine Beschreibung
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export function Beschreibung(text) {
  return (
    <div>
      <div className="beschreibung">{text}</div>
    </div>
  );
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Erstellt einen Inhaltscontainer nach dem Model:
 *
 * | --------------------------- |
 * |             Titel           |
 * | ------------ | ------------ |
 * |   Links      |   Rechts     |
 * | --------------------------- |
 * |       Beschreibung          |
 * | --------------------------- |
 *
 * Der linke Feld und der rechte Feld können für ein
 * Bild und Rezept-Information verwendet werden. Die
 * Beschreibung liefert etwas Information über das
 * Produkt, zB eine leckere kullinarische Spezialität
 * aus Italien.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export function Struktur(titel, links, rechts, beschreibung) {
  return (
    <div className="struktur">
      {titel}
      <div className="beide">
        <div className="links">{links}</div>
        <div className="rechts">{rechts}</div>
      </div>
      {beschreibung}
    </div>
  );
}
