var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var port= 8080;

var url = "https://en.wikipedia.org/wiki/List_of_Canadian_stores";


request(url,function(err,resp,body){
    var $ = cheerio.load(body);
    var clothingStores = $('.toc');

    var specStoreName = $('.mw-content-ltr ul, .mw-content-rtl .mw-content-ltr ul');

//.filter(function(i,el){ return $(this).parent() === clothingStores[0]})
            //console.log(specStoreName.text());
    var hi = clothingStores.text().split(/\n/g);
    var higher = [];
    var counter = 0;
    for (var i = 0; i < hi.length;i++){
        if (hi[i].toString() != ''){
            higher[counter] = hi[i];
            counter++;
        }
    }

    for (var i = 0; i < higher.length;i++){

            higher [i] = higher[i].replace(/\d/g,"");
        higher [i] = higher[i].replace(/^\s/g,"");
        higher [i] = higher[i].replace(/\s/g,"_");

    }

})


app.listen(port);
console.log('server running on' +port);