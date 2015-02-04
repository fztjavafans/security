
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
			alert("fail" + errtxt);
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
			alert("fail" + errtxt);
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
			alert("fail" + errtxt);
		}, "Security", "md5", [txt]);
	}
};
