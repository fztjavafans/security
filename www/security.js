
var exec = require("cordova/exec");
module.exports = {
	encrypt: function(success, error, txt) {
		exec(success, error, "Security", "encrypt", [txt]);
	},
	decrypt: function(success, error, txt) {
		exec(success, error, "Security", "decrypt", [txt]);
	},
	md5: function(success, error, txt) {
		exec(success, error, "Security", "md5", [txt]);
	},
	uuid: function(success, error, txt) {
		exec(success, error, "Security", "uuid", [txt]);
	}
};
