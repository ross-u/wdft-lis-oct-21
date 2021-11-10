const express = require("express");

const app = express();

// SETUP VIEW ENGINE
app.set('view engine', 'hbs');

// SETUP THE FOLDER WITH TEMPLATES
app.set('views', __dirname + '/views');


// MIDDLEWARE
app.use( express.static('public') );


// Routes
// GET /
app.get('/', (req, res) => {
  // res.sendFile(__dirname + "/public/views/index.html");

  res.render('index');
});


// GET /student
// Should render a html page stored in the views/student.hbs
app.get('/student', (req, res) => {

  // Falsy values in hbs:  false, undefined, null, 0, "", [] 
  const data = {
    name: 'Bob',
    bootcamp: 'Lisbon Web',
    image: "https://i.imgur.com/nbTj35H.jpg",
    description: "Web Dev student interested in JS ecosystem.",
    address: "Carrer de la diputacio",
    year: 2021,
    phone: 351123123,
    m1: true,
    m2: false,
    m3: false,
    techStack: ['js', 'mongo', 'express', 'node', 'hbs', 'react'],
    project: {
      projectName: 'Fancy Game',
      URL: 'http://example.com'
    },
    completedAssessments: {
      one: true,
      two: true,
      three: false
    }
  };

  res.render('student', data  );
})



// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
