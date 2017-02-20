cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.interswitchng.sdk.payment.PaymentPlugin",
        "file": "plugins/com.interswitchng.sdk.payment/www/PaymentPlugin.js",
        "pluginId": "com.interswitchng.sdk.payment",
        "clobbers": [
            "PaymentPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-add-swift-support": "1.6.2",
    "com.interswitchng.sdk.payment": "0.0.1",
    "cordova-plugin-whitelist": "1.3.1"
};
// BOTTOM OF METADATA
});