const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
// require('dotenv').config();


const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// const port = process.env.PORT || 5000;

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
//connect to the database
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/weddingRSVP', { useNewUrlParser: true });
//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`)
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const routes = require('./routes/api');
// const path = require('path');
// // require('dotenv').config();



// const app = express();


// const port = process.env.PORT || 5000;

// //connect to the database
// mongoose.connect('mongodb://localhost:27017/weddingRSVP', {useNewUrlParser: true});
// //since mongoose promise is depreciated, we overide it with node's promise
// mongoose.Promise = global.Promise;

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(bodyParser.json());

// app.use('/api', routes);

// app.use((err, req, res, next) => {
//   console.log(err);
//   next();
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`)
// });