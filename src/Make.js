/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Make erstellt einen Array mit Objekten, die
 * jeweils die Attribute "name" und "wert"
 * bieten
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export default function Make(zielArray, _name, _wert) {
  zielArray.push({ name: _name, wert: _wert });
}
