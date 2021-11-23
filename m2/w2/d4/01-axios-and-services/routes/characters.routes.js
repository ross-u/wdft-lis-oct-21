// routes/characters.routes.js
const router = require("express").Router();

const axios = require('axios');

const APIService = require("./../services/api.service");
const apiService = new APIService();



// Characters list  - localhost:3000/characters/list
router.get("/characters/list", (req, res) => {

  apiService.getAllCharacters()
    .then((response) => {
      // response.data is the body of the response
      console.log('response.data', response.data);
      res.render("pages/characters-list", { characters: response.data });
    })
    
});



// New character form render
router.get("/characters/create", (req, res) => {
  res.render("pages/new-character-form");
});

// New character form submit
router.post("/characters/create", (req, res) => {
  const { name, occupation, weapon } = req.body;
  const characterInfo = { name, occupation, weapon };

  apiService.createCharacter(characterInfo)
    .then((response) => {
      res.redirect('/characters/list'); // --> our route localhost:3000/characters/list
    })


});



// Character edit form render and auto fill
router.get("/characters/edit/:id", (req, res) => {
  const characterId = req.params.id;


  apiService.getOneCharacter(characterId)
    .then((response) => {

      res.render("pages/edit-character-form", { character: response.data });
    })

});




// Character edit form submit
router.post("/characters/edit/:id", (req, res) => {
  const characterId = req.params.id;
  const characterInfo = req.body;

  apiService.editCharacter(characterId, characterInfo)
    .then((response) => {
      res.redirect(`/characters/list`);
    })
    .catch((error) => console.log(error));
});


// Character delete button
router.get("/characters/delete/:id", (req, res) => {
  const characterId = req.params.id;

  apiService.deleteCharacter(characterId)
    .then((response) => {
      res.redirect(`/characters/list`);
    })
    .catch((error) => console.log(error));
  
});

module.exports = router;
