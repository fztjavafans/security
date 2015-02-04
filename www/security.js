
var exec = require("cordova/exec");
module.exports = {
	encrypt: function(txt) {
		exec(
		function(signtxt) {
			return signtxt[0];
		}, null, "Security", "encrypt", [txt]);
	},
	decrypt: function(txt) {
		exec(
		function(signtxt) {
			return signtxt[0];
		}, null, "Security", "decrypt", [txt]);
	},
	md5: function(txt) {
		exec(
		function(signtxt) {
			return signtxt[0];
		}, null, "Security", "md5", [txt]);
	}
};
