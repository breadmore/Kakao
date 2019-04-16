var db = require('../db/gui');


var Date = {
selectAllDate: function (callback) {
    return db.query('select CAL_DAY, state from jddate',callback);
},
selectNightShift: function (callback) {
        return db.query('select CAL_DAY from jdDate where state = \'야\' ;',callback);
    },
selectNightShiftB: function (callback) {
        return db.query('select CAL_DAY from jdDate where state = \'야B\' ;',callback);
    },
selectNonShift: function (callback) {
        return db.query('select CAL_DAY from jdDate where state = \'비\' ;',callback);
    },
selectNonWork: function (callback) {
        return db.query('select CAL_DAY from jdDate where state = \'휴\' ',callback);
    },
selectDayWork: function (callback) {
        return db.query('select CAL_DAY from jdDate where state = \'주\' ;',callback);
    }
};

module.exports = Date;