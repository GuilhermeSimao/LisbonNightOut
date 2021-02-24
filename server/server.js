const express = require('express');

const apiRouter = require('./routes/apiRoutes');

const app = express();

app.use(express.json());

app.use('/', express.static('public'));
app.use('/event/:id', express.static('public/event.html'));
app.use('/event/:id', express.static('public'));
app.use('/bar/:id/', express.static('public/bar.html'));
app.use('/bar/:id/', express.static('public'));
app.use('/club/:id', express.static('public/club.html'));
app.use('/club/:id', express.static('public'));
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.use('/api', apiRouter);
 
app.listen(process.env.PORT || '3000', () => {

    console.log('Server is running on port: 3000');
});