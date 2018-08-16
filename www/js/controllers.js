/* global http, dev, fabric, ctx */

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
                } else {
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
                            $state.go("Fabric");
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
            };
        })
        /*-------------------------------------------- end Đăng Nhặp */

        /* --------------------------------------------begin Accuont */
        .factory('FabricRender', ['fabric', function (fabric) {
                var canvas;
                function render() {
                    if (!canvas) {
                        return;
                    }
                    // your render logic with provided canvas instance
                }
                function init(canvasInstance) {
                    canvas = canvasInstance;
                    render();
                }
                return {
                    init: init
                            // do some clean up by exporting destory function
                };
            }])
        .controller('CreateAccountCtrl', function ($scope, $ionicModal, $state, $ionicPopup, $http) {
            $scope.data = {};
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
                    $scope.firstname = 'a';//a,b là ẩn hiện dấu chấm than.
                }
                if (!lastname)
                {
                    $scope.lastname = 'a';
                }
                if (!email)
                {
                    $scope.email = 'a';
                }
                if (!username)
                {
                    $scope.username = 'a';
                }
                if (!password)
                {
                    $scope.password = 'a';
                }
                if (!companyname)
                {
                    $scope.companyname = 'a';
                } else {
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
                        }
                        if ($scope.username === 'a') {
                            response.data.message;
                        } else {
                            $scope.error = response.data.message;
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
                }
                if (!streetaddress)
                {
                    $scope.streetaddress = 'a';
                }
                if (!apt_suite_floor)
                {
                    $scope.apt_suite_floor = 'a';
                }
                if (!city)
                {
                    $scope.city = 'a';
                }
                if (!sta)
                {
                    $scope.sta = 'a';
                }
                if (!zipcode)
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


        .controller('FabricCtrl', function ($scope, $ionicModal, $timeout) {

            var canvas = new fabric.Canvas('c', {selection: false}, {backgroundColor: "#0ff"});
            canvas.renderTop();
            var canvasScale = 1;
            var SCALE_FACTOR = 1.2;
            var circle, line, isDown, origX, origY, ellipse;
            var type = 'circle';
            var mode = 'draw';
            var mode1 = 'circleF';
            var mode2 = 'Arrow_TH';
            var mode3 = 'Lines';
            function removeEvents() {
                canvas.isDrawingMode = false;
                canvas.selection = false;
                canvas.off('mouse:down');
                canvas.off('mouse:up');
                canvas.off('mouse:move');
            }
            ;

            function changeObjectSelection(value) {

                canvas.forEachObject(function (obj) {
                    obj.selectable = value;
                });
                canvas.renderAll();
            }
            window.onkeydown = function (e) {
                if (e.keyCode === 'A'.charCodeAt(0)) {
                }
            };
            btnHline.onclick = function () {
                type = 'hline';
            };
            btnMode.onclick = function () {
                removeEvents();
                changeObjectSelection(true);
                 
                this.value = mode = mode === 'draw' ? 'select' : 'draw';
                if (mode === 'select') {
                    $scope.drawing = true;
                    canvas.selection = true;
                    console.log($scope.drawing);
                } else {
                    $scope.drawing = false;
                    canvas.selection = true;
                    console.log($scope.drawing);
                }
            };
            btnCircle.onclick = function () {
                removeEvents();
                changeObjectSelection(true);
                this.value = mode1 = mode1 === 'circle' ? 'circleF' : 'circle';
            };
            btnArrow.onclick = function () {
                removeEvents();
                changeObjectSelection(true);
                this.value = mode2 = mode2 === 'Arrow' ? 'Arrow_TH' : 'Arrow';
                //console.log(mode2);
            };
            btnLine.onclick = function () {
                console.log("aad");
                removeEvents();
                changeObjectSelection(true);
                this.value = mode3 = mode3 === 'Line' ? 'Lines' : 'Line';

            };

            function extend(src, dest) {
                for (var m in src)
                    dest[m] = src[m];
                return dest;
            }
            changeObjectSelection(true);


            $scope.Hline = function () {
                $scope.tb = false;
                removeEvents();
                changeObjectSelection(false);
                if (mode === 'draw')
                    canvas.isDrawingMode = 1;
                canvas.freeDrawingBrush.color = 'rgba(0,0,0,0.0)';

                canvas.freeDrawingBrush.width = 10;
                var color = document.getElementById("myColor").value;
                console.log(color);
                canvas.on('mouse:move', function () {
                    canvas.freeDrawingBrush.color = color;
                });
                canvas.on('mouse:up', function () {
                    canvas.freeDrawingBrush.color = 'rgba(0,0,0,0.0)';
                });
            };

            canvas.on('object:added', function () {
                if (!isRedoing) {
                    h = [];
                }
                isRedoing = false;
            });

            var isRedoing = false;
            var h = [];

            $scope.Undo = function () {
                if (canvas.getObjects().length > 0) {
                    h.push(canvas.getObjects().pop());
                    canvas.renderAll();

                }

            };

            $scope.Redo = function () {
                //console.log(canvas.getObjects());|| canvas._objects.length
                if (h.length > 0) {
                    isRedoing = true;
                    canvas.add(h.pop());
                    console.log(h.length + "-----redo");
                }

            };

            $scope.del = function () {
                var activeObject = canvas.getActiveObjects();

                if (activeObject) {
                    activeObject.forEach(function (object) {
                        canvas.remove(object);
                        console.log(object.length);

                    });
                    canvas.discardActiveObject();


                }
                canvas.renderAll();

            };

            $scope.clear = function () {
                canvas.clear();
            };
            $scope.Arrowxx = function () {
                const LineWithArrow = fabric.util.createClass(fabric.Line, {
                    type: 'line_with_arrow',
                    hasBorders: false,
                    hasControls: false,

                    _getCacheCanvasDimensions() {
                        var dim = this.callSuper('_getCacheCanvasDimensions');
                        dim.width += 100; // found by trial and error
                        dim.height += 100; // found by trial and error
                        return dim;
                    },
                    _render(ctx) {
                        this.callSuper('_render', ctx);
                        ctx.save();
                        const xDiff = this.x2 - this.x1;
                        const yDiff = this.y2 - this.y1;
                        console.log(xDiff);
                        console.log(yDiff);
                        const angle = Math.atan2(yDiff, xDiff);
                        ctx.translate((this.x2 - this.x1) / 2, (this.y2 - this.y1) / 2);
                        ctx.rotate(angle);
                        ctx.beginPath();
                        // Move 5px in front of line to start the arrow so it does not have the square line end showing in front (0,0)
                        ctx.moveTo(7, 0);
                        ctx.lineTo(-5, 5);
                        ctx.lineTo(-5, -5);
                        ctx.closePath();
                        ctx.fillStyle = this.stroke;
                        ctx.fill();
                        ctx.restore();
                    }
                });
                const drawLineWithArrow = (points) => (
                            new LineWithArrow(points, {
                                strokeWidth: 3,
                                stroke: 'blue',
                                selectable: false
                            })
                            );
                const selectLine = (points) => {
                    return drawLineWithArrow(points);
                };

                let line;
                let isDown;
                canvas.on('mouse:down', (options) => {
                    isDown = true;
                    const pointer = canvas.getPointer(options.e);
                    const points = [pointer.x, pointer.y, pointer.x, pointer.y];

                    line = selectLine(points);
                    canvas
                            .add(line)
                            .setActiveObject(line)
                            .renderAll();
                });

                canvas.on('mouse:move', (options) => {
                    if (!isDown)
                        return;
                    const pointer = canvas.getPointer(options.e);
                    line.set({x2: pointer.x, y2: pointer.y});
                    canvas.renderAll();
                });

                canvas.on('mouse:up', () => {
                    isDown = false;
                    line.setCoords();
                    canvas.setActiveObject(line).renderAll();
                });
            };
            function  arrows() {
                $scope.tb = false;
                removeEvents();
                changeObjectSelection(false);
                function drawArrow(fromx, fromy, tox, toy) {
                    var angle = Math.atan2(toy - fromy, tox - fromx);
                    var headlen = 5;  // arrow head size
                    // bring the line end back some to account for arrow head.
                    tox = tox - (headlen) * Math.cos(angle);
                    toy = toy - (headlen) * Math.sin(angle);
                    // calculate the points.
                    var points = [
                        {
                            x: fromx, // start point
                            y: fromy
                        }, {
                            x: fromx + (headlen) * Math.cos(angle - Math.PI / 2),
                            y: fromy + (headlen) * Math.sin(angle - Math.PI / 2)
                        }, {
                            x: fromx - (headlen) * Math.cos(angle), // tip
                            y: fromy - (headlen) * Math.sin(angle)
                        }, {
                            x: fromx + (headlen) * Math.cos(angle + Math.PI / 2),
                            y: fromy + (headlen) * Math.sin(angle + Math.PI / 2)
                        }, {
                            x: fromx - (headlen / 4) * Math.cos(angle - Math.PI / 2),
                            y: fromy - (headlen / 4) * Math.sin(angle - Math.PI / 2)
                        }, {
                            x: tox - (headlen / 4) * Math.cos(angle - Math.PI / 2),
                            y: toy - (headlen / 4) * Math.sin(angle - Math.PI / 2)
                        }, {
                            x: tox - (headlen) * Math.cos(angle - Math.PI / 2),
                            y: toy - (headlen) * Math.sin(angle - Math.PI / 2)
                        }, {
                            x: tox + (headlen) * Math.cos(angle), // tip
                            y: toy + (headlen) * Math.sin(angle)
                        }, {
                            x: tox - (headlen) * Math.cos(angle + Math.PI / 2),
                            y: toy - (headlen) * Math.sin(angle + Math.PI / 2)
                        }, {
                            x: tox - (headlen / 4) * Math.cos(angle + Math.PI / 2),
                            y: toy - (headlen / 4) * Math.sin(angle + Math.PI / 2)
                        }, {
                            x: fromx - (headlen / 4) * Math.cos(angle + Math.PI / 2),
                            y: fromy - (headlen / 4) * Math.sin(angle + Math.PI / 2)
                        }, {
                            x: fromx,
                            y: fromy
                        }
                    ];
                    var colors = document.getElementById("myColor").value;
                    var pline = new fabric.Polyline(points, {

                        fill: colors,
                        stroke: colors,
                        opacity: 1,
                        strokeWidth: 1,
                        originX: 'left',
                        originY: 'top',
                        selectable: false
                    });
                    canvas.add(pline);
                    canvas.renderAll();
                }

                canvas.on('mouse:down', function () {
                    var pointer = canvas.getPointer(event.e);

                    startX = pointer.x;
                    startY = pointer.y;
                    drawArrow(startX, startY);
                });
                canvas.on('mouse:move', function () {

                });
                canvas.on('mouse:up', function () {
                    var pointer = canvas.getPointer(event.e);
                    endX = pointer.x;
                    endY = pointer.y;
                    drawArrow(startX, startY, endX, endY);


                });
            }
            ;
            function  arrow() {
                $scope.tb = false;
                removeEvents();
                changeObjectSelection(false);
                function drawArrow(fromx, fromy, tox, toy) {
                    var angle = Math.atan2(toy - fromy, tox - fromx);
                    var headlen = 5;  // arrow head size
                    // bring the line end back some to account for arrow head.
                    tox = tox - (headlen) * Math.cos(angle);
                    toy = toy - (headlen) * Math.sin(angle);
                    // calculate the points.
                    var points = [
                        {
                            x: fromx, // start point
                            y: fromy
                        }, {
                            x: fromx - (headlen / 4) * Math.cos(angle - Math.PI / 2),
                            y: fromy - (headlen / 4) * Math.sin(angle - Math.PI / 2)
                        }, {
                            x: tox - (headlen / 4) * Math.cos(angle - Math.PI / 2),
                            y: toy - (headlen / 4) * Math.sin(angle - Math.PI / 2)
                        }, {
                            x: tox - (headlen) * Math.cos(angle - Math.PI / 2),
                            y: toy - (headlen) * Math.sin(angle - Math.PI / 2)
                        }, {
                            x: tox + (headlen) * Math.cos(angle), // tip
                            y: toy + (headlen) * Math.sin(angle)
                        }, {
                            x: tox - (headlen) * Math.cos(angle + Math.PI / 2),
                            y: toy - (headlen) * Math.sin(angle + Math.PI / 2)
                        }, {
                            x: tox - (headlen / 4) * Math.cos(angle + Math.PI / 2),
                            y: toy - (headlen / 4) * Math.sin(angle + Math.PI / 2)
                        }, {
                            x: fromx - (headlen / 4) * Math.cos(angle + Math.PI / 2),
                            y: fromy - (headlen / 4) * Math.sin(angle + Math.PI / 2)
                        }, {
                            x: fromx,
                            y: fromy
                        }
                    ];
                    var colors = document.getElementById("myColor").value;
                    var pline = new fabric.Polyline(points, {

                        fill: colors,
                        stroke: colors,
                        opacity: 1,
                        strokeWidth: 1,
                        originX: 'left',
                        originY: 'top',
                        selectable: false
                    });
                    canvas.add(pline);
                    canvas.renderAll();
                }

                canvas.on('mouse:down', function () {
                    var pointer = canvas.getPointer(event.e);

                    startX = pointer.x;
                    startY = pointer.y;
                    drawArrow(startX, startY);
                });
                canvas.on('mouse:move', function () {

                });
                canvas.on('mouse:up', function () {
                    var pointer = canvas.getPointer(event.e);
                    endX = pointer.x;
                    endY = pointer.y;
                    drawArrow(startX, startY, endX, endY);


                });
            }
            ;
            $scope.Arrow = function () {
                if (mode2 === "Arrow") {
                    arrow();
                } else {
                    arrows();
                }
                ;
            };
            $scope.Ellipse = function () {
                $scope.tb = false;
                removeEvents();
                changeObjectSelection(false);
                //canvas.freeDrawingBrush.color=document.getElementById("myColor").value;

                var colors = document.getElementById("myColor").value;
                canvas.on('mouse:down', function (o) {
                    isDown = true;
                    var pointer = canvas.getPointer(o.e);
                    origX = pointer.x;
                    origY = pointer.y;
                    if (mode1 === "circle") {

                        ellipse = new fabric.Ellipse({
                            left: origX,
                            top: origY,
                            originX: 'left',
                            originY: 'top',
                            rx: pointer.x - origX,
                            ry: pointer.y - origY,
                            angle: 0,
                            stroke: colors,
                            strokeWidth: 3,
                            fill: '',
                            selectable: false

                        });

                    } else {
                        ellipse = new fabric.Ellipse({
                            left: origX,
                            top: origY,
                            originX: 'left',
                            originY: 'top',
                            rx: pointer.x - origX,
                            ry: pointer.y - origY,
                            angle: 0,
                            stroke: colors,
                            strokeWidth: 3,
                            fill: colors,
                            selectable: false
                        });
                    }
                    canvas.add(ellipse);
                });

                canvas.on('mouse:move', function (o) {
                    if (!isDown)
                        return;
                    var pointer = canvas.getPointer(o.e);
                    var rx = Math.abs(origX - pointer.x) / 2;
                    var ry = Math.abs(origY - pointer.y) / 2;
                    if (rx > ellipse.strokeWidth) {
                        rx -= ellipse.strokeWidth / 2;
                    }
                    if (ry > ellipse.strokeWidth) {
                        ry -= ellipse.strokeWidth / 2;
                    }
                    ellipse.set({rx: rx, ry: ry});

                    if (origX > pointer.x) {
                        ellipse.set({originX: 'right'});
                    } else {
                        ellipse.set({originX: 'left'});
                    }
                    if (origY > pointer.y) {
                        ellipse.set({originY: 'bottom'});
                    } else {
                        ellipse.set({originY: 'top'});
                    }
                    canvas.renderAll();

                });

                canvas.on('mouse:up', function () {
                    ellipse.setCoords();
                    isDown = false;
                });
            };
            $scope.Circle = function () {
                removeEvents();
                changeObjectSelection(false);
                canvas.on('mouse:down', function (o) {
                    var colors = document.getElementById("myColor").value;
                    if (mode === 'select')
                        return;
                    isDown = true;
                    var pointer = canvas.getPointer(o.e);
                    origX = pointer.x;
                    origY = pointer.y;
                    var commonOption = {
                        left: origX, top: origY,
                        strokeWidth: 5,
                        stroke: colors,
                        fill: null,
                        strokeDashArray: [0, 0],
                        selectable: false
//                    strokeLineCap: 'round',
//                    strokeLineJoin: 'round',
//                    selectable: true
                    };
                    switch (type) {
                        case 'circle':
                            circle = new fabric.Circle(extend(commonOption, {
                                radius: 1,
                                originX: 'center', originY: 'center'
                            }));
                            canvas.add(circle);
                            break;
                    }
                });
                canvas.on('mouse:move', function (o) {
                    if (!isDown)
                        return;
                    var pointer = canvas.getPointer(o.e);

                    switch (type) {
                        case 'circle':
                            circle.set({radius: Math.abs(origX - pointer.x)});
                            break;
                    }
                    canvas.renderAll();
                });
                canvas.on('mouse:up', function (o) {
                    circle.setCoords();
                    isDown = false;
                });
            };
            function Line() {
                $scope.tb = false;
                removeEvents();
                changeObjectSelection(false);
                canvas.on('mouse:down', function (o) {
                    isDown = true;
                    var pointer = canvas.getPointer(o.e);
                    var points = [pointer.x, pointer.y, pointer.x, pointer.y];
                    var colors = document.getElementById("myColor").value;
                    line = new fabric.Line(points, {
                        strokeWidth: 5,
                        fill: colors,
                        stroke: colors,
                        originX: 'center',
                        originY: 'center',
                        selectable: false
                    });
                    canvas.add(line);
                });

                canvas.on('mouse:move', function (o) {
                    if (!isDown)
                        return;
                    var pointer = canvas.getPointer(o.e);
                    line.set({x2: pointer.x, y2: pointer.y});
                    canvas.renderAll();
                    line.setCoords();
                });

            }
            ;
            function Lines() {
                $scope.tb = false;
                removeEvents();
                changeObjectSelection(false);
                var line = null;
                canvas.on('mouse:down', function (o) {
                    isDown = true;
                    var pointer = canvas.getPointer(o.e);
                    var colors = document.getElementById("myColor").value;
                    if (line) {
                        line = new fabric.Line([line.get('x2'), line.get('y2'), pointer.x, pointer.y], {
                            stroke: colors,
                            hasControls: false,
                            hasBorders: false,
                            lockMovementX: true,
                            lockMovementY: true,
                            strokeWidth: 3,
                            selectable: true,
                            hoverCursor: 'default'
                        });
                        canvas.add(line);


                    } else {
                        line = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {

                            stroke: colors,
                            hasControls: false,
                            hasBorders: false,
                            lockMovementX: true,
                            strokeWidth: 3,
                            lockMovementY: true,
                            selectable: true,
                            hoverCursor: 'default'
                        });
                        canvas.add(line);

                    }
                });
                canvas.on('mouse:move', function (o) {
                    if (!isDown)
                        return;
                    var pointer = canvas.getPointer(o.e);
                    line.set({x2: pointer.x, y2: pointer.y});
                    canvas.renderAll();

                });

            }
            ;
            $scope.Line = function () {
                if (mode3 === 'Line') {
                    Line();
                } else {
                    Lines();
                }
                ;
            };
            $scope.Addtext = function () {
                $scope.tb = true;
                removeEvents();
                changeObjectSelection(false);
                var textOptions = {
                    fontSize: 30,
                    left: 20,
                    top: 20,
                    radius: 10,
                    borderRadius: '50px',
                    hasRotatingPoint: true
                };
                var textObject = new fabric.Text('Enter text here...', textOptions);
                canvas.add(textObject).setActiveObject(textObject);
                //console.log(canvas.getActiveObjects().text);
                document.getElementById('title').addEventListener('keyup', function () {
                    textObject.text = document.getElementById('title').value;
                    canvas.renderAll();
                });
            };
            $scope.Zoomin = function () {
                canvasScale = canvasScale * SCALE_FACTOR;

                canvas.setHeight(canvas.getHeight() * SCALE_FACTOR);
                canvas.setWidth(canvas.getWidth() * SCALE_FACTOR);

                var objects = canvas.getObjects();
                for (var i in objects) {
                    var scaleX = objects[i].scaleX;
                    var scaleY = objects[i].scaleY;
                    var left = objects[i].left;
                    var top = objects[i].top;

                    var tempScaleX = scaleX * SCALE_FACTOR;
                    var tempScaleY = scaleY * SCALE_FACTOR;
                    var tempLeft = left * SCALE_FACTOR;
                    var tempTop = top * SCALE_FACTOR;

                    objects[i].scaleX = tempScaleX;
                    objects[i].scaleY = tempScaleY;
                    objects[i].left = tempLeft;
                    objects[i].top = tempTop;

                    objects[i].setCoords();
                }

                canvas.renderAll();
            };
            $scope.Zoomout = function () {
                canvasScale = canvasScale / SCALE_FACTOR;
                canvas.setHeight(canvas.getHeight() * (1 / SCALE_FACTOR));
                canvas.setWidth(canvas.getWidth() * (1 / SCALE_FACTOR));

                var objects = canvas.getObjects();
                for (var i in objects) {
                    var scaleX = objects[i].scaleX;
                    var scaleY = objects[i].scaleY;
                    var left = objects[i].left;
                    var top = objects[i].top;

                    var tempScaleX = scaleX * (1 / SCALE_FACTOR);
                    var tempScaleY = scaleY * (1 / SCALE_FACTOR);
                    var tempLeft = left * (1 / SCALE_FACTOR);
                    var tempTop = top * (1 / SCALE_FACTOR);

                    objects[i].scaleX = tempScaleX;
                    objects[i].scaleY = tempScaleY;
                    objects[i].left = tempLeft;
                    objects[i].top = tempTop;

                    objects[i].setCoords();
                }

                canvas.renderAll();
            };
            $scope.ResetZoom = function () {
                canvas.setHeight(canvas.getHeight() * (1 / canvasScale));
                canvas.setWidth(canvas.getWidth() * (1 / canvasScale));

                var objects = canvas.getObjects();
                for (var i in objects) {
                    var scaleX = objects[i].scaleX;
                    var scaleY = objects[i].scaleY;
                    var left = objects[i].left;
                    var top = objects[i].top;

                    var tempScaleX = scaleX * (1 / canvasScale);
                    var tempScaleY = scaleY * (1 / canvasScale);
                    var tempLeft = left * (1 / canvasScale);
                    var tempTop = top * (1 / canvasScale);

                    objects[i].scaleX = tempScaleX;
                    objects[i].scaleY = tempScaleY;
                    objects[i].left = tempLeft;
                    objects[i].top = tempTop;

                    objects[i].setCoords();
                }

                canvas.renderAll();

                canvasScale = 1;
            };

        })
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
