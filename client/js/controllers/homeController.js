app.controller('homeCtrl',['$scope','$http','$state', function($scope, $http, $state) {
    
    $scope.scrollTo = function($scrollTarget) { 
        var offset = angular.element(document.querySelector($scrollTarget)).prop('offsetTop');

        $('html, body').animate({scrollTop: offset}, 'slow');
    };
    
    //User name validation
    $scope.checkUsername = function($event){
        // Lookup user by username
        $scope.username_empty_error = false;
        
        if($scope.username_input != ""){
            return $http.get('/api/secretaryusers/findOne?filter={"where":{"username":"'+ $scope.username_input+'"}}').then(
                    function success() {
                        //username exists, this means validation fails
                        document.querySelector("#username_input").style.borderBottom = "1px solid #F44336";
                        document.querySelector("#username_input").style.boxShadow="0 1px 0 0 #F44336";
                        $scope.username_exists_error = true;
                        return true;
                    }, function error() {
                        //username does not exist, therefore this validation passes
                        document.querySelector("#username_input").style.borderBottom = "1px solid #4CAF50";
                        document.querySelector("#username_input").style.boxShadow="0 1px 0 0 #4CAF50";
                        $scope.username_exists_error = false;
                        return true;
                    });
        }
        else{
            document.querySelector("#username_input").style.borderBottom = "1px solid #9e9e9e";
            document.querySelector("#username_input").style.boxShadow="none";
            $scope.username_exists_error = false;
        }

        
    }
    
    //Email validation 
    $scope.checkEmail = function($event){

        $scope.email_used_error = false;

        if($scope.email_input != ""){
            return $http.get('/api/secretaryusers/findOne?filter={"where":{"email":"'+ $scope.email_input+'"}}').then(
                    function success() {
                        //email used, this means validation fails
                        document.querySelector("#email_input").style.borderBottom = "1px solid #F44336";
                        document.querySelector("#email_input").style.boxShadow="0 1px 0 0 #F44336";
                        $scope.email_used_error = true;
                        return true;
                    }, function error() {
                        //email does not exist, therefore this validation passes
                        document.querySelector("#email_input").style.borderBottom = "1px solid #4CAF50";
                        document.querySelector("#email_input").style.boxShadow="0 1px 0 0 #4CAF50";
                        $scope.email_used_error = false;
                        return true;
                    });
        }
        else{
            document.querySelector("#email_input").style.borderBottom = "1px solid #9e9e9e";
            document.querySelector("#email_input").style.boxShadow="none";
            $scope.email_used_error = false;
        }

    }
    //Password validation
    var pswd="";
    
    $scope.storePassword = function($event){
        pswd = $scope.password_input;
    }
    
    $scope.checkPassword = function($event){
        
        $scope.confirm_password_empty_error = false;
        
        if(!(pswd === $scope.confirm_password_input)){
            document.querySelector("#confirm_password_input").style.borderBottom = "1px solid #F44336";
            document.querySelector("#confirm_password_input").style.boxShadow="0 1px 0 0 #F44336";
            $scope.password_notidentical_error = true;
        }
        else{
            document.querySelector("#confirm_password_input").style.borderBottom = "1px solid #4CAF50";
            document.querySelector("#confirm_password_input").style.boxShadow="0 1px 0 0 #4CAF50";
            $scope.password_notidentical_error = false;
        }
        
    }
    
    //Fields validation
    $scope.checkFields = function(){
        
        if(document.querySelector("#firstname_input").value===""){
            document.querySelector("#firstname_input").style.borderBottom = "1px solid #F44336";
            document.querySelector("#firstname_input").style.boxShadow="0 1px 0 0 #F44336";
            $scope.firstname_error = true;
        }
        else{
            document.querySelector("#firstname_input").style.borderBottom = "1px solid #4CAF50";
            document.querySelector("#firstname_input").style.boxShadow="0 1px 0 0 #4CAF50";
            $scope.firstname_error = false;
        }
        
        if(document.querySelector("#lastname_input").value===""){
            document.querySelector("#lastname_input").style.borderBottom = "1px solid #F44336";
            document.querySelector("#lastname_input").style.boxShadow="0 1px 0 0 #F44336";
            $scope.lastname_error = true;
        }
        else{
            document.querySelector("#lastname_input").style.borderBottom = "1px solid #4CAF50";
            document.querySelector("#lastname_input").style.boxShadow="0 1px 0 0 #4CAF50";
            $scope.lastname_error = false;
        }
        
        if(document.querySelector("#username_input").value===""){
            document.querySelector("#username_input").style.borderBottom = "1px solid #F44336";
            document.querySelector("#username_input").style.boxShadow="0 1px 0 0 #F44336";
            $scope.username_empty_error = true;
        }
        else{
            //$scope.checkUsername();
            
        }
        
        if(document.querySelector("#email_input").value===""){
            document.querySelector("#email_input").style.borderBottom = "1px solid #F44336";
            document.querySelector("#email_input").style.boxShadow="0 1px 0 0 #F44336";
            $scope.email_empty_error = true;
        }
        else{
            //check email
            $scope.email_empty_error = false;
        }
        
        if(document.querySelector("#password_input").value===""){
            document.querySelector("#password_input").style.borderBottom = "1px solid #F44336";
            document.querySelector("#password_input").style.boxShadow="0 1px 0 0 #F44336";
            $scope.password_empty_error = true;
        }
        else{
            document.querySelector("#password_input").style.borderBottom = "1px solid #4CAF50";
            document.querySelector("#password_input").style.boxShadow="0 1px 0 0 #4CAF50";
            $scope.password_empty_error = false;
        }
        
        if(document.querySelector("#confirm_password_input").value===""){
            document.querySelector("#confirm_password_input").style.borderBottom = "1px solid #F44336";
            document.querySelector("#confirm_password_input").style.boxShadow="0 1px 0 0 #F44336";
            $scope.confirm_password_empty_error = true;
        }
        else{
            
            $scope.checkPassword();
        }
    }
    
    //Send sign up form
    $scope.createAccount = function(){
        
        $scope.checkFields();
        
        if( !($scope.firstname_error) 
           && !($scope.lastname_error)
           && !($scope.username_empty_error)
          && !($scope.username_exists_error)
          && !($scope.email_empty_error)
          && !($scope.email_used_error)
          && !($scope.password_empty_error)
          && !($scope.password_notidentical_error )){
            
              
            var req = {
                method: 'POST',
                url: '/api/secretaryusers',
                headers: {
                    'Content-Type': "application/json;charset=UTF-8"
                },
                data: { 
                    firstname : document.querySelector("#firstname_input").value,
                    lastname : document.querySelector("#lastname_input").value,
                    username : document.querySelector("#username_input").value,
                    email : document.querySelector("#email_input").value,
                    password : document.querySelector("#password_input").value
                }
            };
            
            $http(req).then(
                function success(){
                   $state.go('login');
                },
                function error(){
                   console.error("Erreur lors de la création d'un compte");
                }
            );
            
          }
    }
}]);



