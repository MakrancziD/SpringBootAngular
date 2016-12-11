(function(angular) {
    var AppController = function($scope, User) {
        User.query(function(response) {
            $scope.users = response ? response : [];
        });

        $scope.addUser = function(user) {
            new User({
                username: user.username,
                password: user.password,
                balance: user.balance
            }).$save(function(user) {
                $scope.users.push(user);
            });
            $scope.newUser = "";
        };

        $scope.updateUser = function(aUser) {
            // new User({
            //     username: user.username,
            //     password: user.password,
            //     balance: user.balance})
                aUser.$update();
            //$scope.users.updateUser(user)
        };

        $scope.deleteUser = function(user) {
            user.$remove(function() {
                $scope.users.splice($scope.users.indexOf(user), 1);
            });
        };

        $scope.openModal=function () {
            $scope.newUser = null;
        };

        $scope.editModal=function(user) {
            $scope.editUser = null;
            $scope.selectedUser = user;
        }
    };

    AppController.$inject = ['$scope', 'User'];
    angular.module("myApp.controllers").controller("AppController", AppController);
}(angular));