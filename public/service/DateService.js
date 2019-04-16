var dateDao = require('../dao/DateDao');

function getAllDate(callback){
    dateDao.selectAllDate(callback);
}

function getNightShift(callback){
    dateDao.selectNightShift(callback);
}
function getNightShiftB(callback){
    dateDao.selectNightShiftB(callback);
}
function getNonShift(callback){
    dateDao.selectNonShift(callback);
}
function getNonWork(callback){
    dateDao.selectNonWork(callback);
}
function getDayWork(callback){
    dateDao.selectDayWork(callback);
}

module.exports = {
    getAllDate:getAllDate,
    getNightShift:getNightShift,
    getNightShiftB:getNightShiftB,
    getNonShift:getNonShift,
    getNonWork:getNonWork,
    getDayWork:getDayWork
};