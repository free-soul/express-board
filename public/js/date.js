
module.exports.createDate = function() {
    
    var datetime = new Date();
    return `${datetime.getFullYear()}-${datetime.getMonth()}-${datetime.getDay()} ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
}