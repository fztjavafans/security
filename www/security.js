
var exec = require("cordova/exec");
module.exports = {
	encrypt: function(txt) {
		exec(
		function(signtxt) {
			//success call back
			alert("success" + signtxt);
		},
		function(errtxt) {
			//fail call back
			alert("fail");
		}, "Security", "encrypt", [txt]);
	},
	decrypt: function(txt) {
		exec(
		function(signtxt) {
			//success call back
		},
		function(errtxt) {
			//fail call back
		}, "Security", "decrypt", [txt]);
	},
	md5: function(txt) {
		exec(
		function(signtxt) {
			//success call back
		},
		function(errtxt) {
			//fail call back
		}, "Security", "md5", [txt]);
	}
};
