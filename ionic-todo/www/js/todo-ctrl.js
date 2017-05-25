angular.module('starter')
    .controller('todoCtrl',['$scope',
        function($scope){
            $scope.task = {
                name: ""
            };
            $scope.tasks = {
                'complete' : [],
                'incomplete' : []
            };
            $scope.addTask = function(task) {
                $scope.tasks.incomplete.splice(0, 0,{
                    'name': task.name
                });
                $scope.task ={};
            };

            $scope.toggleTaskCompleted = function(from, task){
              if(from == "incomplete") {
                    var removedTask = $scope.tasks.incomplete.splice($scope.tasks.incomplete.indexOf(task),1);
                    $scope.tasks.complete.splice(0, 0, removedTask[0]);
                } else {
                  var removedTask = $scope.tasks.complete.splice($scope.tasks.complete.indexOf(task),1);
                  $scope.tasks.incomplete.splice(0, 0, removedTask[0]);

              }

            };
            $scope.deleteTask = function(from ,task){
                if (from == "incomplete"){
                    $scope.tasks.incomplete.splice($scope.tasks.incomplete.indexOf(task),1);
                }else{
                    $scope.tasks.completed.splice($scope.tasks.completed.indexOf(task),1);
                }

            };
        }

    ]);
