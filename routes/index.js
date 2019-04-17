var express = require('express');
var router = express.Router();
var dateService = require('../public/service/DateService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sayHello', function(req, res) {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: "hello I'm Ryan"
                    }
                }
            ]
        }
    };

    res.status(200).send(responseBody);
});

router.post('/showHello', function(req, res) {
    console.log(req.body);

    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleImage: {
                        imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
                        altText: "hello I'm Ryan"
                    }
                }
            ]
        }
    };

    res.status(200).send(responseBody);
});

router.post('/showAll',function (req,res) {
    dateService.getAllDate(function (err, result) {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(result);
        }
    });
});

router.post('/showNightShift',function (req,res) {
    dateService.getNightShift(function (err, result) {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(result);
        }
    });
})

router.post('/showNightShiftB',function (req,res) {
    dateService.getNightShiftB(function (err, result) {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(result);
        }
    });
})

router.post('/showNonShift',function (req,res) {
    dateService.getNonShift(function (err, result) {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(result);
        }
    });
})

router.post('/showNonWork',function (req,res) {
    dateService.getNonWork(function (err, result) {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(result);
        }
    });
})

router.post('/showDayWork',function (req,res) {
    dateService.getDayWork(function (err, result) {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(result);
        }
    });
})

module.exports = router;
