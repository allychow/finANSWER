//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Expense = require('./model/expenses');
var Bill = require('./model/bills');
var Receipt = require('./model/receipts');

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

//db config -- REPLACE USERNAME/PASSWORD/DATABASE WITH YOUR OWN FROM MLAB!
var mongoDB = 'mongodb://finanswer:finanswer@ds113566.mlab.com:13566/finanswer';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//adding the /expenses route to our /api router
router.route('/expenses')
  //retrieve all expenses from the database
  .get(function(req, res) {
    //looks at our Expense Schema
    Expense.find(function(err, expenses) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(expenses)
    });
  })
  //post new comment to the database
  .post(function(req, res) {
    var expense = new Expense();
    (req.body.title) ? expense.title = req.body.title : null;
    (req.body.amount) ? expense.amount = req.body.amount : null;
    (req.body.type) ? expense.type = req.body.type : null;

    expense.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Expense successfully added!' });
    });
  });

//Adding a route to a specific comment based on the database ID
router.route('/expenses/:expense_id')
//The put method gives us the chance to update our comment based on the ID passed to the route
  .put(function(req, res) {
    Expense.findById(req.params.expense_id, function(err, expense) {
      if (err)
        res.send(err);
      //setting the new author and text to whatever was changed. If nothing was changed
      // we will not alter the field.
      (req.body.title) ? expense.title = req.body.title : null;
      (req.body.amount) ? expense.amount = req.body.amount : null;
      (req.body.type) ? expense.type = req.body.type : null;
      //save comment
      expense.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'Expense has been updated' });
      });
    });
  })
  //delete method for removing a comment from our database
  .delete(function(req, res) {
    //selects the comment by its ID, then removes it.
    Expense.remove({ _id: req.params.expense_id }, function(err, expense) {
      if (err)
        res.send(err);
      res.json({ message: 'Expense has been deleted' })
    })
  });

//new
router.route('/receipts')
//retrieve all comments from the database
    .get(function(req, res) {
        //looks at our Comment Schema
        Receipt.find(function(err, receipts) {
            if (err)
                res.send(err);
            //responds with a json object of our database comments.
            res.json(receipts)
        });
    })
    //post new comment to the database
    .post(function(req, res) {
        var receipt = new Receipt();
        (req.body.storeTitle) ? receipt.storeTitle = req.body.storeTitle : null;
        (req.body.totalCost) ? receipt.totalCost = req.body.totalCost : null;


        receipt.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Receipt successfully added!' });
        });
    });
//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
