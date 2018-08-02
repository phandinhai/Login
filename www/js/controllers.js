/* global http, dev */

angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        })
        /* --------------------------------------------begin Đăng Nhặp */
        .controller('DangNhapCtrl', function ($scope, $ionicPopup, $state, $ionicLoading, $http) {
            $scope.data = {};
            $scope.login = function () {
                $scope.username = 'b';
                $scope.password = 'b';
                var username = (!angular.isUndefined($scope.data.username)) ? $scope.data.username : "";
                var password = (!angular.isUndefined($scope.data.password)) ? $scope.data.password : "";
                console.log($scope.data.username);
                if (!username)
                {
                    $scope.username = 'a';
                }
                if (!password)
                {
                    $scope.password = 'a';
                }
                else {
                    $ionicLoading.show();
                    var dataPost = {

                        username: username,
                        password: password

                    };
                    $http({
                        url: "http://api-dev.gdesk.io/v3/auth/login",

                        method: 'POST',
                        data: dataPost
                    }).then(function (response) {
                        console.log(response.data.success);
                        $scope.error = response.data.message;
                        if (response.data.success === true) {
                            $state.go("app.playlists");
                        } else {
                            response.data.message;
                        }
                        
                    }).finally(function () {
                        $ionicLoading.hide();
                    });
                }
            };

            $scope.Create = function () {
                $state.go("CreateAccount");
                $ionicLoading.show();
                $ionicLoading.hide();
            };
        })
        /*-------------------------------------------- end Đăng Nhặp */

        /* --------------------------------------------begin Accuont */
        .controller('CreateAccountCtrl', function ($scope, $ionicModal, $state, $ionicPopup, $http) {

            $scope.data = {};
            $scope.$on('$ionicView.enter', function () {
                $scope.fillData(true);
                $scope.loadDropdown();

            });

            //---------------------------------------------- hàm lưu data
            $scope.save = function () {
                $scope.firstname = 'b';
                $scope.lastname = 'b';
                $scope.email = 'b';
                $scope.username = 'b';
                $scope.password = 'b';
                $scope.companyname = 'b';
                var firstname = (!angular.isUndefined($scope.data.firstname)) ? $scope.data.firstname : "";
                var lastname = (!angular.isUndefined($scope.data.lastname)) ? $scope.data.lastname : "";
                var email = (!angular.isUndefined($scope.data.email)) ? $scope.data.email : "";
                var username = (!angular.isUndefined($scope.data.username)) ? $scope.data.username : "";
                var password = (!angular.isUndefined($scope.data.password)) ? $scope.data.password : "";
                var companyname = (!angular.isUndefined($scope.data.companyname)) ? $scope.data.companyname : "";
                window.localStorage.setItem("firstname", $scope.data.firstname);
                window.localStorage.setItem("lastname", $scope.data.lastname);
                window.localStorage.setItem("email", $scope.data.email);
                window.localStorage.setItem("username", $scope.data.username);
                window.localStorage.setItem("password", $scope.data.password);
                window.localStorage.setItem("companyname", $scope.data.companyname);

                if (!firstname)
                {
                    $scope.firstname = 'a';
                }if (!lastname )
                {
                    $scope.lastname = 'a';
                }if (!email)
                {
                    $scope.email = 'a';
                }if (!username )
                {
                    $scope.username = 'a';
                }if (!password )
                {
                    $scope.password = 'a';
                }if (!companyname)
                {
                    $scope.companyname = 'a';
                }else {
                    var dataPost = {
                        email: email,
                        username: username

                    };
                    $http({
                        url: "http://api-dev.gdesk.io/v2/auth/profileexist",

                        method: 'POST',
                        data: dataPost
                    }).then(function (response) {
                        if (response.data.success === true) {
                            $state.go("CreateAccountP2");

                        } else {
                            $scope.error = response.data.message;
                            console.log($scope.error);
                        }

                    }, function () {

                    });
                }
            };

        })
        .controller('CreateAccountP2Ctrl', function ($scope, $ionicModal, $state, $ionicPopup, $http) {

            $scope.data = {};
            $scope.$on('$ionicView.enter', function () {

            });
            //---------------------------------------- hàm lưu data
            $scope.save = function (response) {
                $scope.companyphon = 'b';
                $scope.streetaddress = 'b';
                $scope.emaiapt_suite_floorl = 'b';
                $scope.city = 'b';
                $scope.sta = 'b';
                $scope.zipcode = 'b';
                var companyphon = (!angular.isUndefined($scope.data.companyphon)) ? $scope.data.companyphon : "";
                var streetaddress = (!angular.isUndefined($scope.data.streetaddress)) ? $scope.data.streetaddress : "";
                var apt_suite_floor = (!angular.isUndefined($scope.data.apt_suite_floor)) ? $scope.data.apt_suite_floor : "";
                var city = (!angular.isUndefined($scope.data.city)) ? $scope.data.city : "";
                var sta = (!angular.isUndefined($scope.data.sta)) ? $scope.data.sta : "";
                var zipcode = (!angular.isUndefined($scope.data.zipcode)) ? $scope.data.zipcode : "";
                var devuce = (!angular.isUndefined(ionic.Platform.platform() + ionic.Platform.version())) ? ionic.Platform.platform() + ionic.Platform.version() : "";
                var firstname = window.localStorage.getItem("firstname");
                var lastname = window.localStorage.getItem("lastname");
                var email = window.localStorage.getItem("email");
                var username = window.localStorage.getItem("username");
                var password = window.localStorage.getItem("password");
                var companyname = window.localStorage.getItem("companyname");

                if (!companyphon)
                {
                    $scope.companyphon = 'a';
                }if (!streetaddress )
                {
                    $scope.streetaddress = 'a';
                }if (!apt_suite_floor)
                {
                    $scope.apt_suite_floor = 'a';
                }if (!city )
                {
                    $scope.city = 'a';
                }if (!sta )
                {
                    $scope.sta = 'a';
                }if (!zipcode)
                {
                    $scope.zipcode = 'a';
                } else {
                    var dataPost = {
                        "company": {"address": streetaddress,
                            "apt": apt_suite_floor,
                            "city": city,
                            "phone": companyphon,
                            "state": sta,
                            "zipcode": zipcode},
                        "device": devuce,
                        "profile": {"company_name": companyname,
                            "email": email,
                            "first_name": firstname,
                            "last_name": lastname,
                            "password": password,
                            "username": username}

                    };
                    $http({
                        url: "http://api-dev.gdesk.io/v2/auth/signup",

                        method: 'POST',
                        data: dataPost
                    }).then(function (response) {


                        if (response.data.success === true) {
                            message = "Thêm thành công";
                            $state.go("login");
                        } else {
                            $scope.error = response.data.message;
                        }

                    }, function (response) {

                    });
                }
            };

        })
        /* ---------------------------------------------------end Accuont */
        .controller('PlaylistsCtrl', function ($scope) {
            $scope.playlists = [
                {title: 'Reggae', id: 1},
                {title: 'Chill', id: 2},
                {title: 'Dubstep', id: 3},
                {title: 'Indie', id: 4},
                {title: 'Rap', id: 5},
                {title: 'Cowbell', id: 6}
            ];
        })

        .controller('PlaylistCtrl', function ($scope, $stateParams) {
        });
