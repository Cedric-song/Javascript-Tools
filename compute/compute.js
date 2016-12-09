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


console.log(compute.add(1.11,4.44))
console.log(compute.mul(1.11,4.44))
console.log(compute.sub(23752.80,16000))
console.log(compute.div(23752.80,100))