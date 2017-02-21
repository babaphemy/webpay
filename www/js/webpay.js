/**
 * Created by Babafemi.Adigun on 2/21/2017.
 */

    app.initialize();

var helloApp = angular.module("HelloApp", []);
helloApp.controller("HelloCtrl", [ '$scope', function($scope) {
    $scope.name = "Calvin Hobbes";
    $scope.pay = {};
    document.addEventListener("deviceready", init, false);

    function init(){
        console.log('initialized');
        var userDetails = {
            clientId: "IKIA9614B82064D632E9B6418DF358A6A4AEA84D7218",
            clientSecret: "XCTiBtLy1G9chAnyg0z3BcaFK4cVpwDg/GTw2EmjTZ8=",
            paymentApi : "https://sandbox.interswitchng.com",
            passportApi : "https://sandbox.interswitchng.com/passport"
        };
        var initial = PaymentPlugin.init(userDetails);
    };

    var payWithCardRequest = {
        amount : 1000,//$scope.amt,//document.getElementById("form-amount").value, // Amount in Naira
        customerId :makeid(),//ocument.getElementById("form-customerid").value, // Optional email, mobile no, BVN etc to uniquely identify the customer.
        currency : "NGN", // ISO Currency code
        description : "Purchase Test" // Description of product to purchase
    }

    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 7; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }


    $scope.doPay = function(){
        console.log('hello am here');
        $scope.pay.customerId = makeid();
        $scope.pay.currency = "NGN";

        var payWithCardSuccess = function(response) {
            var purchaseResponse = JSON.parse(response); // transaction success reponse
            alert(purchaseResponse.message);
        }
        var payWithCardFail = function(response) {
            alert(response); // transaction failure reponse
        }
        PaymentPlugin.payWithCard($scope.pay, payWithCardSuccess, payWithCardFail);
    };


} ]);