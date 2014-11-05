/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	event : function (req, res) {
		if (req.method == 'POST') {
			var data = req.body;
			var u = data.username;
		}
		return res.send('EVENT API!');
	}	
};

