(function(){
  'use strict'
  angular
  .module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController)
  LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope){
  $scope.dishes = "";
  $scope.message = "";
  $scope.inputClass = "";
  $scope.messageClass = "";
  $scope.check = function() {
    $scope.message = InputData($scope.dishes);
    $scope.inputClass = InputClass($scope.dishes);
    $scope.messageClass = MessageClass($scope.dishes);
  }
  $scope.reset = function(){
    $scope.message = "";
    $scope.inputClass = "";
    $scope.messageClass = "";
  }
}
function InputData(dishes){
  if (dishes.trim() == "") {
  return "please input data first";
}
else if(CheckData(dishes) <= 3){
  return "Enjoy";
}
else {
  return "Too much";
}
}
function InputClass(dishes){
  if(dishes.trim() == ""){
    return "error";
  }
  else {
    return "success";
  }
}
function MessageClass(dishes){
  if (dishes.trim() == ""){
    return "error";
  }
  else
  {
    return "success";
  }
}
function CheckData(dishes){
  var items = dishes.split(",");
  var num = 0;
  for(var i = 0; i < items.length; i++){
    if(items[i].trim() != ""){
      num ++;
    }
  }
  return num;
}
})()
