var Vision = require('@google-cloud/vision');

var vision = Vision({
    projectId: 'precise-treat-179414',
    keyFilename: 'C:\\Users\\Welson\\Desktop\\JS FOLDER\\keyfile.json'
});

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = 'C:\\Users\\Welson\\Desktop\\JS FOLDER\\reciept2.jpg';

// Performs text detection on the local file
vision.documentTextDetection({ source: { filename: fileName } })
    .then((results) => {
    const fullTextAnnotation = results[0].fullTextAnnotation;



var price =  fullTextAnnotation.text.replace(/^(?!SUBTOTAL|TOTAL|CASH|HST|GST|QST|DUE|CHANGE|TEND$).+/gm,"");
var names = fullTextAnnotation.text.replace(/^(SUBTOTAL|TOTAL|CASH|HST|GST|QST|DUE|CHANGE DUE|CHANGE|TEND|\r\n$)/gm,"");
names = names.replace(/\n/g,"");
names = names.replace(/\s/g,"");

var nameList =[];
var priceList=[];
for(var i=0;i<10000;i++){
    nameList = fullTextAnnotation.text.match(/[\d]{1,5}\.[\d][\d]/g);
}
for(var i=0;i<10000;i++){
    priceList = names.match(/[-|\][A-Z]{3,9}|\s/g);
}
console.log(nameList);
console.log(priceList);



})
.catch((err) => {
    console.error('ERROR:', err);
});