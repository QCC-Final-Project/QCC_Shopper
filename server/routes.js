const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api', require('./api'));

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <title> QCC Shopper </title>
        </head>
        <body>
            <h1> Welcome to QCC Shopper's Assorted Color Store! </h1>
            <p> Colors include: Red, Blue and Green </p>
        </body>
    </html>
    `)
})

app.get('/red', (req, res) => {
    res.send(`
    <html>
        <head>
            <title> Red </title>
        </head>
        <body>
            <h1> Welcome to the Red Color Homepage</h1>
            <p>  Red has captivated the eyes of many. It can be yours for only $9.95! </p>
        </body>
    </html>
    `)
})

app.get('/blue', (req, res) => {
    res.send(`
    <html>
        <head>
            <title> Blue </title>
        </head>
        <body>
            <h1> Welcome to the Blue Color Homepage</h1>
            <p>  Don't feel blue. Buy some blue! Blue comes at the low price of $8.95! </p>
        </body>
    </html>
    `)
})

app.get('/green', (req, res) => {
    res.send(`
    <html>
        <head>
            <title> Green </title>
        </head>
        <body>
            <h1> Welcome to the Green Color Homepage</h1>
            <p>  Green = Money. Give up some green to get some green at the low, low price of $8.95! </p>
        </body>
    </html>
    `)
})

const PORT = 4000;

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`);
});