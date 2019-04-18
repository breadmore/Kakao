var express = require('express');
var router = express.Router();
var dateService = require('../public/service/DateService');

/* GET home page. */
router.get('/', function(req, res, next) {

    var result=[
        {
        cal:"1",
        state:"2"
    },
        {
            cal:"3",
            state:"4"
        },
        {
            cal:"5",
            state:"6"
        }
    ];


    res.render('index', { title:"hello"});
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

router.post('/showTodayWork',function (req,res) {
    /*
    dateService.getTodayWork(function (err, result) {
        if(err){
            res.status(500).send(err);
        }else{
            var temp="";
            var string="오늘은 ";
            string=string+temp.concat(result[0].state) + " 란다!"

            const responseBody = {
                version: "2.0",
                template: {
                    outputs: [
                        {
                            simpleText: {
                                text : string
                            }
                        }
                    ]
                }
            };
            res.status(200).send(responseBody);
        }
    });
    */
    dateService.getNonWork(function (err, result) {
        if(err){
            res.status(500).send(err);
        }else{
            var temp="";
            var string="휴일은 ";
            for(var i=0; i<result.length; i++){
                if(i<result.length-1)
                    string=string+temp.concat(result[i].CAL_DAY+", ")
                else
                    string=string+temp.concat(result[i].CAL_DAY)
            }
            const responseBody = {
                version: "2.0",
                template: {
                    outputs: [
                        {
                            simpleText: {
                                text : string
                            }
                        }
                    ]
                }
            };
            res.status(200).send(responseBody);
        }
    });

})


module.exports = router;
