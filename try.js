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

var regexFixed = "[\\d]{1,5}\\.[\\d][\\d]"
console.log(fullTextAnnotation.text.match(/[\d]{1,5}\.[\d][\d]/g));

console.log(fullTextAnnotation.text.match(/[-|\][A-Z]{3,9}|\s/g));


})
.catch((err) => {
    console.error('ERROR:', err);
});