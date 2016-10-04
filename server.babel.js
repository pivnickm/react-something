/*import express from 'express';

const app = express();

app.use('/', express.static('public'));*/

import fs from 'fs';
import path from 'path';
import express from 'express';
const app = express();

app.use(express.static(__dirname + '/public'))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(process.env.PORT || 3000);