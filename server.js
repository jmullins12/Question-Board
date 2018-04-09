var express = require('express');
var anyDB = require('any-db');
var conn = anyDB.createConnection('sqlite3://QuestionBoard.db');

//conn.query("CREATE TABLE IF NOT EXISTS classpeople (uid INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT)");

//conn.query("INSERT INTO classpeople (firstName, lastName) VALUES ('Jackson', 'Mullins')", function(err, data){
	//if (err) throw err;
//});

conn.query("SELECT * FROM test", function(err, data){
	if (err) throw err;
	console.log(data);
});

