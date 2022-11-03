
////////// variables ///////////

var readingTVOC =  'test/TVOC';
var readingeCO2 = 'test/eCO2';
var readingrawEthanol = 'test/rawEthanol';
var readingrawH2 = 'test/rawH2';

const databaseTVOC = database.ref(readingTVOC);
const databaseCO2 = database.ref(readingeCO2);
const databaserawEthanol = database.ref(readingrawEthanol);
const databaserawH2  = database.ref(readingrawH2);

//////// variables pagina web /////

var TVOC;
var eCO2;
var rawEthanol;
var rawH2;

//////// obtencion y muestra de datos /////

databaseTVOC.on('value', (snapshot) => {
    TVOC = snapshot.val();
    console.log(TVOC);
    document.getElementById("reading-TVOC").innerHTML = TVOC;
}, (errorObject) => {
    console.log('la Lectura a fallado: ' + errorObject.name);
});

databaseCO2.on('value', (snapshot) => {
    eCO2 = snapshot.val();
    console.log(eCO2);
    document.getElementById("reading-eCO2").innerHTML = eCO2;
}, (errorObject) => {
    console.log('la Lectura a fallado: ' + errorObject.name);
});

databaserawEthanol.on('value', (snapshot) => {
    rawEthanol = snapshot.val();
    console.log(rawEthanol);
    document.getElementById("reading-rawEthanol").innerHTML = rawEthanol;
}, (errorObject) => {
    console.log('la Lectura a fallado: ' + errorObject.name);
});

databaserawH2.on('value', (snapshot) => {
    rawH2 = snapshot.val();
    console.log(rawH2);
    document.getElementById("reading-rawH2").innerHTML = rawH2;
}, (errorObject) => {
    console.log('la Lectura a fallado: ' + errorObject.name);
});
