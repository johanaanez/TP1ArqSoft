var express = require('express');
var app = express();

const PORT = 3000
const TIMEOUT = 5000
const ID = Math.floor(Math.random()*100)

app.get('/ping', function (req, res) {
  res.status(200).send('node ping\n'+ ID);
});

app.get('/timeout', function (req, res) {
  setTimeout(() => { 
    res.status(200).send('node - timeout \n'+ ID);
  },TIMEOUT);
});

app.get("/heavy", (req, res) => {
	var start = new Date();	
	for (;;) {
		var now = new Date();
		if (now - start >= 500) {
			break;
		}
	}
	res.status(200).send('node - heavy \n'+ ID);
});

app.listen(PORT, function () {
  ID + console.log(' - Escuchando en el puerto', PORT);
});
