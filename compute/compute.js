"use strict"
var compute = {}

compute.getM = function (na,nb){

  try{
    var pa = na.toString().split(".")[1].length 
  }catch(err){
    pa = 0
  }

  try{
    var pb = nb.toString().split(".")[1].length
  }
  catch(err){
    pb = 0
  }

  return pa > pb ? pa : pb
}

// addition
compute.add = function (na,nb){
  
  var m = this.getM(na,nb)
  var mid = ((na*Math.pow(10,m))+(nb*Math.pow(10,m))).toFixed(0).toString()
  return m === 0 ? parseInt(mid) : parseFloat(mid.slice(0,-m) + "." + mid.slice(-m))
}

// multiplication
compute.mul = function(na,nb) {

  var m = this.getM(na,nb)
  var mid = ((na*Math.pow(10,m))*(nb*Math.pow(10,m))).toFixed(0).toString()
  return m === 0 ? parseInt(mid) : parseFloat(mid.slice(0,-2*m) + "." + mid.slice(-2*m))
};

// subtraction
compute.sub = function (na,nb){

  return this.add(na,-(nb))
}

// division
compute.div = function (na,nb){

  var m = this.getM(na,nb)
  var mid = ((na*Math.pow(10,m))/(nb*Math.pow(10,m))).toString()
  return m === 0 ? parseInt(mid) : parseFloat(mid)
}

// 多项求积
/*
  @ parameters number or string
  compute.mulSum()  // throw err
  compute.mulSum(0) // 0
  compute.mulSum(0,1,2) // 0
  compute.mulSum(2,3,4,5) // 120
  compute.mulSum("2","3")  // 6
*/
compute.mulSum = function(){
  let res = 1
  let that = this
  if (arguments && arguments.length > 0) {
      [].slice.call(arguments).map(function(item) {
      res = that.mul(item,res)
    })
    return res
  }

  throw new Error("you have to input an parameters at least")
}


