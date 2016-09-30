/*import express from 'express';

const app = express();

app.use('/', express.static('public'));*/

import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/comments', function(req, res) {
	fs.readFile(COMMENTS_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		res.json(JSON.parse(data));
	});
});

app.post('/api/comments', function(req, res) {

	fs.readFile(COMMENTS_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		const comments = JSON.parse(data);
		// NOTE: In a real implementation, we would likely rely on a database or
		// some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
		// treat Date.now() as unique-enough for our purposes.
		const newComment = {
			id: Date.now(),
			author: req.body.author,
			text: req.body.text,
		};
		comments.push(newComment);
		fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
			if (err) {
				console.error(err);
				process.exit(1);
			}
	  		res.json(comments);
		});
	});
});


app.listen(process.env.PORT || 3000);