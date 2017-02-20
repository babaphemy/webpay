/**
 * Created by Babafemi.Adigun on 2/20/2017.
 */

function init(){
    var userDetails = {
        clientId: "IKIAF8F70479A6902D4BFF4E443EBF15D1D6CB19E232",
        clientSecret: "ugsmiXPXOOvks9MR7+IFHSQSdk8ZzvwQMGvd0GJva30=",
        paymentApi : "https://sandbox.interswitchng.com",
        passportApi : "https://sandbox.interswitchng.com/passport"
    };
    var initial = PaymentPlugin.init(userDetails);
};

var payWithCardRequest = {
    amount : $('#form-amount').val(), // Amount in Naira
    customerId : $('#form-customerid').val(), // Optional email, mobile no, BVN etc to uniquely identify the customer.
    currency : "NGN", // ISO Currency code
    description : "Purchase Test" // Description of product to purchase
}


$(document).ready(function (){
    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 7; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    $('#sendPayment').click(function(){
        var payWithCardSuccess = function(response) {
            var purchaseResponse = JSON.parse(response); // transaction success reponse
            alert(purchaseResponse.message);
        }
        var payWithCardFail = function(response) {
            alert(response); // transaction failure reponse
        }
        PaymentPlugin.payWithCard(payWithCardRequest, payWithCardSuccess, payWithCardFail);





       /* var amount = $('#form-amount').val();
        var customerid = $('#form-customerid').val();
        var transRef = makeid();
        var redirect = "http://localhost/newwebpay/sample_request.html";
        var hashString = transRef+"1076101"+amount+redirect+"D3D1D05AFE42AD50818167EAC73C109168A0F108F32645C8B59E897FA930DA44F9230910DAC9E20641823799A107A02068F7BC0F4CC41D2952E249552255710F";
        var hash = CryptoJS.SHA512(hashString);
        console.log(hashString);

        var iswPay = new IswPay({
            postUrl:"https://sandbox.interswitchng.com/collections/w/pay",
            amount: amount,
            productId: "1076",
            transRef: transRef,
            siteName: "MK Intermedia",
            itemId: "101",
            customerId: customerid,
            siteRedirectUrl: redirect,
            currency: "NGN",
            hash: hash,
            onComplete : function (paymentResponse){
                console.log(paymentResponse);
            }

        });*/
    });
});