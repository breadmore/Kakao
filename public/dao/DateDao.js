var db = require('../db/gui');


var Date = {
selectAllDate: function (callback) {
    return db.query('select CAL_DAY, state from jdDate',callback);
},
selectNightShift: function (callback) {
        return db.query('select CAL_DAY from jdDate where state = \'야\'',callback);
    },
selectNightShiftB: function (callback) {
        return db.query('select CAL_DAY from jdDate where state = \'야B\'',callback);
    },
selectNonShift: function (callback) {
        return db.query('select CAL_DAY from jdDate where state = \'비\'',callback);
    },
selectNonWork: function (callback) {
        return db.query('select CAL_DAY from jdDate where state = \'휴\' AND CAL_DAY>=(date_format(now(), \'%d\')+0)',callback);
    },
selectDayWork: function (callback) {
        return db.query('select CAL_DAY from jdDate where state = \'주\'',callback);
    },
selectTodayWork: function (callback) {
        return db.query('select CAL_DAY, state from jdDate where CAL_DAY=(date_format(now(), \'%d\')+0)',callback);
    }
};

module.exports = Date;