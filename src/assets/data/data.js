const data =[

  {
    question: '1. Vad betyder detta vägmärke?',
    image: 'BILD-1.png',
    options: [
      { key: 1.1, text: 'Förbud mot infart', isCorrect: true },
      { key: 1.2, text: 'Enkelriktad gata', isCorrect: false },
      { key: 1.3, text: 'Parkering tillåten', isCorrect: false },
      { key: 1.4, text: 'Väjningsplikt', isCorrect: false }
    ],
    explanation: 'Rött runt med vit mitt betyder "förbud mot infart" för fordon.'
  },
  {
    question: '2. Vad betyder detta vägmärke?',
    image: 'BILD-2.png',
    options: [
      { key: 2.1, text: 'Huvudled', isCorrect: true },
      { key: 2.2, text: 'Stopplikt', isCorrect: false },
      { key: 2.3, text: 'Motorväg', isCorrect: false },
      { key: 2.4, text: 'Cykelväg', isCorrect: false }
    ],
    explanation: 'Gul romb med vit kant betyder att du kör på en huvudled.'
  },
  {
    question: '3. Vad betyder detta vägmärke?',
    image: 'BILD-3.png',
    options: [
      { key: 3.1, text: 'Hastighetbegränsning', isCorrect: true },
      { key: 3.2, text: 'Farthinder', isCorrect: false },
      { key: 3.3, text: 'Motorväg', isCorrect: false },
      { key: 3.4, text: 'Parkeringsförbud', isCorrect: false }
    ],
    explanation: 'Cirkulärt märke med siffra anger högsta tillåtna hastighet.'
  },
  {
    question: '4. Vad betyder detta vägmärke?',
    image: 'BILD-4.png',
    options: [
      { key: 4.1, text: 'Förbud mot parkering', isCorrect: true },
      { key: 4.2, text: 'Förbud mot infart', isCorrect: false },
      { key: 4.3, text: 'Endast lastzon', isCorrect: false },
      { key: 4.4, text: 'Slut på huvudled', isCorrect: false }
    ],
    explanation: 'Blå cirkel med röd kant och ett snedstreck betyder parkeringsförbud.'
  },
  {
    question: '5. Vad betyder detta vägmärke?',
    image: 'BILD-5.jpg',
    options: [
      { key: 5.1, text: 'Stopplikt', isCorrect: true },
      { key: 5.2, text: 'Väjningsplikt', isCorrect: false },
      { key: 5.3, text: 'Förbud mot infart', isCorrect: false },
      { key: 5.4, text: 'Rastplats', isCorrect: false }
    ],
    explanation: 'Den röda åttakanten betyder alltid stopplikt — du måste stanna helt.'
  },

  // --- Trafikregler ---
  {
    question: '6. Du kör på en huvudled och en bil ska köra in från en mindre väg. Vem har företräde?',
    options: [
      { key: 6.1, text: 'Jag på huvudleden', isCorrect: true },
      { key: 6.2, text: 'Bilen på den mindre vägen', isCorrect: false },
      { key: 6.3, text: 'Ingen, båda ska stanna', isCorrect: false },
      { key: 6.4, text: 'Den som är snabbast', isCorrect: false }
    ],
    explanation: 'På huvudled har du alltid företräde mot anslutande vägar.'
  },
  {
    question: '7. Vad gäller vid en obevakad cykelöverfart?',
    options: [
      { key: 7.1, text: 'Du måste alltid stanna', isCorrect: false },
      { key: 7.2, text: 'Du ska anpassa hastigheten och lämna cyklister företräde', isCorrect: true },
      { key: 7.3, text: 'Cyklister har väjningsplikt', isCorrect: false },
      { key: 7.4, text: 'Du kan passera utan att sakta ner', isCorrect: false }
    ],
    explanation: 'Du måste sakta ner och ge cyklister möjlighet att passera tryggt.'
  },
  {
    question: '8. Vad gäller när du svänger höger i en korsning med cykelbana?',
    options: [
      { key: 8.1, text: 'Du har alltid företräde', isCorrect: false },
      { key: 8.2, text: 'Du måste släppa fram cyklister och moped klass II', isCorrect: true },
      { key: 8.3, text: 'Endast fotgängare har företräde', isCorrect: false },
      { key: 8.4, text: 'Inga regler gäller', isCorrect: false }
    ],
    explanation: 'Cykelbana korsar din väg – cyklister och moped klass II har företräde.'
  },
  {
    question: '9. Vad innebär högerregeln?',
    options: [
      { key: 9.1, text: 'Du ska lämna företräde åt fordon som kommer från höger', isCorrect: true },
      { key: 9.2, text: 'Du har alltid företräde från höger', isCorrect: false },
      { key: 9.3, text: 'Endast vid motorväg gäller regeln', isCorrect: false },
      { key: 9.4, text: 'Regeln gäller inte vid korsning', isCorrect: false }
    ],
    explanation: 'Vid korsning utan skylt gäller högerregeln.'
  },
  {
    question: '10. Vid vilken promillehalt är det olagligt att köra personbil i Sverige?',
    options: [
      { key: 10.1, text: '0,2 ‰', isCorrect: true },
      { key: 10.2, text: '0,5 ‰', isCorrect: false },
      { key: 10.3, text: '1,0 ‰', isCorrect: false },
      { key: 10.4, text: '0,0 ‰', isCorrect: false }
    ],
    explanation: 'Gränsen för rattfylleri i Sverige är 0,2 promille.'
  },

  // --- Säkerhet ---
  {
    question: '11. Vad är den största risken med att använda mobiltelefon under körning?',
    options: [
      { key: 11.1, text: 'Ökad bränsleförbrukning', isCorrect: false },
      { key: 11.2, text: 'Försämrad uppmärksamhet och reaktionstid', isCorrect: true },
      { key: 11.3, text: 'Fler däckslitage', isCorrect: false },
      { key: 11.4, text: 'Bättre navigering', isCorrect: false }
    ],
    explanation: 'Mobilanvändning gör att fokus tas från trafiken och förlänger reaktionstiden.'
  },
  {
    question: '12. Hur påverkas bromssträckan om hastigheten fördubblas?',
    options: [
      { key: 12.1, text: 'Den blir dubbelt så lång', isCorrect: false },
      { key: 12.2, text: 'Den blir fyra gånger så lång', isCorrect: true },
      { key: 12.3, text: 'Den blir tre gånger så lång', isCorrect: false },
      { key: 12.4, text: 'Den blir oförändrad', isCorrect: false }
    ],
    explanation: 'Bromssträckan ökar kvadratiskt med hastigheten – dubbla hastigheten = fyra gånger längre sträcka.'
  },
  {
    question: '13. Vilken plats är säkrast för barn i bilen?',
    options: [
      { key: 13.1, text: 'Fram i passagerarsätet utan bälte', isCorrect: false },
      { key: 13.2, text: 'Bak i baksätet i en korrekt monterad bilbarnstol', isCorrect: true },
      { key: 13.3, text: 'Fram i passagerarsätet med airbag påslagen', isCorrect: false },
      { key: 13.4, text: 'I bagageutrymmet', isCorrect: false }
    ],
    explanation: 'Barn sitter säkrast bak i bilen i en korrekt bilbarnstol.'
  },
  {
    question: '14. Vad bör du göra vid kraftig dimma?',
    options: [
      { key: 14.1, text: 'Slå på helljus', isCorrect: false },
      { key: 14.2, text: 'Använd dimljus och anpassa hastigheten', isCorrect: true },
      { key: 14.3, text: 'Öka hastigheten', isCorrect: false },
      { key: 14.4, text: 'Slå av belysningen', isCorrect: false }
    ],
    explanation: 'Dimljus gör dig synligare, och du ska sänka hastigheten.'
  },
  {
    question: '15. Vad är en död vinkel?',
    options: [
      { key: 15.1, text: 'Område som inte kan ses i backspeglarna', isCorrect: true },
      { key: 15.2, text: 'Område bakom bilen', isCorrect: false },
      { key: 15.3, text: 'Mörk plats på vägen', isCorrect: false },
      { key: 15.4, text: 'Skuggan av fordonet', isCorrect: false }
    ],
    explanation: 'Döda vinkeln är området som speglarna inte täcker, du måste vrida på huvudet för att se.'
  },

  // --- Miljö ---
  {
    question: '16. Vilket körsätt sparar mest bränsle?',
    options: [
      { key: 16.1, text: 'Snabb acceleration och inbromsning', isCorrect: false },
      { key: 16.2, text: 'Jämn hastighet och planerade inbromsningar', isCorrect: true },
      { key: 16.3, text: 'Tomgångskörning ofta', isCorrect: false },
      { key: 16.4, text: 'Hög växel vid låg fart', isCorrect: false }
    ],
    explanation: 'Eco-driving bygger på jämn fart och att undvika onödiga accelerationer.'
  },
  {
    question: '17. Vilket bränsle ger lägst koldioxidutsläpp?',
    options: [
      { key: 17.1, text: 'Bensin', isCorrect: false },
      { key: 17.2, text: 'Diesel', isCorrect: false },
      { key: 17.3, text: 'Biogas', isCorrect: true },
      { key: 17.4, text: 'E85', isCorrect: false }
    ],
    explanation: 'Biogas är förnybart och ger låga nettoutsläpp av koldioxid.'
  },
  {
    question: '18. Hur påverkar överlastat fordon bränsleförbrukningen?',
    options: [
      { key: 18.1, text: 'Den minskar', isCorrect: false },
      { key: 18.2, text: 'Den ökar', isCorrect: true },
      { key: 18.3, text: 'Ingen påverkan', isCorrect: false },
      { key: 18.4, text: 'Den halveras', isCorrect: false }
    ],
    explanation: 'Extra vikt kräver mer energi för att förflyttas.'
  },
  {
    question: '19. Hur bör du köra för att minska partikelutsläpp i stadstrafik?',
    options: [
      { key: 19.1, text: 'Undvika hårda accelerationer och bromsningar', isCorrect: true },
      { key: 19.2, text: 'Använda låg växel hela tiden', isCorrect: false },
      { key: 19.3, text: 'Köra med höga varvtal', isCorrect: false },
      { key: 19.4, text: 'Tomgångsköra ofta', isCorrect: false }
    ],
    explanation: 'Mjuk körning minskar slitaget på bromsar och däck, vilket minskar partiklar.'
  },
  {
    question: '20. Vilken körteknik minskar mest bränsleförbrukningen på landsväg?',
    options: [
      { key: 20.1, text: 'Hålla jämn hastighet med hög växel', isCorrect: true },
      { key: 20.2, text: 'Köra på låga växlar', isCorrect: false },
      { key: 20.3, text: 'Snabb acceleration och motorbromsning', isCorrect: false },
      { key: 20.4, text: 'Växla ofta', isCorrect: false }
    ],
    explanation: 'Hög växel och låg motorbelastning vid jämn fart är mest effektivt.'
  },

];



export default data;