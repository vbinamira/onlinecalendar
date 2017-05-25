var client = require('smartsheet');
var smartsheet = client.createClient({accessToken:'YOUR_ACCESS_TOKEN'});

// Set options.
var shows = {
    id: 3376023443138436
};

var dates = {
	sheetId: 6857625938749316
};

var dancers = {
	id: 6857625938749316
};

var singers = {
	id: 7653793690085252
};

module.exports = function(app) {
	app.get('/shows', function(req, res){
		smartsheet.sheets.getSheet(shows)
		    .then(function (data) {
		        res.json(data);
		    })
		    .catch(function (error) {
		        res.send(error);
		    });
	});

	app.get('/dates', function(req, res){
		smartsheet.sheets.getColumn(dates)
		    .then(function (data) {
		        res.json(data);
		    })
		    .catch(function (error) {
		        res.send(error);
		    });
	});

	app.get('/dancers', function(req, res){
		smartsheet.sheets.getSheet(dancers)
		    .then(function (data) {
		        res.json(data);
		    })
		    .catch(function (error) {
		        res.send(error);
		    });
	});

	app.get('/singers', function(req, res){
		smartsheet.sheets.getSheet(singers)
		    .then(function (data) {
		        res.json(data);
		    })
		    .catch(function (error) {
		        res.send(error);
		    });
	});
};

