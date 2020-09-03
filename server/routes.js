const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const db = require('./db/db');
//const { User, Item } = require('./models');
const port = 4000;

/*let users = [
    { name: 'Plato', id: 1 },
    { name: 'Copernicus', id: 2 },
  ];
*/
//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });


app.use('/api', require('./api'));

//joins a path between the client and the server
app.use(express.static(path.join(__dirname, 'client', 'build')));

//test code
//console.log(path.join(__dirname, '..' , 'client', 'build'));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '..' , 'client', 'build', 'index.html'));
// });

//this will print out on the user page { name: 'Plato', id: 1 },  { name: 'Copernicus', id: 2 },
/*app.get('/users', (req, res, next) => {
  res.send(users);
});
*/
// //this will push any new user's information into the back of the array
// app.post('/users', (req, res, next) => {
//   const { name } = req.body;
//   const id = users[users.length - 1].id + 1;
//   const newUser = { name, id };
//   users.push(newUser);
//   res.send(newUser);
// });
/*
//this will access a specific id #'s information.
app.put('/users/:id', (req, res, next) => {
  const user = users.filter((user) => user.id === parseInt(req.params.id))[0];
  if (user === undefined) {
    res.send('user does not exist');
  }
  user.name = 'hello';
  res.send(user);
});
*/
// // this will delete a specific id #'s information
// app.delete('/users/:id', (req, res, next) => {
//   users = users.filter((user) => user.id !== parseInt(req.params.id));
//   res.send(users);
// });
/*
// Error message (routes that are not found)
app.use((req, res, next) => {
  console.log('hello');
  res.send('404 not found');
});
*/
//Linking the specific port
//app.listen(port, () => {
//    console.log(`Server Started on Port: ${port}`);
//});

//sync database
const startApp = async () => {
    const PORT = 4000;

    await db.sync();

    app.listen(PORT,() => {
        console.log(`listening on port ${PORT}`);
    });
};

startApp();