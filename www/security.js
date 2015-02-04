
var exec = require("cordova/exec");
module.exports = {
	encrypt: function(txt) {
		exec(
		function(signtxt) {
			//success call back
			alert("success" + signtxt.retext);
		},
		function(errtxt) {
			//fail call back
			alert("fail" + signtxt);
		}, "Security", "encrypt", [txt]);
	},
	decrypt: function(txt) {
		exec(
		function(signtxt) {
			//success call back
			alert("success" + signtxt.retext);
		},
		function(errtxt) {
			//fail call back
			alert("fail" + signtxt);
		}, "Security", "decrypt", [txt]);
	},
	md5: function(txt) {
		exec(
		function(signtxt) {
			//success call back
			alert("success" + signtxt.retext);
		},
		function(errtxt) {
			//fail call back
			alert("fail" + signtxt);
		}, "Security", "md5", [txt]);
	}
};
