document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const msg = document.getElementById('msg');

    btn.addEventListener('click', () => {
        msg.textContent = 'Jag är snäll!';
    });
});

/* Så målet här är: När någon klickar på knappen "Klicka här för att se om jag är snäll" ska texten "Jag är snäll!" dyka upp.

    document.addEventListener betyder att JS ska vänta tills hela HTML-sidan är klaruppbyggd innan koden under ska köras.

    const btn = document.getElementById('btn');
    Detta betyder att vi hämtar knappen från HTML.

    const msg = document.getElementById('msg');
    Detta betyder att vi hämtar textrutan från HTML.

    btn.addEventListener('click', () => {
    Detta betyder att vi har kopplat knappen till en händelse som ska ske.

    msg.textContent = 'Jag är snäll!';
    Detta är då själva texten som kommer upp när vi har tryckt på knappen.

    Dessa tecken: }); betyder att det är slut på vad som händer när man har tryckt på knappen (man stänger blocket).
*/