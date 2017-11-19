// Reference : 'Programming Collective Intellignece' by Toby Segaran.
 
var ml = require('machine_learning');
 
var data =[['Clothing Stores',5],
    ['Clothing Stores',2],
    ['Clothing Stores',3],
    ['Clothing Stores',6],
    ['Clothing Stores',8],
    ['Clothing Stores',5],
    ['Clothing Stores',8],
    ['Clothing Stores',6],
    ['Clothing Stores',3],
    ['Clothing Stores',4],
    ['Clothing Stores',5],
    ['Clothing Stores',4],
    ['Clothing Stores',6],
    ['Clothing Stores',2],
    ['Convenience Stores',1],
    ['Convenience Stores',1],
    ['Convenience Stores',1],
    ['Convenience Stores',1],
    ['Convenience Stores',1],
    ['Convenience Stores',1],
    ['Convenience Stores',1],
    ['Convenience Stores',2],
    ['Convenience Stores',3],
    ['Convenience Stores',2],
    ['Department Stores',5],
    ['Department Stores',6],
    ['Department Stores',8],
    ['Department Stores',7],
    ['Department Stores',10],
    ['Department Stores',4],
    ['Department Stores',4],
    ['Department Stores',3],
    ['Department Stores',2],
    ['Department Stores',2],
    ['Electronics stores',3],
    ['Electronics stores',4],
    ['Electronics stores',3],
    ['Electronics stores',4],
    ['Electronics stores',5],
    ['Electronics stores',2],
    ['Electronics stores',4],
    ['Electronics stores',6],
    ['Grocery stores',7],
    ['Grocery stores',7],
    ['Grocery stores',3],
    ['Grocery stores',2],
    ['Grocery stores',2],
    ['Grocery stores',7],
    ['Grocery stores',5],
    ['Grocery stores',3],
    ['Grocery stores',2],
    ['Grocery stores',7],
    ['Grocery stores',3],
    ['Grocery stores',3],
    ['Grocery stores',2],
    ['Grocery stores',2],
    ['Grocery stores',6],
    ['Grocery stores',6],
    ['Grocery stores',3],
    ['Grocery stores',5],
    ['Grocery stores',5],
    ['Grocery stores',6],
    ['Grocery stores',3],
    ['Grocery stores',3],
    ['Grocery stores',4],
    ['Grocery stores',3],
    ['Grocery stores',4],
    ['Grocery stores',3],
    ['Grocery stores',4],
    ['Grocery stores',2],
    ['Grocery stores',3]
];

var result = ['Harry Rosen Inc.',
    'Joe Fresh',
    'La Senza',
    'Le Chateau',
    'Lululemon',
    'Mark\'s',
    'Moores',
    'Roots Canada',
    'Tip Top Tailors',
    'Ardene',
    'Aritzia',
    'Bluenotes',
    'Boutique La Vie en Rose',
    'Urban Planet',
    '7-Eleven'
    ,'Alimentation Couche-Tard'
    ,'Becker\'s'
    ,'Dollarama'
    ,'Mac\'s Convenience Stores'
    ,'Needs Convenience'
    ,'On the Run'
    ,'Pioneer Energy'
    ,'Provi-Soir'
    ,'Quickie Convenience Stores'
    ,'Canadian Tire'
    ,'Holt Renfrew'
    ,'Hudson\'s Bay (retailer)'
    ,'Marshall\'s'
    ,'Nordstrom'
    ,'Sears Canada'
    ,'La Maison Simons'
    ,'Walmart'
    ,'Winners'
    ,'FactoryDirect'
    ,'Henry\'s'
    ,'The Source'
    ,'Staples / Bureau en Gros'
    ,'TigerDirect'
    ,'Vistek'
    ,'FactoryDirect'
    ,'Telus'
    ,'Best Buy'
    ,'Loblaws'
    ,'Atlantic Superstore'
    ,'Dominion'
    ,'Extra Foods'
    ,'Fortinos'
    ,'Loblaws'
    ,'Maxi'
    ,'No Frills'
    ,'Provigo'
    ,'Real Canadian Superstore'
    ,'SaveEasy'
    ,'Valu-mart'
    ,'Your Independent Grocer'
    ,'Zehrs Markets'
    ,'Longo\'s'
    ,'Metro'
    ,'Food Basics'
    ,'A&P'
    ,'Loeb'
    ,'Metro'
    ,'Rabba Fine Foods'
    ,'Save-On-Foods'
    ,'Sobeys'
    ,'FreshCo'
    ,'IGA'
    ,'Safeway'
    ,'Sobeys'
    ,'Thrifty Foods'
    ,'Walmart'
];

var dt = new ml.DecisionTree({
    data : data,
    result : result
});

dt.build();
                                        //choose what to recommend based off user purchases
console.log("Classify : ", dt.classify(['Grocery stores',8]));
dt.prune(5);
