
var exec = require("cordova/exec");
module.exports = {
	encrypt: function(txt) {
		exec(
		function() {
			//success call back
			alert("success");
		},
		function() {
			//fail call back
			alert("fail");
		}, "Security", "encrypt", [txt]);
	},
	decrypt: function(txt) {
		exec(
		function() {
			//success call back
		},
		function() {
			//fail call back
		}, "Security", "decrypt", [txt]);
	},
	md5: function(txt) {
		exec(
		function() {
			//success call back
		},
		function() {
			//fail call back
		}, "Security", "md5", [txt]);
	}
};
