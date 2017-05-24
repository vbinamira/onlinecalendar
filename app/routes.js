var client = require('smartsheet');
var smartsheet = client.createClient({accessToken:'INSERT TOKEN HERE'});

// Set options.
var options = {
    sheetId: 2252168947361668,
    columnId: 7960873114331012
};

// Get column.
smartsheet.sheets.getColumns(options)
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });