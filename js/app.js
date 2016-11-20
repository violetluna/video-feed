var myApp = angular.module('myApp', ['infinite-scroll']);
myApp.controller('myController', function($scope) {



   $scope.clips = [

            { 
              id: "1",
              title: "Clip Title 1",
              file: "video/Red_flowers.mp4" 
            },

              { 
              id: "2",
              title: "Clip Title 2",
              file: "video/dragon_fly_in_ultra_slow_motion.mp4" 
            },

              { 
              id: "3",
              title: "Clip Title 3",
              file: "video/Red_flowers.mp4" 
            }, 

            { 
              id: "4",
              title: "Clip Title 4",
              file: "video/dragon_fly_in_ultra_slow_motion.mp4" 
            } ,

             { 
              id: "5",
              title: "Clip Title 5",
              file: "video/Red_flowers.mp4" 
            } ,

             { 
              id: "6",
              title: "Clip Title 6",
              file: "video/dragon_fly_in_ultra_slow_motion.mp4" 
            }


        ];

   $scope.limit= 2;

   $scope.loadMore = function() {

      var increamented = $scope.limit + 2;
      $scope.limit = increamented > $scope.clips.length ? $scope.clips.length : increamented;


    };


  
});