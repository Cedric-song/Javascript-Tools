/*  
*  
*  格式化时间
*  传入10位或者13位时间戳，返回格式yyyy/mm/dd hh:mm:ss
*  @ time : number 
*  
*/
function formatDate (time){
    let _time = time
    if (typeof _time !== 'number' || _time < 0) {
      return _time
    }
    if( _time.toString().length === 10 ){
      _time = parseInt(_time.toString().concat('000'))
    }

    let date = new Date(_time)

    return ([date.getFullYear(),date.getMonth() + 1,date.getDate()]).map(function(item){
      let _item = item.toString()
      return _item[1] ? _item : '0'.concat(_item) 
    }).join("/").concat(" ").concat(([date.getHours(),date.getMinutes(),date.getSeconds()]).map(function(item){
      let _item = item.toString()
      return _item[1] ? _item : '0'.concat(_item) 
    }).join(":"))
}


module.exports = {
  formatDate: formatDate
}