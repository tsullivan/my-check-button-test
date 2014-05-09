/*
 * Application routes
 */
module.exports = function (app) {
	/*
	 * GET home page.
	 */
	app.get('/', function(req, res){
		res.render('index', { title: 'Page 1 - Customer Satisfaction Survey' });
	});
}
