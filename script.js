
document.body.innerHTML += "<h2>Lekce 03 - Výplata jako stránka</h2>"

const hodinovaMzda = Number(prompt("Zadejte svoji hodinovku"))
const hodinaDen = Number(prompt("Zadejte odpracovaný počet hodin za den"))
const dnyMesic = Number(prompt("Zadejte odpracovaný počet dní v měsíci "))

const vyplata = (hodinovaMzda * hodinaDen * dnyMesic)
document.body.innerHTML += "<p>Tvoje mzda je: " + vyplata + "Kč</p>"