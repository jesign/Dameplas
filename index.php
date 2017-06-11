<!DOCTYPE html>
<html>
    <head>
        <!--Import Google Icon Font-->
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="assets/css/app.css"  media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="assets/css/vendor.css"  media="screen,projection"/>

        <!--Let browser know website is optimized for mobile-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body ng-app="myApp">
        <nav class="blue darken-3">

            <div class="nav-wrapper">
                <a href="#" class="brand-logo">DAMEPLAS</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a ui-sref="getPrice" ui-sref-active="active">GET PRICE</a></li>
                    <li><a ui-sref="priceList" ui-sref-active="active">PRICELIST</a></li>
                    <li><a ui-sref="admin" ui-sref-active="active">ADMIN</a></li>
                </ul>
            </div>
        </nav>
        <div class="row">
            <div class="col s12 m3 l3">
                <div class="card darken-1">
                    <div class="card-content ">
                        <span class="card-title">Items</span>
                        <div class="collection">
                            <a href="#!" class="collection-item">Medal</a>
                            <a href="#!" class="collection-item">Trophy</a>
                            <a href="#!" class="collection-item">Table & Door Sign</a>
                            <a href="#!" class="collection-item">Nameplates</a>
                            <a href="#!" class="collection-item">Cut out letter</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m9 l9">
                <div class="card">
                    <div class="card-content">
                        <ui-view></ui-view>
                    </div>
                </div>
            </div>
        </div>
                
        <!--Import jQuery before materialize.js-->
        <script type="text/javascript" src="assets/js/vendor.js"></script>
        <script type="text/javascript" src="assets/js/dependency.js"></script>
        <script type="text/javascript" src="assets/js/app.js"></script>
    </body>
</html>
