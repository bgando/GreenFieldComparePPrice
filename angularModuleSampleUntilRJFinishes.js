/*
Optional section if you've completed the rest of this prompt:   
  * If you are using ng-view, or some other directives, Angular requires you serve your code from a web server, not directly from the file-system. One simple way to do this is to run `python -m SimpleHTTPServer` from the directory where your code is. Going to the url the program's output gives you will allow you to open your files in the browser from the local python web server. If you don't have python installed, you'll first need to run `brew install python`.
*/


/*

*/

angular.module("Compare",  ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/index');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/index',
            controller: 'GetDataApi'
            // templateUrl: 'index.html'
        });
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        
        
})
        .controller('GetDataApi', ['$rootScope','$scope', '$http', functionName]);

    function functionName($rootScope,$scope, $http ){
        console.log("Hello");
        var googleApiKey = "AIzaSyAV9gLZMExE7Y71Zb_Cfpj_GUlsHA0hFIc";
        var queryString = "power";
        function fetch() {

            // " http://data.colorado.gov/resource/4ykn-tg5h.json" get data from colorado
           
            /*
                An example of searching with an image, I still neead to add the query after q=
            "https://cse.google.com:443/cse/v1?key=" + googleApiKey + "&cx=011064704289244729545:_kjaxoek5uy&searchType=image&start=41&imgType=photo&q="
            
            */
        $http.get("https://cse.google.com:443/cse/v1?key=" + googleApiKey + "&cx=011064704289244729545:_kjaxoek5uy&searchType=image&start=41&imgType=photo&q=")
          .then(function (response) {
                console.log("success");
              console.log("response", response);

              $scope.details = response;
              $scope.data1 = response.data;
              $scope.fullData = [];
              // for (var i = 0; i < response.data.length; i++) {
              //   // $scope.fullData.push(response.data[i].agentfirstname + " " + response.data[i].agentlastname + " is the principal agent for the coporation " + response.data[i].entityname + ". This corporation is located in Colorado. The address of the corporation in question is " + response.data[i].principaladdress1+ ", Colorado, United States. The Zip code of which is " + response.data[i].principalzipcode + ".");
              // }
            console.log("data1", response.data.length);
            console.log("data1", $scope.data1);
          }, function(error){
                  console.log("error message:", error);
        });
      }
 
  fetch(); 
}