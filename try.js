var Vision = require('@google-cloud/vision');

var vision = Vision({
    projectId: 'precise-treat-179414',
    keyFilename: 'C:\\Users\\Welson\\Desktop\\JS FOLDER\\keyfile.json'
});

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = 'C:\\Users\\Welson\\Desktop\\JS FOLDER\\reciept3.jpg';

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
var priceAndLName = [];

priceList = fullTextAnnotation.text.match(/[\d]{1,5}\.[\d][\d]/g);
nameList = names.match(/[-|\][A-Z]{3,9}|\s/g);
var largestNumber = priceList[0];
var indexOfLargestNumber = 0;
var secondlargestNumber = priceList[0];

console.log(nameList[0] + " " + nameList[1]);
for(var i=0;i<priceList.length;i++){
    if ( parseFloat(priceList[i]) > largestNumber){
        largestNumber = parseFloat(priceList[i]);

        indexOfLargestNumber = i;
    }
}

priceList[indexOfLargestNumber] = 0;

for(var i=0;i<priceList.length;i++){
    if ( parseFloat(priceList[i]) > secondlargestNumber &&  parseFloat(priceList[i]) != 13  ){
        secondlargestNumber = parseFloat(priceList[i]);
    }
}

console.log("Total "+secondlargestNumber );

})
.catch((err) => {
    console.error('ERROR:', err);
});